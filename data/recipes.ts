
import { CraftType, Recipe } from '../types';

export const STATIC_RECIPES: Recipe[] = [
  // --- ARTISAN Level 0 ---
  {
    id: 'primitive-sickle',
    name: 'Primitive Sickle',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Flint Stone', amount: 1 },
      { name: 'Branch', amount: 1 },
      { name: 'Plant Fiber', amount: 1 }
    ]
  },
  {
    id: 'primitive-shovel',
    name: 'Primitive Shovel',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Flint Stone', amount: 1 },
      { name: 'Branch', amount: 1 },
      { name: 'Plant Fiber', amount: 1 }
    ]
  },
  {
    id: 'primitive-hammer',
    name: 'Primitive Hammer',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Branch', amount: 1 },
      { name: 'Flint Stone', amount: 4 },
      { name: 'Plant Fiber', amount: 3 }
    ]
  },
  {
    id: 'primitive-axe',
    name: 'Primitive Axe',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Flint Stone', amount: 1 },
      { name: 'Branch', amount: 1 },
      { name: 'Plant Fiber', amount: 2 }
    ]
  },
  {
    id: 'primitive-pickaxe',
    name: 'Primitive Pickaxe',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Flint Stone', amount: 1 },
      { name: 'Branch', amount: 1 },
      { name: 'Plant Fiber', amount: 3 }
    ]
  },
  {
    id: 'primitive-saw',
    name: 'Primitive Saw',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Flint Stone', amount: 7 },
      { name: 'Branch', amount: 3 },
      { name: 'Plant Fiber', amount: 3 }
    ]
  },
  {
    id: 'torch',
    name: 'Torch',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Flint Stone', amount: 1 },
      { name: 'Branch', amount: 1 },
      { name: 'Plant Fiber', amount: 3 }
    ]
  },
  {
    id: 'primitive-knife',
    name: 'Primitive Knife',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Flint Stone', amount: 1 },
      { name: 'Branch', amount: 1 }
    ]
  },
  {
    id: 'primitive-crucible-stick',
    name: 'Primitive Crucible and Stick',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Rock', amount: 2 },
      { name: 'Branch', amount: 1 }
    ]
  },
  {
    id: 'primitive-fishing-pole',
    name: 'Primitive Fishing Pole',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Flint Stone', amount: 1 },
      { name: 'Plant Fiber', amount: 2 }
    ]
  },
  {
    id: 'mortar-pestle',
    name: 'Mortar and Pestle',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Rock', amount: 1 },
      { name: 'Branch', amount: 1 }
    ]
  },
  {
    id: 'snare-trap',
    name: 'Snare Trap',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Branch', amount: 2 },
      { name: 'Plant Fiber', amount: 10 },
      { name: 'Apple', amount: 1 }
    ]
  },
  {
    id: 'primitive-cooking-pot',
    name: 'Primitive Cooking Pot',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Rock', amount: 1 },
      { name: 'Branch', amount: 2 }
    ]
  },
  {
    id: 'snowball',
    name: 'Snowball',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Snow', amount: 1 }
    ]
  },
  {
    id: 'primitive-sewing-tools',
    name: 'Primitive Sewing Tools',
    type: CraftType.ARTISAN,
    skillLevel: 0,
    ingredients: [
      { name: 'Branch', amount: 1 },
      { name: 'Plant Fiber', amount: 1 },
      { name: 'Bones', amount: 1 }
    ]
  },
  
  // --- ARTISAN Level 100 ---
  {
    id: 'small-essence-hardness',
    name: 'Small Essence of Hardness',
    type: CraftType.ARTISAN,
    skillLevel: 100,
    ingredients: [
      { name: 'Large Essence of Hardness', amount: 1 }
    ]
  },
  {
    id: 'large-essence-hardness',
    name: 'Large Essence of Hardness',
    type: CraftType.ARTISAN,
    skillLevel: 100,
    ingredients: [
      { name: 'Small Essence of Hardness', amount: 2 }
    ]
  },
  {
    id: 'small-sharpening-stone',
    name: 'Small Sharpening Stone',
    type: CraftType.ARTISAN,
    skillLevel: 100,
    ingredients: [
      { name: 'Great Sharpening Stone', amount: 1 }
    ]
  },
  {
    id: 'great-sharpening-stone',
    name: 'Great Sharpening Stone',
    type: CraftType.ARTISAN,
    skillLevel: 100,
    ingredients: [
      { name: 'Small Sharpening Stone', amount: 2 }
    ]
  },

  // -- Armorsmithing Level 0 (Materials) --
  {
    id: 'wire-recipe',
    name: 'Wire',
    type: CraftType.ARMORSMITHING,
    skillLevel: 0,
    ingredients: [
      { name: 'Common Bar', amount: 0.5 }
    ]
  },
  {
    id: 'small-metal-plate-recipe',
    name: 'Small Metal Plate',
    type: CraftType.ARMORSMITHING,
    skillLevel: 0,
    ingredients: [
      { name: 'Common Bar', amount: 1 }
    ]
  },
  {
    id: 'chainmail-recipe',
    name: 'Chainmail',
    type: CraftType.ARMORSMITHING,
    skillLevel: 0,
    ingredients: [
      { name: 'Wire', amount: 3 },
      { name: 'Common Bar', amount: 1 }
    ]
  },
  {
    id: 'metal-plate-recipe',
    name: 'Metal Plate',
    type: CraftType.ARMORSMITHING,
    skillLevel: 0,
    ingredients: [
      { name: 'Common Ingots', amount: 1 }
    ]
  },
  {
    id: 'scale-strip-recipe',
    name: 'Scale Strip',
    type: CraftType.ARMORSMITHING,
    skillLevel: 0,
    ingredients: [
      { name: 'Common Bar', amount: 3 },
      { name: 'Wire', amount: 1 }
    ]
  },
  
  // -- Level 30 Armorsmithing: Iron Plate Set --
  {
    id: 'iron-plate-helm',
    name: 'Iron Plate Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Iron Plate Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 2 },
      { name: 'Metal Plate', amount: 3 }
    ]
  },
  {
    id: 'iron-plate-breastplate',
    name: 'Iron Plate Breastplate',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Iron Plate Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 5 },
      { name: 'Metal Plate', amount: 5 },
      { name: 'Leather Strips', amount: 2 }
    ]
  },
  {
    id: 'iron-plate-vambraces',
    name: 'Iron Plate Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Iron Plate Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 3 },
      { name: 'Small Metal Plate', amount: 6 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'iron-plate-gauntlets',
    name: 'Iron Plate Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Iron Plate Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 2 },
      { name: 'Small Metal Plate', amount: 4 }
    ]
  },
  {
    id: 'iron-plate-leggings',
    name: 'Iron Plate Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Iron Plate Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 3 },
      { name: 'Small Metal Plate', amount: 6 },
      { name: 'Leather Strips', amount: 2 }
    ]
  },
  {
    id: 'iron-plate-greaves',
    name: 'Iron Plate Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Iron Plate Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 2 },
      { name: 'Small Metal Plate', amount: 3 }
    ]
  },

  // -- Level 30 Armorsmithing: Light Chainmail Set --
  {
    id: 'light-chainmail-helm',
    name: 'Light Chainmail Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Chainmail Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 2 },
      { name: 'Chainmail', amount: 3 }
    ]
  },
  {
    id: 'light-chainmail-tunic',
    name: 'Light Chainmail Tunic',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Chainmail Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 5 },
      { name: 'Chainmail', amount: 5 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'light-chainmail-vambraces',
    name: 'Light Chainmail Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Chainmail Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 3 },
      { name: 'Chainmail', amount: 4 }
    ]
  },
  {
    id: 'light-chainmail-gauntlets',
    name: 'Light Chainmail Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Chainmail Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 2 },
      { name: 'Chainmail', amount: 3 }
    ]
  },
  {
    id: 'light-chainmail-leggings',
    name: 'Light Chainmail Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Chainmail Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 3 },
      { name: 'Chainmail', amount: 4 },
      { name: 'Leather Strips', amount: 1 }
    ]
  },
  {
    id: 'light-chainmail-greaves',
    name: 'Light Chainmail Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Chainmail Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 2 },
      { name: 'Chainmail', amount: 3 },
      { name: 'Leather Strips', amount: 2 }
    ]
  },

  // -- Level 30 Armorsmithing: Light Scale Set --
  {
    id: 'light-scale-helm',
    name: 'Light Scale Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Scale Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 2 },
      { name: 'Scale Strip', amount: 3 }
    ]
  },
  {
    id: 'light-scale-tunic',
    name: 'Light Scale Tunic',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Scale Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 3 },
      { name: 'Thin Leather', amount: 2 },
      { name: 'Scale Strip', amount: 4 }
    ]
  },
  {
    id: 'light-scale-vambraces',
    name: 'Light Scale Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Scale Armor',
    ingredients: [
      { name: 'Plant Fiber', amount: 20 },
      { name: 'Scale Strip', amount: 2 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'light-scale-gauntlets',
    name: 'Light Scale Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Scale Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Scale Strip', amount: 3 }
    ]
  },
  {
    id: 'light-scale-leggings',
    name: 'Light Scale Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Scale Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 2 },
      { name: 'Thin Leather', amount: 2 },
      { name: 'Scale Strip', amount: 4 }
    ]
  },
  {
    id: 'light-scale-greaves',
    name: 'Light Scale Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 30,
    group: 'Light Scale Armor',
    ingredients: [
      { name: 'Simple Cloth', amount: 3 },
      { name: 'Scale Strip', amount: 4 }
    ]
  },

  // -- Level 60 Armorsmithing: Half Plate Armor Set --
  {
    id: 'half-plate-helm',
    name: 'Half Plate Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Half Plate Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Wire', amount: 3 },
      { name: 'Metal Plate', amount: 3 },
      { name: 'Chainmail', amount: 3 }
    ]
  },
  {
    id: 'half-plate-breastplate',
    name: 'Half Plate Breastplate',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Half Plate Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Hank of Linen', amount: 3 },
      { name: 'Metal Plate', amount: 9 },
      { name: 'Leather Strips', amount: 2 }
    ]
  },
  {
    id: 'half-plate-vambraces',
    name: 'Half Plate Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Half Plate Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Small Metal Plate', amount: 12 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'half-plate-gauntlets',
    name: 'Half Plate Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Half Plate Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Small Metal Plate', amount: 6 }
    ]
  },
  {
    id: 'half-plate-leggings',
    name: 'Half Plate Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Half Plate Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Metal Plate', amount: 6 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'half-plate-greaves',
    name: 'Half Plate Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Half Plate Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Small Metal Plate', amount: 6 },
      { name: 'Wire', amount: 3 }
    ]
  },

  // -- Level 60 Armorsmithing: Regular Scale Armor Set --
  {
    id: 'regular-scale-helm',
    name: 'Regular Scale Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Scale Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Scale Strip', amount: 3 },
      { name: 'Wire', amount: 4 },
      { name: 'Small Metal Plate', amount: 4 }
    ]
  },
  {
    id: 'regular-scale-tunic',
    name: 'Regular Scale Tunic',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Scale Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 3 },
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Linen', amount: 6 },
      { name: 'Scale Strip', amount: 6 }
    ]
  },
  {
    id: 'regular-scale-vambraces',
    name: 'Regular Scale Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Scale Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Linen', amount: 3 },
      { name: 'Scale Strip', amount: 5 }
    ]
  },
  {
    id: 'regular-scale-gauntlets',
    name: 'Regular Scale Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Scale Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Scale Strip', amount: 3 }
    ]
  },
  {
    id: 'regular-scale-leggings',
    name: 'Regular Scale Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Scale Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Thin Leather', amount: 2 },
      { name: 'Scale Strip', amount: 6 },
      { name: 'Small Metal Plate', amount: 3 }
    ]
  },
  {
    id: 'regular-scale-greaves',
    name: 'Regular Scale Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Scale Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Small Metal Plate', amount: 3 },
      { name: 'Scale Strip', amount: 4 },
      { name: 'Leather Strips', amount: 2 }
    ]
  },

  // -- Level 60 Armorsmithing: Regular Chainmail Armor Set --
  {
    id: 'regular-chainmail-helm',
    name: 'Regular Chainmail Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Wire', amount: 6 },
      { name: 'Chainmail', amount: 6 }
    ]
  },
  {
    id: 'regular-chainmail-tunic',
    name: 'Regular Chainmail Tunic',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 3 },
      { name: 'Hank of Linen', amount: 3 },
      { name: 'Chainmail', amount: 8 },
      { name: 'Leather Strips', amount: 2 }
    ]
  },
  {
    id: 'regular-chainmail-vambraces',
    name: 'Regular Chainmail Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Chainmail', amount: 6 }
    ]
  },
  {
    id: 'regular-chainmail-gauntlets',
    name: 'Regular Chainmail Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Leather Strips', amount: 3 },
      { name: 'Chainmail', amount: 4 }
    ]
  },
  {
    id: 'regular-chainmail-leggings',
    name: 'Regular Chainmail Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 3 },
      { name: 'Hank of Linen', amount: 3 },
      { name: 'Chainmail', amount: 6 }
    ]
  },
  {
    id: 'regular-chainmail-greaves',
    name: 'Regular Chainmail Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 60,
    group: 'Regular Chainmail Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Chainmail', amount: 4 }
    ]
  },

  // -- Level 90 Armorsmithing: Full Plate Armor Set --
  {
    id: 'full-plate-helm',
    name: 'Full Plate Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Full Plate Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Wire', amount: 6 },
      { name: 'Metal Plate', amount: 3 },
      { name: 'Small Metal Plate', amount: 3 }
    ]
  },
  {
    id: 'full-plate-breastplate',
    name: 'Full Plate Breastplate',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Full Plate Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 4 },
      { name: 'Wire', amount: 9 },
      { name: 'Metal Plate', amount: 15 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'full-plate-vambraces',
    name: 'Full Plate Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Full Plate Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 3 },
      { name: 'Wire', amount: 9 },
      { name: 'Small Metal Plate', amount: 15 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'full-plate-gauntlets',
    name: 'Full Plate Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Full Plate Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Silk', amount: 2 },
      { name: 'Small Metal Plate', amount: 6 }
    ]
  },
  {
    id: 'full-plate-leggings',
    name: 'Full Plate Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Full Plate Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 3 },
      { name: 'Metal Plate', amount: 9 },
      { name: 'Small Metal Plate', amount: 6 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'full-plate-greaves',
    name: 'Full Plate Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Full Plate Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Silk', amount: 2 },
      { name: 'Small Metal Plate', amount: 12 },
      { name: 'Wire', amount: 3 }
    ]
  },

  // -- Level 90 Armorsmithing: Heavy Scale Armor Set --
  {
    id: 'heavy-scale-helm',
    name: 'Heavy Scale Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Scale Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Scale Strip', amount: 6 },
      { name: 'Wire', amount: 3 },
      { name: 'Small Metal Plate', amount: 3 }
    ]
  },
  {
    id: 'heavy-scale-tunic',
    name: 'Heavy Scale Tunic',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Scale Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 3 },
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Silk', amount: 3 },
      { name: 'Scale Strip', amount: 12 }
    ]
  },
  {
    id: 'heavy-scale-vambraces',
    name: 'Heavy Scale Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Scale Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Silk', amount: 2 },
      { name: 'Scale Strip', amount: 9 }
    ]
  },
  {
    id: 'heavy-scale-gauntlets',
    name: 'Heavy Scale Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Scale Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Silk', amount: 2 },
      { name: 'Scale Strip', amount: 3 }
    ]
  },
  {
    id: 'heavy-scale-leggings',
    name: 'Heavy Scale Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Scale Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 3 },
      { name: 'Thin Leather', amount: 2 },
      { name: 'Scale Strip', amount: 10 },
      { name: 'Hank of Silk', amount: 3 }
    ]
  },
  {
    id: 'heavy-scale-greaves',
    name: 'Heavy Scale Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Scale Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Small Metal Plate', amount: 3 },
      { name: 'Scale Strip', amount: 6 },
      { name: 'Leather Strips', amount: 2 }
    ]
  },

  // -- Level 90 Armorsmithing: Heavy Chainmail Armor Set --
  {
    id: 'heavy-chainmail-helm',
    name: 'Heavy Chainmail Helm',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Wire', amount: 3 },
      { name: 'Chainmail', amount: 6 },
      { name: 'Small Metal Plate', amount: 3 }
    ]
  },
  {
    id: 'heavy-chainmail-tunic',
    name: 'Heavy Chainmail Tunic',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 4 },
      { name: 'Chainmail', amount: 12 },
      { name: 'Small Metal Plate', amount: 3 },
      { name: 'Leather Strips', amount: 3 }
    ]
  },
  {
    id: 'heavy-chainmail-vambraces',
    name: 'Heavy Chainmail Vambraces',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Chainmail', amount: 8 },
      { name: 'Small Metal Plate', amount: 3 },
      { name: 'Leather Strips', amount: 2 }
    ]
  },
  {
    id: 'heavy-chainmail-gauntlets',
    name: 'Heavy Chainmail Gauntlets',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Chainmail', amount: 6 }
    ]
  },
  {
    id: 'heavy-chainmail-leggings',
    name: 'Heavy Chainmail Leggings',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Chainmail Armor',
    ingredients: [
      { name: 'Linen Cloth', amount: 3 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Chainmail', amount: 10 },
      { name: 'Small Metal Plate', amount: 3 }
    ]
  },
  {
    id: 'heavy-chainmail-greaves',
    name: 'Heavy Chainmail Greaves',
    type: CraftType.ARMORSMITHING,
    skillLevel: 90,
    group: 'Heavy Chainmail Armor',
    ingredients: [
      { name: 'Thin Leather', amount: 2 },
      { name: 'Hank of Linen', amount: 2 },
      { name: 'Chainmail', amount: 6 },
      { name: 'Small Metal Plate', amount: 3 }
    ]
  },

  // -- Level 100 Armorsmithing --
  {
    id: 'royal-plate',
    name: 'Royal Plate Armor (Kraliyet Zırhı)',
    type: CraftType.ARMORSMITHING,
    skillLevel: 100,
    ingredients: [
      { name: 'Vostaskus Steel Bar', amount: 25 },
      { name: 'Silk Cloth', amount: 4 },
      { name: 'Gold Wire', amount: 5 },
      { name: 'Rivets', amount: 15 }
    ]
  },

  // -- Tailoring --
  {
    id: 'coarse-thread',
    name: 'Coarse Thread (Kaba İplik) x10',
    type: CraftType.TAILORING,
    skillLevel: 0,
    ingredients: [
      { name: 'Plant Fiber', amount: 10 }
    ]
  },
  {
    id: 'rope',
    name: 'Rope (Halat)',
    type: CraftType.TAILORING,
    skillLevel: 0,
    ingredients: [
      { name: 'Plant Fiber', amount: 10 }
    ]
  },
  {
    id: 'padded-armor',
    name: 'Padded Armor (Dolgulu Zırh)',
    type: CraftType.TAILORING,
    skillLevel: 30,
    ingredients: [
      { name: 'Linen Cloth', amount: 10 },
      { name: 'Hank of Linen', amount: 5 },
      { name: 'Thin Leather', amount: 2 }
    ]
  },
  {
    id: 'tabard',
    name: 'Tabard (Üniforma)',
    type: CraftType.TAILORING,
    skillLevel: 30,
    ingredients: [
      { name: 'Linen Cloth', amount: 6 },
      { name: 'Hank of Wool', amount: 2 }
    ]
  },
  {
    id: 'leather-armor',
    name: 'Leather Armor (Deri Zırh)',
    type: CraftType.TAILORING,
    skillLevel: 60,
    ingredients: [
      { name: 'Thick Leather', amount: 10 },
      { name: 'Leather Strips', amount: 10 },
      { name: 'Coarse Thread', amount: 5 }
    ]
  },
  {
    id: 'decorated-clothing',
    name: 'Decorated Clothing',
    type: CraftType.TAILORING,
    skillLevel: 90,
    ingredients: [
      { name: 'Silk Cloth', amount: 8 },
      { name: 'Gold Thread', amount: 2 },
      { name: 'Fine Leather', amount: 4 }
    ]
  },
  {
    id: 'royal-cloth',
    name: 'Royal Clothes (Kraliyet Giysisi)',
    type: CraftType.TAILORING,
    skillLevel: 100,
    ingredients: [
      { name: 'Silk Cloth', amount: 12 },
      { name: 'Gold Thread', amount: 4 },
      { name: 'Jeweled Button', amount: 6 }
    ]
  }
];
