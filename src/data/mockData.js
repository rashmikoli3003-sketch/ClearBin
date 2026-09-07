// Mock dataset for ClearBin Hackathon Reference Prototype
// Inspired by SwaCH Coop and grassroots waste management initiatives

export const GOAL_STATS = [
  {
    number: "10,000+",
    targetLabel: "Target: Households in Year 1",
    sub: "Community members participating in segregated waste sharing"
  },
  {
    number: "500+",
    targetLabel: "Goal: Upcyclers & NGOs Onboarded",
    sub: "Local micro-entrepreneurs and women's artisan co-ops"
  },
  {
    number: "50,000 kg",
    targetLabel: "Vision: Landfill Diversion Annually",
    sub: "Target volume of plastic, glass, fabric, and e-waste reused"
  }
];

export const INITIATIVE_CARDS = [
  {
    id: 1,
    title: "Post & Match",
    icon: "📱",
    description: "Snap a photo of your sorted household waste and connect with nearby artisans seeking raw materials."
  },
  {
    id: 2,
    title: "Pickup",
    icon: "🚚",
    description: "Schedule convenient home pickups or drop-off at community collection hubs."
  },
  {
    id: 3,
    title: "Transform & Showcase",
    icon: "🎨",
    description: "Track your waste items as local craftspeople upcycle them into valuable eco-products."
  },
  {
    id: 4,
    title: "E-Waste Collection",
    icon: "💻",
    description: "Safe collection of wires, dead gadgets, and boards for certified rare metal recovery."
  },
  {
    id: 5,
    title: "Battery Drop-off",
    icon: "🔋",
    description: "Dedicated hazardous battery channels to prevent toxic leakage in municipal landfills."
  },
  {
    id: 6,
    title: "Community Rewards",
    icon: "🏆",
    description: "Earn EcoPoints for every completed handoff, redeemable for sustainable living discounts."
  }
];

export const PERSONA_STORY = {
  name: "Priya Sharma",
  role: "Household User & Eco-Volunteer",
  location: "Kothrud, Pune",
  quote: "For years, I washed out glass jars and saved denim scraps, but ended up tossing them because no local recycler took small batches. ClearBin linked me directly with a women's artisan co-op 2km away who turned my old jeans into handcrafted planters. Knowing my waste didn't end up in a dump gives me immense relief.",
  avatarBg: "var(--bg-sage-light)"
};

export const TESTIMONIAL_QUOTE = {
  quote: "By organizing household waste handoffs at the neighborhood level, we give informal waste pickers and upcyclers pre-sorted, clean raw materials — lowering raw material costs while creating dignified livelihoods.",
  author: "ClearBin Social Enterprise Model",
  tag: "Concept & Vision Statement"
};

export const CATEGORIES = [
  { id: 'plastic', label: 'Plastic (PET, HDPE, Bottles, Containers)', icon: '♻️', badge: 'badge-plastic' },
  { id: 'glass', label: 'Glass (Jars, Bottles, Glassware)', icon: '🍾', badge: 'badge-glass' },
  { id: 'fabric', label: 'Fabric & Textiles (Clothes, Scraps, Denim)', icon: '🧵', badge: 'badge-fabric' },
  { id: 'ewaste', label: 'E-Waste (Wires, Old Phones, Gadgets)', icon: '💻', badge: 'badge-ewaste' },
  { id: 'batteries', label: 'Batteries & Accumulators', icon: '🔋', badge: 'badge-batteries' },
];

export const MATCHES = [
  {
    id: 1,
    name: "GreenCraft Upcycling Studio",
    type: "Local Artisan Studio",
    category: "plastic",
    categoryLabel: "Plastic & PET",
    distance: "1.2 km away",
    neededMaterial: "Clean PET Plastic Bottles & HDPE Jug Caps",
    purpose: "Transforming single-use plastic into durable eco-planters & desk accessories.",
    pickupType: "Home Pickup & Dropoff",
    rating: 4.9,
    verified: true,
    pointsOffer: "+120 EcoPoints",
    avatarBg: "var(--primary-forest)"
  },
  {
    id: 2,
    name: "ReGlass NGO Collective",
    type: "Non-Profit Organization",
    category: "glass",
    categoryLabel: "Glassware & Jars",
    distance: "2.8 km away",
    neededMaterial: "Intact Glass Jars, Wine Bottles & Glass Vials",
    purpose: "Repurposing glass into handcrafted soy candles and stained-glass home decor.",
    pickupType: "Community Hub Dropoff",
    rating: 4.8,
    verified: true,
    pointsOffer: "+180 EcoPoints",
    avatarBg: "var(--primary-green)"
  },
  {
    id: 3,
    name: "ThreadAgain Weaver Guild",
    type: "Women's Artisan Co-op",
    category: "fabric",
    categoryLabel: "Fabrics & Denim",
    distance: "3.5 km away",
    neededMaterial: "Old Denim Jeans, Cotton Shirts & Fabric Remnants",
    purpose: "Upcycling discarded textiles into handmade tote bags, quilts, and rug yarn.",
    pickupType: "Home Pickup Available",
    rating: 5.0,
    verified: true,
    pointsOffer: "+150 EcoPoints",
    avatarBg: "var(--accent-terracotta)"
  },
  {
    id: 4,
    name: "CircuitCycle Eco-Hub",
    type: "E-Waste Recycler & Maker Lab",
    category: "ewaste",
    categoryLabel: "E-Waste & Batteries",
    distance: "4.1 km away",
    neededMaterial: "Dead Batteries, Unused Cables, Old Smartphones & Circuit Boards",
    purpose: "Safely recovering rare metals & repurposing electronics for STEM education kits.",
    pickupType: "Free Pickup Drive",
    rating: 4.7,
    verified: true,
    pointsOffer: "+250 EcoPoints",
    avatarBg: "var(--accent-amber)"
  }
];

export const SHOWCASE_ITEMS = [
  {
    id: 1,
    title: "Single-Use Bottles to Designer Tote Bag",
    category: "plastic",
    beforeText: "6 Discarded PET Plastic Bottles",
    afterText: "1 Waterproof Urban Tote Bag",
    artisan: "Created by GreenCraft Studio",
    pointsEarned: "+150 EcoPoints",
    caption: "Shredded, spun into polyester fiber thread, and hand-stitched into a durable rainproof tote bag.",
    bgGradient: "linear-gradient(135deg, #e0f2fe, #eaf4ed)",
    icon: "👜"
  },
  {
    id: 2,
    title: "Used Sauce Jars to Botanical Candles",
    category: "glass",
    beforeText: "4 Pickle & Pasta Glass Jars",
    afterText: "Set of Aromatherapy Soy Candles",
    artisan: "Created by ReGlass NGO",
    pointsEarned: "+120 EcoPoints",
    caption: "Deep cleaned, frosted with eco-friendly etch, filled with soy wax and organic essential oils.",
    bgGradient: "linear-gradient(135deg, #f3e8ff, #fdf2ec)",
    icon: "🕯️"
  },
  {
    id: 3,
    title: "Old Denim Scraps to Hanging Planters",
    category: "fabric",
    beforeText: "2 Pairs of Torn Jeans",
    afterText: "3 Macrame Hanging Plant Holders",
    artisan: "Created by ThreadAgain Co-op",
    pointsEarned: "+200 EcoPoints",
    caption: "Cut into fabric strips, braided into sturdy macrame knots, and paired with recycled tin pots.",
    bgGradient: "linear-gradient(135deg, #ffe4e6, #fef3c7)",
    icon: "🪴"
  },
  {
    id: 4,
    title: "Broken Cables & Board to STEM Robot Kit",
    category: "ewaste",
    beforeText: "Assorted Cables & Phone Board",
    afterText: "Solar-Powered Mini Crawler Robot",
    artisan: "Created by CircuitCycle Lab",
    pointsEarned: "+300 EcoPoints",
    caption: "Desoldered components, salvaged micro-motors, and assembled into educational STEM robotics kits.",
    bgGradient: "linear-gradient(135deg, #fef3c7, #eaf4ed)",
    icon: "🤖"
  }
];
