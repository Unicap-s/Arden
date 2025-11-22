
export enum CraftType {
  ARMORSMITHING = 'Armorsmithing',
  TAILORING = 'Tailoring',
  AI_GENERATED = 'AI Generated',
  KILNING = 'Kilning',
  FORGING = 'Forging',
  WEAPONSMITHING = 'Weaponsmithing',
  ARTISAN = 'Artisan'
}

export type Language = 'en' | 'es' | 'de' | 'ru' | 'tr';

export interface Ingredient {
  name: string;
  amount: number;
  unit?: string;
}

export interface Recipe {
  id: string;
  name: string;
  type: CraftType;
  skillLevel: 0 | 30 | 60 | 90 | 100;
  group?: string; // Optional grouping (e.g. "Iron Plate Set")
  ingredients: Ingredient[]; // Base ingredients for 1 item
}

export interface CalculationResult {
  itemName: string;
  quantity: number;
  totalIngredients: Ingredient[];
}