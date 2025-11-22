
import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Recipe, CraftType } from '../types';

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key not found. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

const RECIPE_SCHEMA: Schema = {
  type: Type.OBJECT,
  properties: {
    recipes: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Name of the item being crafted (e.g., 'Vostaskus Steel Plate')" },
          skillLevel: { 
            type: Type.NUMBER, 
            description: "The required skill level to craft this item. Must be one of: 0, 30, 60, 90, or 100.",
            enum: ["0", "30", "60", "90", "100"]
          },
          ingredients: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING, description: "Name of the raw material (e.g., 'Vostaskus Ingot')" },
                amount: { type: Type.NUMBER, description: "Amount needed for ONE unit of the item" },
                unit: { type: Type.STRING, description: "Unit if applicable (optional)", nullable: true }
              },
              required: ["name", "amount"]
            }
          }
        },
        required: ["name", "skillLevel", "ingredients"]
      }
    }
  }
};

export const generateRecipeFromText = async (query: string): Promise<Recipe[] | null> => {
  const client = getAiClient();
  if (!client) return null;

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert blacksmith and tailor for the game 'Life is Feudal: MMO'. 
      The user is asking about crafting recipes. 
      Based on the user's input: "${query}", provide the standard crafting recipe(s) for a SINGLE unit of the item(s).
      If the user specifies a mod like 'Arden', try to align with standard MMO mechanics unless you know specific mod differences, but prioritize standard recipes if unsure.
      IMPORTANT: Assign a skill level (0, 30, 60, 90, or 100) to each recipe based on its complexity in the game. Use 0 for very basic components.
      Return ONLY the raw material requirements per 1 item.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: RECIPE_SCHEMA,
        systemInstruction: "Be precise with Life is Feudal material names (e.g., prefer 'Steel Bar' over 'Steel'). Ensure skillLevel is provided."
      }
    });

    const text = response.text;
    if (!text) return null;

    const data = JSON.parse(text) as { recipes: { name: string, skillLevel: 0|30|60|90|100, ingredients: { name: string, amount: number, unit?: string }[] }[] };
    
    return data.recipes.map((r, index) => ({
      id: `ai-gen-${Date.now()}-${index}`,
      name: r.name,
      type: CraftType.AI_GENERATED,
      skillLevel: r.skillLevel,
      ingredients: r.ingredients
    }));

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};