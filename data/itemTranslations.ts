
import { Language } from '../types';

export const ITEM_TRANSLATIONS: Record<string, Record<Language, string>> = {
  // --- GROUPS (SETS) ---
  "Iron Plate Armor": {
    en: "Iron Plate Armor", es: "Armadura de Placas de Hierro", de: "Eisenplattenrüstung", ru: "Железный латный доспех", tr: "Demir Plaka Zırh"
  },
  "Light Chainmail Armor": {
    en: "Light Chainmail Armor", es: "Cota de Malla Ligera", de: "Leichte Kettenrüstung", ru: "Легкая кольчуга", tr: "Hafif Zincir Zırh"
  },
  "Light Scale Armor": {
    en: "Light Scale Armor", es: "Armadura de Escamas Ligera", de: "Leichte Schuppenrüstung", ru: "Легкий чешуйчатый доспех", tr: "Hafif Pullu Zırh"
  },
  "Half Plate Armor": {
    en: "Half Plate Armor", es: "Media Armadura de Placas", de: "Halbplattenrüstung", ru: "Полулатный доспех", tr: "Yarım Plaka Zırh"
  },
  "Regular Scale Armor": {
    en: "Regular Scale Armor", es: "Armadura de Escamas Regular", de: "Schuppenrüstung", ru: "Обычный чешуйчатый доспех", tr: "Normal Pullu Zırh"
  },
  "Regular Chainmail Armor": {
    en: "Regular Chainmail Armor", es: "Cota de Malla Regular", de: "Kettenrüstung", ru: "Обычная кольчуга", tr: "Normal Zincir Zırh"
  },
  "Full Plate Armor": {
    en: "Full Plate Armor", es: "Armadura de Placas Completa", de: "Volle Plattenrüstung", ru: "Полный латный доспех", tr: "Tam Plaka Zırh"
  },
  "Heavy Scale Armor": {
    en: "Heavy Scale Armor", es: "Armadura de Escamas Pesada", de: "Schwere Schuppenrüstung", ru: "Тяжелый чешуйчатый доспех", tr: "Ağır Pullu Zırh"
  },
  "Heavy Chainmail Armor": {
    en: "Heavy Chainmail Armor", es: "Cota de Malla Pesada", de: "Schwere Kettenrüstung", ru: "Тяжелая кольчуга", tr: "Ağır Zincir Zırh"
  },

  // --- ARTISAN TOOLS & ITEMS ---
  "Primitive Sickle": { en: "Primitive Sickle", es: "Hoz Primitiva", de: "Primitive Sichel", ru: "Примитивный серп", tr: "İlkel Orak" },
  "Primitive Shovel": { en: "Primitive Shovel", es: "Pala Primitiva", de: "Primitive Schaufel", ru: "Примитивная лопата", tr: "İlkel Kürek" },
  "Primitive Hammer": { en: "Primitive Hammer", es: "Martillo Primitivo", de: "Primitiver Hammer", ru: "Примитивный молот", tr: "İlkel Çekiç" },
  "Primitive Axe": { en: "Primitive Axe", es: "Hacha Primitiva", de: "Primitive Axt", ru: "Примитивный топор", tr: "İlkel Balta" },
  "Primitive Pickaxe": { en: "Primitive Pickaxe", es: "Pico Primitivo", de: "Primitive Spitzhacke", ru: "Примитивная кирка", tr: "İlkel Kazma" },
  "Primitive Saw": { en: "Primitive Saw", es: "Sierra Primitiva", de: "Primitive Säge", ru: "Примитивная пила", tr: "İlkel Testere" },
  "Torch": { en: "Torch", es: "Antorcha", de: "Fackel", ru: "Факел", tr: "Meşale" },
  "Primitive Knife": { en: "Primitive Knife", es: "Cuchillo Primitivo", de: "Primitives Messer", ru: "Примитивный нож", tr: "İlkel Bıçak" },
  "Primitive Crucible and Stick": { en: "Primitive Crucible and Stick", es: "Crisol y Palo Primitivos", de: "Primitiver Tiegel und Stock", ru: "Примитивный тигель и палка", tr: "İlkel Pota ve Çubuk" },
  "Primitive Fishing Pole": { en: "Primitive Fishing Pole", es: "Caña de Pescar Primitiva", de: "Primitive Angelrute", ru: "Примитивная удочка", tr: "İlkel Olta" },
  "Mortar and Pestle": { en: "Mortar and Pestle", es: "Mortero y Maja", de: "Mörser und Stößel", ru: "Ступка и пестик", tr: "Havan ve Havaneli" },
  "Snare Trap": { en: "Snare Trap", es: "Trampa de Lazo", de: "Schlingenfalle", ru: "Силок", tr: "Tuzak (Snare)" },
  "Primitive Cooking Pot": { en: "Primitive Cooking Pot", es: "Olla Primitiva", de: "Primitiver Kochtopf", ru: "Примитивный котелок", tr: "İlkel Pişirme Kabı" },
  "Snowball": { en: "Snowball", es: "Bola de Nieve", de: "Schneeball", ru: "Снежок", tr: "Kartopu" },
  "Primitive Sewing Tools": { en: "Primitive Sewing Tools", es: "Herramientas de Costura Primitivas", de: "Primitives Nähzeug", ru: "Примитивные швейные инструменты", tr: "İlkel Dikiş Aletleri" },
  "Small Essence of Hardness": { en: "Small Essence of Hardness", es: "Pequeña Esencia de Dureza", de: "Kleine Essenz der Härte", ru: "Малая эссенция твердости", tr: "Küçük Sertlik Özü" },
  "Large Essence of Hardness": { en: "Large Essence of Hardness", es: "Gran Esencia de Dureza", de: "Große Essenz der Härte", ru: "Большая эссенция твердости", tr: "Büyük Sertlik Özü" },
  "Small Sharpening Stone": { en: "Small Sharpening Stone", es: "Piedra de Afilar Pequeña", de: "Kleiner Schleifstein", ru: "Малый точильный камень", tr: "Küçük Bileme Taşı" },
  "Great Sharpening Stone": { en: "Great Sharpening Stone", es: "Gran Piedra de Afilar", de: "Großer Schleifstein", ru: "Большой точильный камень", tr: "Büyük Bileme Taşı" },


  // --- RECIPE NAMES (Level 0 & Misc) ---
  "Nails (Çivi) x10": {
    en: "Nails x10", es: "Clavos x10", de: "Nägel x10", ru: "Гвозди x10", tr: "Çivi x10"
  },
  "Metal Band (Metal Şerit)": {
    en: "Metal Band", es: "Banda de Metal", de: "Metallband", ru: "Металлическая полоса", tr: "Metal Şerit"
  },
  "Coarse Thread (Kaba İplik) x10": {
    en: "Coarse Thread x10", es: "Hilo Grueso x10", de: "Grober Faden x10", ru: "Грубая нить x10", tr: "Kaba İplik x10"
  },
  "Rope (Halat)": {
    en: "Rope", es: "Cuerda", de: "Seil", ru: "Веревка", tr: "Halat"
  },
  "Padded Armor (Dolgulu Zırh)": {
    en: "Padded Armor", es: "Armadura Acolchada", de: "Gepolsterte Rüstung", ru: "Стеганый доспех", tr: "Dolgulu Zırh"
  },
  "Tabard (Üniforma)": {
    en: "Tabard", es: "Tabardo", de: "Wappenrock", ru: "Накидка", tr: "Üniforma (Tabard)"
  },
  "Leather Armor (Deri Zırh)": {
    en: "Leather Armor", es: "Armadura de Cuero", de: "Lederrüstung", ru: "Кожаный доспех", tr: "Deri Zırh"
  },
  "Decorated Clothing": {
    en: "Decorated Clothing", es: "Ropa Decorada", de: "Verzierte Kleidung", ru: "Украшенная одежда", tr: "Süslü Kıyafet"
  },
  "Royal Clothes (Kraliyet Giysisi)": {
    en: "Royal Clothes", es: "Ropas Reales", de: "Königliche Kleidung", ru: "Королевские одежды", tr: "Kraliyet Giysisi"
  },
  "Plate Armor (Göğüs Zırhı)": {
    en: "Plate Armor", es: "Armadura de Placas", de: "Plattenrüstung", ru: "Латный доспех", tr: "Plaka Zırh"
  },
  "Plate Helmet (Kask)": {
    en: "Plate Helmet", es: "Yelmo de Placas", de: "Plattenhelm", ru: "Латный шлем", tr: "Plaka Kask"
  },
  "Royal Plate Armor (Kraliyet Zırhı)": {
    en: "Royal Plate Armor", es: "Armadura Real de Placas", de: "Königliche Plattenrüstung", ru: "Королевский латный доспех", tr: "Kraliyet Plaka Zırhı"
  },

  // --- ARMOR PIECES ---
  "Iron Plate Helm": { en: "Iron Plate Helm", es: "Yelmo de Placas de Hierro", de: "Eisenplattenhelm", ru: "Железный латный шлем", tr: "Demir Plaka Kask" },
  "Iron Plate Breastplate": { en: "Iron Plate Breastplate", es: "Peto de Placas de Hierro", de: "Eisenplattenbrustschutz", ru: "Железная кираса", tr: "Demir Plaka Göğüslük" },
  "Iron Plate Vambraces": { en: "Iron Plate Vambraces", es: "Brazales de Placas de Hierro", de: "Eisenplattenarmschienen", ru: "Железные наручи", tr: "Demir Plaka Kolluk" },
  "Iron Plate Gauntlets": { en: "Iron Plate Gauntlets", es: "Guanteletes de Placas de Hierro", de: "Eisenplattenhandschuhe", ru: "Железные латные перчатки", tr: "Demir Plaka Eldiven" },
  "Iron Plate Leggings": { en: "Iron Plate Leggings", es: "Grebas de Placas de Hierro", de: "Eisenplattenbeinschutz", ru: "Железные поножи", tr: "Demir Plaka Pantolon" },
  "Iron Plate Greaves": { en: "Iron Plate Greaves", es: "Grebas de Placas de Hierro (Boots)", de: "Eisenplattenstiefel", ru: "Железные сабатоны", tr: "Demir Plaka Bot" },

  "Light Chainmail Helm": { en: "Light Chainmail Helm", es: "Yelmo de Malla Ligera", de: "Leichter Kettenhelm", ru: "Легкий кольчужный шлем", tr: "Hafif Zincir Kask" },
  "Light Chainmail Tunic": { en: "Light Chainmail Tunic", es: "Túnica de Malla Ligera", de: "Leichte Kettenhemd", ru: "Легкая кольчуга (Торс)", tr: "Hafif Zincir Göğüslük" },
  "Light Chainmail Vambraces": { en: "Light Chainmail Vambraces", es: "Brazales de Malla Ligera", de: "Leichte Kettenarmschienen", ru: "Легкие кольчужные наручи", tr: "Hafif Zincir Kolluk" },
  "Light Chainmail Gauntlets": { en: "Light Chainmail Gauntlets", es: "Guanteletes de Malla Ligera", de: "Leichte Kettenhandschuhe", ru: "Легкие кольчужные перчатки", tr: "Hafif Zincir Eldiven" },
  "Light Chainmail Leggings": { en: "Light Chainmail Leggings", es: "Pantalones de Malla Ligera", de: "Leichte Kettenhose", ru: "Легкие кольчужные поножи", tr: "Hafif Zincir Pantolon" },
  "Light Chainmail Greaves": { en: "Light Chainmail Greaves", es: "Botas de Malla Ligera", de: "Leichte Kettenstiefel", ru: "Легкие кольчужные сапоги", tr: "Hafif Zincir Bot" },

  "Light Scale Helm": { en: "Light Scale Helm", es: "Yelmo de Escamas Ligero", de: "Leichter Schuppenhelm", ru: "Легкий чешуйчатый шлем", tr: "Hafif Pullu Kask" },
  "Light Scale Tunic": { en: "Light Scale Tunic", es: "Túnica de Escamas Ligera", de: "Leichte Schuppenrüstung", ru: "Легкий чешуйчатый доспех (Торс)", tr: "Hafif Pullu Göğüslük" },
  "Light Scale Vambraces": { en: "Light Scale Vambraces", es: "Brazales de Escamas Ligeros", de: "Leichte Schuppenarmschienen", ru: "Легкие чешуйчатые наручи", tr: "Hafif Pullu Kolluk" },
  "Light Scale Gauntlets": { en: "Light Scale Gauntlets", es: "Guanteletes de Escamas Ligeros", de: "Leichte Schuppenhandschuhe", ru: "Легкие чешуйчатые перчатки", tr: "Hafif Pullu Eldiven" },
  "Light Scale Leggings": { en: "Light Scale Leggings", es: "Pantalones de Escamas Ligeros", de: "Leichte Schuppenhose", ru: "Легкие чешуйчатые поножи", tr: "Hafif Pullu Pantolon" },
  "Light Scale Greaves": { en: "Light Scale Greaves", es: "Botas de Escamas Ligeras", de: "Leichte Schuppenstiefel", ru: "Легкие чешуйчатые сапоги", tr: "Hafif Pullu Bot" },

  "Half Plate Helm": { en: "Half Plate Helm", es: "Yelmo de Media Placa", de: "Halbplattenhelm", ru: "Полулатный шлем", tr: "Yarım Plaka Kask" },
  "Half Plate Breastplate": { en: "Half Plate Breastplate", es: "Peto de Media Placa", de: "Halbplattenbrustschutz", ru: "Полулатная кираса", tr: "Yarım Plaka Göğüslük" },
  "Half Plate Vambraces": { en: "Half Plate Vambraces", es: "Brazales de Media Placa", de: "Halbplattenarmschienen", ru: "Полулатные наручи", tr: "Yarım Plaka Kolluk" },
  "Half Plate Gauntlets": { en: "Half Plate Gauntlets", es: "Guanteletes de Media Placa", de: "Halbplattenhandschuhe", ru: "Полулатные перчатки", tr: "Yarım Plaka Eldiven" },
  "Half Plate Leggings": { en: "Half Plate Leggings", es: "Grebas de Media Placa", de: "Halbplattenbeinschutz", ru: "Полулатные поножи", tr: "Yarım Plaka Pantolon" },
  "Half Plate Greaves": { en: "Half Plate Greaves", es: "Botas de Media Placa", de: "Halbplattenstiefel", ru: "Полулатные сапоги", tr: "Yarım Plaka Bot" },

  "Regular Scale Helm": { en: "Regular Scale Helm", es: "Yelmo de Escamas", de: "Schuppenhelm", ru: "Чешуйчатый шлем", tr: "Normal Pullu Kask" },
  "Regular Scale Tunic": { en: "Regular Scale Tunic", es: "Túnica de Escamas", de: "Schuppenrüstung", ru: "Чешуйчатый доспех", tr: "Normal Pullu Göğüslük" },
  "Regular Scale Vambraces": { en: "Regular Scale Vambraces", es: "Brazales de Escamas", de: "Schuppenarmschienen", ru: "Чешуйчатые наручи", tr: "Normal Pullu Kolluk" },
  "Regular Scale Gauntlets": { en: "Regular Scale Gauntlets", es: "Guanteletes de Escamas", de: "Schuppenhandschuhe", ru: "Чешуйчатые перчатки", tr: "Normal Pullu Eldiven" },
  "Regular Scale Leggings": { en: "Regular Scale Leggings", es: "Pantalones de Escamas", de: "Schuppenhose", ru: "Чешуйчатые поножи", tr: "Normal Pullu Pantolon" },
  "Regular Scale Greaves": { en: "Regular Scale Greaves", es: "Botas de Escamas", de: "Schuppenstiefel", ru: "Чешуйчатые сапоги", tr: "Normal Pullu Bot" },

  "Regular Chainmail Helm": { en: "Regular Chainmail Helm", es: "Yelmo de Malla", de: "Kettenhelm", ru: "Кольчужный шлем", tr: "Normal Zincir Kask" },
  "Regular Chainmail Tunic": { en: "Regular Chainmail Tunic", es: "Túnica de Malla", de: "Kettenhemd", ru: "Кольчуга", tr: "Normal Zincir Göğüslük" },
  "Regular Chainmail Vambraces": { en: "Regular Chainmail Vambraces", es: "Brazales de Malla", de: "Kettenarmschienen", ru: "Кольчужные наручи", tr: "Normal Zincir Kolluk" },
  "Regular Chainmail Gauntlets": { en: "Regular Chainmail Gauntlets", es: "Guanteletes de Malla", de: "Kettenhandschuhe", ru: "Кольчужные перчатки", tr: "Normal Zincir Eldiven" },
  "Regular Chainmail Leggings": { en: "Regular Chainmail Leggings", es: "Pantalones de Malla", de: "Kettenhose", ru: "Кольчужные поножи", tr: "Normal Zincir Pantolon" },
  "Regular Chainmail Greaves": { en: "Regular Chainmail Greaves", es: "Botas de Malla", de: "Kettenstiefel", ru: "Кольчужные сапоги", tr: "Normal Zincir Bot" },

  "Full Plate Helm": { en: "Full Plate Helm", es: "Yelmo de Placa Completa", de: "Voller Plattenhelm", ru: "Полный латный шлем", tr: "Tam Plaka Kask" },
  "Full Plate Breastplate": { en: "Full Plate Breastplate", es: "Peto de Placa Completa", de: "Voller Plattenbrustschutz", ru: "Полная латная кираса", tr: "Tam Plaka Göğüslük" },
  "Full Plate Vambraces": { en: "Full Plate Vambraces", es: "Brazales de Placa Completa", de: "Volle Plattenarmschienen", ru: "Полные латные наручи", tr: "Tam Plaka Kolluk" },
  "Full Plate Gauntlets": { en: "Full Plate Gauntlets", es: "Guanteletes de Placa Completa", de: "Volle Plattenhandschuhe", ru: "Полные латные перчатки", tr: "Tam Plaka Eldiven" },
  "Full Plate Leggings": { en: "Full Plate Leggings", es: "Grebas de Placa Completa", de: "Voller Plattenbeinschutz", ru: "Полные латные поножи", tr: "Tam Plaka Pantolon" },
  "Full Plate Greaves": { en: "Full Plate Greaves", es: "Botas de Placa Completa", de: "Volle Plattenstiefel", ru: "Полные латные сапоги", tr: "Tam Plaka Bot" },

  "Heavy Scale Helm": { en: "Heavy Scale Helm", es: "Yelmo de Escamas Pesado", de: "Schwerer Schuppenhelm", ru: "Тяжелый чешуйчатый шлем", tr: "Ağır Pullu Kask" },
  "Heavy Scale Tunic": { en: "Heavy Scale Tunic", es: "Túnica de Escamas Pesada", de: "Schwere Schuppenrüstung", ru: "Тяжелый чешуйчатый доспех", tr: "Ağır Pullu Göğüslük" },
  "Heavy Scale Vambraces": { en: "Heavy Scale Vambraces", es: "Brazales de Escamas Pesados", de: "Schwere Schuppenarmschienen", ru: "Тяжелые чешуйчатые наручи", tr: "Ağır Pullu Kolluk" },
  "Heavy Scale Gauntlets": { en: "Heavy Scale Gauntlets", es: "Guanteletes de Escamas Pesados", de: "Schwere Schuppenhandschuhe", ru: "Тяжелые чешуйчатые перчатки", tr: "Ağır Pullu Eldiven" },
  "Heavy Scale Leggings": { en: "Heavy Scale Leggings", es: "Pantalones de Escamas Pesados", de: "Schwere Schuppenhose", ru: "Тяжелые чешуйчатые поножи", tr: "Ağır Pullu Pantolon" },
  "Heavy Scale Greaves": { en: "Heavy Scale Greaves", es: "Botas de Escamas Pesadas", de: "Schwere Schuppenstiefel", ru: "Тяжелые чешуйчатые сапоги", tr: "Ağır Pullu Bot" },

  "Heavy Chainmail Helm": { en: "Heavy Chainmail Helm", es: "Yelmo de Malla Pesada", de: "Schwerer Kettenhelm", ru: "Тяжелый кольчужный шлем", tr: "Ağır Zincir Kask" },
  "Heavy Chainmail Tunic": { en: "Heavy Chainmail Tunic", es: "Túnica de Malla Pesada", de: "Schweres Kettenhemd", ru: "Тяжелая кольчуга", tr: "Ağır Zincir Göğüslük" },
  "Heavy Chainmail Vambraces": { en: "Heavy Chainmail Vambraces", es: "Brazales de Malla Pesada", de: "Schwere Kettenarmschienen", ru: "Тяжелые кольчужные наручи", tr: "Ağır Zincir Kolluk" },
  "Heavy Chainmail Gauntlets": { en: "Heavy Chainmail Gauntlets", es: "Guanteletes de Malla Pesada", de: "Schwere Kettenhandschuhe", ru: "Тяжелые кольчужные перчатки", tr: "Ağır Zincir Eldiven" },
  "Heavy Chainmail Leggings": { en: "Heavy Chainmail Leggings", es: "Pantalones de Malla Pesada", de: "Schwere Kettenhose", ru: "Тяжелые кольчужные поножи", tr: "Ağır Zincir Pantolon" },
  "Heavy Chainmail Greaves": { en: "Heavy Chainmail Greaves", es: "Botas de Malla Pesada", de: "Schwere Kettenstiefel", ru: "Тяжелые кольчужные сапоги", tr: "Ağır Zincir Bot" },


  // --- INGREDIENTS ---
  "Plant Fiber": { en: "Plant Fiber", es: "Fibra Vegetal", de: "Pflanzenfaser", ru: "Растительное волокно", tr: "Bitki Lifi" },
  "Flint Stone": { en: "Flint Stone", es: "Piedra de Sílex", de: "Feuerstein", ru: "Кремень", tr: "Çakmak Taşı" },
  "Branch": { en: "Branch", es: "Rama", de: "Ast", ru: "Ветка", tr: "Dal" },
  "Rock": { en: "Rock", es: "Roca", de: "Fels", ru: "Камень", tr: "Kaya" },
  "Apple": { en: "Apple", es: "Manzana", de: "Apfel", ru: "Яблоко", tr: "Elma" },
  "Snow": { en: "Snow", es: "Nieve", de: "Schnee", ru: "Снег", tr: "Kar" },
  "Bones": { en: "Bones", es: "Huesos", de: "Knochen", ru: "Кости", tr: "Kemik" },
  "Linen Cloth": { en: "Linen Cloth", es: "Tela de Lino", de: "Leinenstoff", ru: "Льняная ткань", tr: "Keten Kumaş" },
  "Simple Cloth": { en: "Simple Cloth", es: "Tela Simple", de: "Einfacher Stoff", ru: "Простая ткань", tr: "Basit Kumaş" },
  "Silk Cloth": { en: "Silk Cloth", es: "Tela de Seda", de: "Seidenstoff", ru: "Шелковая ткань", tr: "İpek Kumaş" },
  "Hank of Linen": { en: "Hank of Linen", es: "Madeja de Lino", de: "Leinenstrang", ru: "Моток льна", tr: "Keten Çilesi" },
  "Hank of Wool": { en: "Hank of Wool", es: "Madeja de Lana", de: "Wollstrang", ru: "Моток шерсти", tr: "Yün Çilesi" },
  "Hank of Silk": { en: "Hank of Silk", es: "Madeja de Seda", de: "Seidenstrang", ru: "Моток шелка", tr: "İpek Çilesi" },
  
  "Thin Leather": { en: "Thin Leather", es: "Cuero Fino", de: "Dünnes Leder", ru: "Тонкая кожа", tr: "İnce Deri" },
  "Thick Leather": { en: "Thick Leather", es: "Cuero Grueso", de: "Dickes Leder", ru: "Толстая кожа", tr: "Kalın Deri" },
  "Fine Leather": { en: "Fine Leather", es: "Cuero Refinado", de: "Feines Leder", ru: "Выделанная кожа", tr: "Kaliteli Deri" },
  "Leather Strips": { en: "Leather Strips", es: "Tiras de Cuero", de: "Lederstreifen", ru: "Кожаные полоски", tr: "Deri Şerit" },
  
  "Iron Bar": { en: "Iron Bar", es: "Lingote de Hierro", de: "Eisenbarren", ru: "Железный слиток", tr: "Demir Külçe" },
  "Common Bar": { en: "Common Bar", es: "Lingote Común", de: "Gewöhnlicher Barren", ru: "Обычный слиток", tr: "Sıradan Külçe" },
  "Common Ingots": { en: "Common Ingots", es: "Lingotes Comunes", de: "Gewöhnliche Barren", ru: "Обычные слитки", tr: "Sıradan Külçeler" },
  "Steel Bar": { en: "Steel Bar", es: "Lingote de Acero", de: "Stahlbarren", ru: "Стальной слиток", tr: "Çelik Külçe" },
  "Vostaskus Steel Bar": { en: "Vostaskus Steel Bar", es: "Lingote de Acero Vostaskus", de: "Vostaskus-Stahlbarren", ru: "Слиток сталь Востаскус", tr: "Vostaskus Çelik Külçe" },
  
  "Metal Plate": { en: "Metal Plate", es: "Placa de Metal", de: "Metallplatte", ru: "Металлическая пластина", tr: "Metal Plaka" },
  "Small Metal Plate": { en: "Small Metal Plate", es: "Placa de Metal Pequeña", de: "Kleine Metallplatte", ru: "Малая металлическая пластина", tr: "Küçük Metal Plaka" },
  
  "Chainmail": { en: "Chainmail", es: "Cota de Malla", de: "Kettengeflecht", ru: "Кольчужное полотно", tr: "Zincir Örgü" },
  "Scale Strip": { en: "Scale Strip", es: "Tira de Escamas", de: "Schuppenstreifen", ru: "Чешуйчатая полоса", tr: "Pul Şerit" },
  "Wire": { en: "Wire", es: "Alambre", de: "Draht", ru: "Проволока", tr: "Tel" },
  "Gold Wire": { en: "Gold Wire", es: "Alambre de Oro", de: "Golddraht", ru: "Золотая проволока", tr: "Altın Tel" },
  "Gold Thread": { en: "Gold Thread", es: "Hilo de Oro", de: "Goldfaden", ru: "Золотая нить", tr: "Altın İplik" },
  "Jeweled Button": { en: "Jeweled Button", es: "Botón Joya", de: "Juwelenknopf", ru: "Драгоценная пуговица", tr: "Mücevherli Düğme" },
  "Rivets": { en: "Rivets", es: "Remaches", de: "Nieten", ru: "Заклепки", tr: "Perçin" },
  
  "Thin Leather (any)": { en: "Thin Leather (Any)", es: "Cuero Fino (Cualquiera)", de: "Dünnes Leder (Beliebig)", ru: "Тонкая кожа (Любая)", tr: "İnce Deri (Herhangi)" },
  "Thin Leaather (any)": { en: "Thin Leather (Any)", es: "Cuero Fino (Cualquiera)", de: "Dünnes Leder (Beliebig)", ru: "Тонкая кожа (Любая)", tr: "İnce Deri (Herhangi)" }
};

// Helper function to translate any item name safely
export const translateItem = (name: string, language: Language): string => {
  if (!ITEM_TRANSLATIONS[name]) return name;
  return ITEM_TRANSLATIONS[name][language] || name;
};
