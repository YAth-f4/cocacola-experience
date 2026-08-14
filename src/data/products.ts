export interface ProductSize {
  label: string;
  volume: string;
  price: string;
}

export interface NutritionalFacts {
  calories: number;
  totalFat: string;
  sodium: string;
  totalCarbs: string;
  sugars: string;
  addedSugars: string;
  protein: string;
  caffeine: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'classic' | 'zero' | 'flavored' | 'creations';
  categoryLabel: string;
  badge: string;
  image: string;
  accentColor: string;
  badgeColor: string;
  price: string;
  sizes: ProductSize[];
  nutritionalFacts: NutritionalFacts;
  ingredients: string[];
  tastingNotes: string[];
  pairing: string;
  story: string;
  recyclable: boolean;
  popularity: number;
  caffeineMg: number;
  caloriesCount: number;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "coke-classic",
    name: "Coca-Cola® Original Taste",
    subtitle: "The timeless, refreshing cola taste that has united generations since 1886.",
    category: "classic",
    categoryLabel: "Classic Original",
    badge: "Original Taste",
    image: "/images/coke_classic_hero.jpg",
    accentColor: "#E41E3F",
    badgeColor: "bg-[#E41E3F] text-white",
    price: "$1.99",
    sizes: [
      { label: "Sleek Can", volume: "330ml / 11.1 fl oz", price: "$1.99" },
      { label: "Contour Glass Bottle", volume: "355ml / 12 fl oz", price: "$2.49" },
      { label: "Personal PET Bottle", volume: "500ml / 16.9 fl oz", price: "$2.79" },
      { label: "Family Sharing", volume: "1.25L / 42.2 fl oz", price: "$3.99" }
    ],
    nutritionalFacts: {
      calories: 140,
      totalFat: "0g (0% DV)",
      sodium: "45mg (2% DV)",
      totalCarbs: "39g (14% DV)",
      sugars: "39g",
      addedSugars: "39g (78% DV)",
      protein: "0g",
      caffeine: "34mg per 12 fl oz"
    },
    ingredients: [
      "Carbonated Water",
      "High Fructose Corn Syrup",
      "Caramel Color (E150d)",
      "Phosphoric Acid",
      "Natural Flavors (Secret 7X Formula)",
      "Caffeine"
    ],
    tastingNotes: ["Crisp Carbonation", "Warm Caramel Top Note", "Effervescent Citrus Accent", "Rich Spice Finish"],
    pairing: "Perfect with artisanal cheeseburgers, crispy french fries, or grilled steak tacos.",
    story: "Created in Atlanta, Georgia in 1886 by Dr. John Pemberton, Coca-Cola Original Taste is the world's most iconic beverage.",
    recyclable: true,
    popularity: 99,
    caffeineMg: 34,
    caloriesCount: 140
  },
  {
    id: "diet-coke",
    name: "Diet Coke®",
    subtitle: "Crisp, bold, zero-calorie refreshment with its own unique distinct taste.",
    category: "zero",
    categoryLabel: "Zero Calorie",
    badge: "Zero Calorie",
    image: "/images/diet_coke_can.jpg",
    accentColor: "#8E9DAA",
    badgeColor: "bg-slate-700 text-white",
    price: "$1.99",
    sizes: [
      { label: "Sleek Can", volume: "330ml / 11.1 fl oz", price: "$1.99" },
      { label: "Personal PET Bottle", volume: "500ml / 16.9 fl oz", price: "$2.79" },
      { label: "Sharing Bottle", volume: "1.25L / 42.2 fl oz", price: "$3.99" }
    ],
    nutritionalFacts: {
      calories: 0,
      totalFat: "0g (0% DV)",
      sodium: "40mg (2% DV)",
      totalCarbs: "0g (0% DV)",
      sugars: "0g",
      addedSugars: "0g (0% DV)",
      protein: "0g",
      caffeine: "46mg per 12 fl oz"
    },
    ingredients: [
      "Carbonated Water",
      "Caramel Color",
      "Aspartame",
      "Phosphoric Acid",
      "Potassium Benzoate",
      "Natural Flavors",
      "Citric Acid",
      "Caffeine"
    ],
    tastingNotes: ["Ultra-Crisp Bite", "Lighter Carbonation Profile", "Subtle Tart Citrus", "Clean Zero-Sugar Finish"],
    pairing: "Pairs beautifully with sushi rolls, light Mediterranean salads, and avocado toast.",
    story: "Debuted in 1882, Diet Coke revolutionized soft drinks as the first major line extension of the Coca-Cola trademark.",
    recyclable: true,
    popularity: 94,
    caffeineMg: 46,
    caloriesCount: 0
  },
  {
    id: "coke-zero",
    name: "Coca-Cola® Zero Sugar",
    subtitle: "Real Coca-Cola taste with zero sugar and zero calories. Deliciously refreshing.",
    category: "zero",
    categoryLabel: "Zero Sugar",
    badge: "Zero Sugar & Calories",
    image: "/images/coke_zero_can.jpg",
    accentColor: "#111111",
    badgeColor: "bg-black text-red-500 border border-red-600/40",
    price: "$1.99",
    sizes: [
      { label: "Sleek Can", volume: "330ml / 11.1 fl oz", price: "$1.99" },
      { label: "Contour Glass Bottle", volume: "355ml / 12 fl oz", price: "$2.49" },
      { label: "Personal PET Bottle", volume: "500ml / 16.9 fl oz", price: "$2.79" }
    ],
    nutritionalFacts: {
      calories: 0,
      totalFat: "0g (0% DV)",
      sodium: "40mg (2% DV)",
      totalCarbs: "0g (0% DV)",
      sugars: "0g",
      addedSugars: "0g (0% DV)",
      protein: "0g",
      caffeine: "34mg per 12 fl oz"
    },
    ingredients: [
      "Carbonated Water",
      "Caramel Color",
      "Phosphoric Acid",
      "Aspartame",
      "Acesulfame Potassium",
      "Natural Flavors",
      "Sodium Citrate",
      "Caffeine"
    ],
    tastingNotes: ["Near-Identical Original Taste", "Deep Caramel Undertones", "Zero Aftertaste", "Brisk Carbonation"],
    pairing: "Complements wood-fired pizzas, gourmet smash burgers, and spicy Buffalo wings.",
    story: "Re-engineered with advanced taste technology, Coca-Cola Zero Sugar mirrors the authentic original Coca-Cola flavor.",
    recyclable: true,
    popularity: 97,
    caffeineMg: 34,
    caloriesCount: 0
  },
  {
    id: "coke-vanilla",
    name: "Coca-Cola® Vanilla",
    subtitle: "Smooth Madagascar vanilla infusion blended with the timeless Coca-Cola formula.",
    category: "flavored",
    categoryLabel: "Flavored Craft",
    badge: "Vanilla Infused",
    image: "/images/coke_vanilla_can.jpg",
    accentColor: "#D4AF37",
    badgeColor: "bg-amber-600 text-amber-50",
    price: "$2.19",
    sizes: [
      { label: "Sleek Can", volume: "330ml / 11.1 fl oz", price: "$2.19" },
      { label: "Personal PET Bottle", volume: "500ml / 16.9 fl oz", price: "$2.89" }
    ],
    nutritionalFacts: {
      calories: 150,
      totalFat: "0g (0% DV)",
      sodium: "35mg (2% DV)",
      totalCarbs: "42g (15% DV)",
      sugars: "42g",
      addedSugars: "42g (84% DV)",
      protein: "0g",
      caffeine: "34mg per 12 fl oz"
    },
    ingredients: [
      "Carbonated Water",
      "High Fructose Corn Syrup",
      "Caramel Color",
      "Phosphoric Acid",
      "Natural Vanilla & Botanical Flavors",
      "Caffeine"
    ],
    tastingNotes: ["Creamy Vanilla Aroma", "Velvety Mouthfeel", "Warm Sweet Spice", "Rich Dessert Cola Finish"],
    pairing: "Pairs with gourmet BBQ ribs, vanilla ice cream floats, and dark chocolate desserts.",
    story: "Introduced in 2002 after decades of soda fountain customization, Vanilla Coke quickly gained a cult global fanbase.",
    recyclable: true,
    popularity: 91,
    caffeineMg: 34,
    caloriesCount: 150
  },
  {
    id: "coke-cherry",
    name: "Coca-Cola® Cherry",
    subtitle: "A splash of sweet, ripe black cherry flavor harmonized with crisp Coca-Cola.",
    category: "flavored",
    categoryLabel: "Flavored Craft",
    badge: "Cherry Burst",
    image: "/images/coke_cherry_can.jpg",
    accentColor: "#990033",
    badgeColor: "bg-rose-900 text-rose-100",
    price: "$2.19",
    sizes: [
      { label: "Sleek Can", volume: "330ml / 11.1 fl oz", price: "$2.19" },
      { label: "Personal PET Bottle", volume: "500ml / 16.9 fl oz", price: "$2.89" }
    ],
    nutritionalFacts: {
      calories: 150,
      totalFat: "0g (0% DV)",
      sodium: "35mg (2% DV)",
      totalCarbs: "42g (15% DV)",
      sugars: "42g",
      addedSugars: "42g (84% DV)",
      protein: "0g",
      caffeine: "34mg per 12 fl oz"
    },
    ingredients: [
      "Carbonated Water",
      "High Fructose Corn Syrup",
      "Caramel Color",
      "Phosphoric Acid",
      "Natural Black Cherry Flavors",
      "Caffeine"
    ],
    tastingNotes: ["Ripe Black Cherry Aroma", "Sweet Fruity Top Note", "Crisp Effervescence", "Tangy Berry Finish"],
    pairing: "Excellent with pepperoni pizza, smoked brisket, and spicy Thai noodles.",
    story: "First tested at the 1982 Knoxville World's Fair before launching nationwide in 1985 as Coca-Cola's first flavored spin-off.",
    recyclable: true,
    popularity: 93,
    caffeineMg: 34,
    caloriesCount: 150
  },
  {
    id: "coke-starlight",
    name: "Coca-Cola® Starlight Creations",
    subtitle: "Limited edition space-flavored cola with cooling notes reminiscent of stargazing.",
    category: "creations",
    categoryLabel: "Limited Edition",
    badge: "Cosmic Edition",
    image: "/images/coke_starlight_can.jpg",
    accentColor: "#6B21A8",
    badgeColor: "bg-purple-900 text-purple-200 border border-purple-400/30",
    price: "$2.99",
    sizes: [
      { label: "Limited Edition Bottle", volume: "500ml / 16.9 fl oz", price: "$2.99" },
      { label: "Collector Can", volume: "330ml / 11.1 fl oz", price: "$2.49" }
    ],
    nutritionalFacts: {
      calories: 130,
      totalFat: "0g (0% DV)",
      sodium: "35mg (2% DV)",
      totalCarbs: "36g (13% DV)",
      sugars: "36g",
      addedSugars: "36g (72% DV)",
      protein: "0g",
      caffeine: "34mg per 12 fl oz"
    },
    ingredients: [
      "Carbonated Water",
      "High Fructose Corn Syrup",
      "Caramel & Fruit Extracts",
      "Phosphoric Acid",
      "Natural Space-Inspired Flavor Essences",
      "Caffeine"
    ],
    tastingNotes: ["Cooling Minty Undertone", "Cotton Candy Sweetness", "Starry Sparkle Effervescence", "Ethereal Berry Aroma"],
    pairing: "Pairs with neon arcade snacks, spicy RAMEN bowls, and artisanal dessert waffles.",
    story: "Part of Coca-Cola Creations, Starlight reimagined the taste of space with subtle cooling sensations and cosmic aesthetics.",
    recyclable: true,
    popularity: 96,
    caffeineMg: 34,
    caloriesCount: 130
  }
];

export const HERITAGE_TIMELINE = [
  {
    year: "1886",
    title: "The Birth of Magic",
    description: "Dr. John Stith Pemberton invents Coca-Cola syrup at Jacob's Pharmacy in Atlanta, Georgia. Served for 5 cents per glass."
  },
  {
    year: "1915",
    title: "The Contour Bottle Patent",
    description: "The Root Glass Company of Indiana designs the legendary contoured glass bottle, recognizable even in the dark or broken on the ground."
  },
  {
    year: "1969",
    title: "It's The Real Thing",
    description: "The famous slogan 'It's the Real Thing' launches alongside the signature red and white dynamic curve swirl wave."
  },
  {
    year: "1982",
    title: "Diet Coke Debut",
    description: "Diet Coke launches worldwide, becoming the top zero-calorie beverage in history within two years."
  },
  {
    year: "2005",
    title: "Coca-Cola Zero Sugar",
    description: "Zero Sugar debuts, offering full Coca-Cola flavor without calories or sugar."
  },
  {
    year: "2026",
    title: "Real Magic & AI Creations",
    description: "Coca-Cola pioneers futuristic taste experiences, 100% recyclable bottles, and interactive digital showcases."
  }
];
