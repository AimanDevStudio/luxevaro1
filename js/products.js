
/* =====================================================================
   LUXEVARO - PRODUCT DATA (2026 PRICE UPDATE)
   ---------------------------------------------------------------------
   Prices in Pakistani Rupees (PKR).
   Estimated authentic product retail prices.
   Confirm exact size, model, authenticity and stock before selling.
   ===================================================================== */

/* Store settings used across the whole site */
const STORE = {
  name: "LUXEVARO",
  whatsappNumber: "923253139388",
  whatsappDisplay: "+92 325 3139388",
  email: "hello@luxevaro.example",
  paymentTerms:
    "50% advance payment is required to proceed. The remaining 50% will be handled " +
    "according to the seller's agreed payment and delivery terms.",
  confirmationNote:
    "Your order is confirmed only after the seller responds on WhatsApp."
};

/* Brands, grouped by category */
const BRANDS = [
  { slug: "gucci", name: "Gucci", label: "Gucci", category: "perfume", blurb: "Italian flair, bold floral and woody signatures." },
  { slug: "chanel", name: "Chanel", label: "Chanel", category: "perfume", blurb: "Timeless Parisian elegance in every bottle." },
  { slug: "louis-vuitton", name: "Louis Vuitton", label: "Louis Vuitton (LV)", category: "perfume", blurb: "Travel-inspired, artisanal high perfumery." },
  { slug: "dunhill", name: "Dunhill", label: "Dunhill", category: "perfume", blurb: "British refinement for the modern gentleman." },
  { slug: "creed", name: "Creed", label: "Creed", category: "perfume", blurb: "Heritage niche fragrances since 1760." },
  { slug: "rolex", name: "Rolex", label: "Rolex", category: "watch", blurb: "Icons of precision and endurance." },
  { slug: "audemars-piguet", name: "Audemars Piguet", label: "Audemars Piguet (AP)", category: "watch", blurb: "Bold haute horlogerie from the Vallee de Joux." },
  { slug: "franck-muller", name: "Franck Muller", label: "Franck Muller", category: "watch", blurb: "Master of complications and curved cases." },
  { slug: "patek-philippe", name: "Patek Philippe", label: "Patek Philippe", category: "watch", blurb: "Generations of refined watchmaking." },
  { slug: "cartier", name: "Cartier", label: "Cartier", category: "watch", blurb: "Jeweller's elegance on the wrist." },
];

/* 50 products: 25 perfumes + 25 watches */
const PRODUCTS = [

  /* ---------- Gucci perfumes ---------- */
  { id: "gucci-bloom", category: "perfume", brand: "Gucci", brandSlug: "gucci",
    name: "Gucci Bloom",
    description: "A lush white-floral bouquet of jasmine and tuberose with a fresh green heart.",
    price: 34900, image: "https://i.pinimg.com/736x/8b/fe/6e/8bfe6ee48065dc229460c8d98225d00f.jpg" },

  { id: "gucci-guilty", category: "perfume", brand: "Gucci", brandSlug: "gucci",
    name: "Gucci Guilty",
    description: "A bold, magnetic blend of citrus, lilac and warm amber for evenings out.",
    price: 37500, image: "https://i.pinimg.com/736x/4c/d5/d5/4cd5d5a1ff518ae06f67633389f5e4a0.jpg" },

  { id: "gucci-flora-gorgeous-gardenia", category: "perfume", brand: "Gucci", brandSlug: "gucci",
    name: "Gucci Flora Gorgeous Gardenia",
    description: "Radiant gardenia and pear blossom in a joyful, sunlit scent.",
    price: 39500, image: "https://i.pinimg.com/736x/c9/12/ed/c912edb1851bb333c6092410a344c66a.jpg" },

  { id: "gucci-envy", category: "perfume", brand: "Gucci", brandSlug: "gucci",
    name: "Gucci Envy",
    description: "A crisp, green and sharp composition with cyclamen and violet leaf.",
    price: 75000, image: "https://i.pinimg.com/1200x/3e/ab/cc/3eabcc1f4a0d930a7097987b6f3941a1.jpg" },

  { id: "gucci-rush", category: "perfume", brand: "Gucci", brandSlug: "gucci",
    name: "Gucci Bamboo",
    description: "An elegant floral fragrance blending delicate jasmine, exotic ylang-ylang, and warm sandalwood for a timeless, feminine scent.",
    price: 32500, image: "https://i.pinimg.com/736x/49/cb/9a/49cb9acb979a701d3ef4d3d95b13f013.jpg" },

  /* ---------- Chanel perfumes ---------- */
  { id: "chanel-no-5", category: "perfume", brand: "Chanel", brandSlug: "chanel",
    name: "Chanel No. 5",
    description: "The timeless aldehydic floral: elegant rose and jasmine over soft musk.",
    price: 52500, image: "https://i.pinimg.com/736x/5b/19/81/5b1981e402b0d3b3ee5008d5319c5373.jpg" },

  { id: "chanel-coco-mademoiselle", category: "perfume", brand: "Chanel", brandSlug: "chanel",
    name: "Chanel Coco Mademoiselle",
    description: "Orange, rose and patchouli: a fresh, sensual oriental with confidence.",
    price: 57500, image: "https://i.pinimg.com/736x/64/0e/d0/640ed01c19a69103a80818cfd82683a6.jpg" },

  { id: "chanel-bleu-de-chanel", category: "perfume", brand: "Chanel", brandSlug: "chanel",
    name: "Chanel Bleu de Chanel",
    description: "An aromatic woody scent of citrus, incense and cedar for modern men.",
    price: 49500, image: "https://i.pinimg.com/1200x/cc/a0/32/cca0327b04fa985593a8f756396c72d3.jpg" },

  { id: "chanel-chance-eau-tendre", category: "perfume", brand: "Chanel", brandSlug: "chanel",
    name: "Chanel Chance Eau Tendre",
    description: "A soft, fruity floral with grapefruit, quince and white musk.",
    price: 54500, image: "https://i.pinimg.com/1200x/c5/a2/5c/c5a25c3ad11632a446515867505638e6.jpg" },

  { id: "chanel-allure-homme-sport", category: "perfume", brand: "Chanel", brandSlug: "chanel",
    name: "Chanel Allure Homme Sport",
    description: "Invigorating citrus and pepper over a clean, woody base.",
    price: 46500, image: "https://i.pinimg.com/736x/0a/ac/3a/0aac3abb72b3f5c942ce541d3e17f5fd.jpg" },

  /* ---------- Louis Vuitton perfumes ---------- */
  { id: "louis-vuitton-imagination", category: "perfume", brand: "Louis Vuitton", brandSlug: "louis-vuitton",
    name: "Louis Vuitton Imagination",
    description: "Citrus, ginger and black tea over a smooth, ambery woody finish.",
    price: 149900, image: "https://i.pinimg.com/1200x/60/a9/8a/60a98a0dd187c6639aa89c637382df58.jpg" },

  { id: "louis-vuitton-ombre-nomade", category: "perfume", brand: "Louis Vuitton", brandSlug: "louis-vuitton",
    name: "Louis Vuitton Ombre Nomade",
    description: "A deep, smoky oud and incense scent with raspberry and saffron.",
    price: 159900, image: "https://i.pinimg.com/736x/4b/04/4c/4b044c29c0b407b72d3f7b1c7f0a6624.jpg" },

  { id: "louis-vuitton-afternoon-swim", category: "perfume", brand: "Louis Vuitton", brandSlug: "louis-vuitton",
    name: "Louis Vuitton Afternoon Swim",
    description: "A sparkling blend of mandarin and bergamot, light as a summer dip.",
    price: 149500, image: "https://i.pinimg.com/1200x/2f/31/38/2f31381a26a4f13627c0547c58ec2a94.jpg" },

  { id: "louis-vuitton-spell-on-you", category: "perfume", brand: "Louis Vuitton", brandSlug: "louis-vuitton",
    name: "Louis Vuitton Spell on You",
    description: "A floral, enveloping blend of rose, jasmine and warm woods.",
    price: 155600, image: "https://i.pinimg.com/736x/87/00/70/8700706725ee4b7f53e25187cf6f83e2.jpg" },

  { id: "louis-vuitton-orage", category: "perfume", brand: "Louis Vuitton", brandSlug: "louis-vuitton",
    name: "Louis Vuitton Orage",
    description: "A fresh, airy and woody composition inspired by a passing summer storm.",
    price: 159900, image: "https://i.pinimg.com/736x/40/a0/e1/40a0e167e46c7e8b4f8d39dbd930c449.jpg" },

  /* ---------- Dunhill perfumes ---------- */
  { id: "dunhill-desire-blue", category: "perfume", brand: "Dunhill", brandSlug: "dunhill",
    name: "Dunhill Desire Blue",
    description: "Fresh bergamot and grapefruit lifted by musk and woods for vibrant day wear.",
    price: 14500, image: "https://i.pinimg.com/736x/d7/70/0c/d7700cde23b6d5a7e5cc671363bcc183.jpg" },

  { id: "dunhill-icon-racing", category: "perfume", brand: "Dunhill", brandSlug: "dunhill",
    name: "Dunhill Icon Racing",
    description: "A dynamic, spicy woody fragrance with a sporty, driven spirit.",
    price: 23500, image: "https://i.pinimg.com/1200x/e5/98/b0/e598b089aeb44685314088a196c00f0f.jpg" },

  { id: "dunhill-london", category: "perfume", brand: "Dunhill", brandSlug: "dunhill",
    name: "Dunhill London",
    description: "A classic aromatic fougere with lavender and moss, refined and understated.",
    price: 16500, image: "https://i.pinimg.com/1200x/e4/e9/50/e4e95010eb0641de0de115ce6dd68efc.jpg" },

  { id: "dunhill-century", category: "perfume", brand: "Dunhill", brandSlug: "dunhill",
    name: "Dunhil Signature",
    description: "A clean, aromatic scent with citrus and cedar for the modern gentleman.",
    price: 28500, image: "https://i.pinimg.com/1200x/ae/d5/be/aed5be537da94fcd66af749900431b65.jpg" },

  { id: "dunhill-black", category: "perfume", brand: "Dunhill", brandSlug: "dunhill",
    name: "Dunhill Black",
    description: "A dark, woody and spicy signature fragrance with leather facets.",
    price: 12500, image: "https://i.pinimg.com/736x/50/0c/8a/500c8ad0bca92a69a9ce7b41498aa345.jpg" },

  /* ---------- Creed perfumes ---------- */
  { id: "creed-aventus", category: "perfume", brand: "Creed", brandSlug: "creed",
    name: "Creed Aventus",
    description: "A confident fruity chypre of pineapple, birch and musk with long-lasting presence.",
    price: 115000, image: "https://i.pinimg.com/736x/c4/82/0b/c4820b387ad846b779bd938875d07e02.jpg" },

  { id: "creed-silver-mountain-water", category: "perfume", brand: "Creed", brandSlug: "creed",
    name: "Creed Silver Mountain Water",
    description: "Fresh green tea and citrus over blackcurrant, crisp as alpine air.",
    price: 98500, image: "https://i.pinimg.com/736x/49/75/80/4975804eaf4c0454addf55cfb42dd75c.jpg" },

  { id: "creed-green-irish-tweed", category: "perfume", brand: "Creed", brandSlug: "creed",
    name: "Creed Green Irish Tweed",
    description: "A fresh classic of lemon verbena, iris and sandalwood.",
    price: 105000, image: "https://i.pinimg.com/1200x/8f/38/f6/8f38f61bb58ebfbbd53351abe4ae6d29.jpg" },

  { id: "creed-millesime-imperial", category: "perfume", brand: "Creed", brandSlug: "creed",
    name: "Creed Millesime Imperial",
    description: "A radiant, fruity scent with a sunlit, salty marine touch.",
    price: 99500, image: "https://i.pinimg.com/1200x/0e/e0/a0/0ee0a06045c78af9838aaa5c6fa03b1e.jpg" },

  { id: "creed-viking", category: "perfume", brand: "Creed", brandSlug: "creed",
    name: "Creed Viking",
    description: "A spicy, aromatic composition of peppermint, rose and warm woods.",
    price: 109500, image: "https://i.pinimg.com/736x/06/87/be/0687be9503271dc5931de01975550c76.jpg" },

  /* ---------- Rolex watches ---------- */
  { id: "rolex-submariner", category: "watch", brand: "Rolex", brandSlug: "rolex",
    name: "Rolex Submariner",
    description: "A legendary diver's watch with a rotating bezel and robust steel bracelet.",
    price: 3500000, image: "https://i.pinimg.com/736x/68/14/8f/68148ffdea11a36d18b06ba3e015a808.jpg" },

  { id: "rolex-daytona", category: "watch", brand: "Rolex", brandSlug: "rolex",
    name: "Rolex Daytona",
    description: "A racing chronograph with a bright dial and precise tachymetric scale.",
    price: 6500000, image: "https://i.pinimg.com/1200x/99/fd/af/99fdafcea0d4cbefe1066d7f69c2ad3d.jpg" },

  { id: "rolex-datejust-36", category: "watch", brand: "Rolex", brandSlug: "rolex",
    name: "Rolex Datejust 36",
    description: "The classic everyday dress watch with a green dial and date window.",
    price: 2600000, image: "https://i.pinimg.com/736x/d8/95/16/d895163974a82f87123caae93d8c694a.jpg" },

  { id: "rolex-gmt-master-ii", category: "watch", brand: "Rolex", brandSlug: "rolex",
    name: "Rolex GMT-Master II",
    description: "A travel companion tracking two time zones with a two-tone bezel.",
    price: 4200000, image: "https://i.pinimg.com/736x/76/76/5e/76765ea33976d0a2f9c8a7c9edff0c50.jpg" },

  { id: "rolex-day-date-40", category: "watch", brand: "Rolex", brandSlug: "rolex",
    name: "Rolex Day-Date 40",
    description: "A prestigious gold watch with a champagne dial and day-date display.",
    price: 15500000, image: "https://i.pinimg.com/1200x/ab/ca/9a/abca9afc36d2515e25369e67117cc04e.jpg" },

  /* ---------- Audemars Piguet watches ---------- */
  { id: "audemars-piguet-royal-oak", category: "watch", brand: "Audemars Piguet", brandSlug: "audemars-piguet",
    name: "Audemars Piguet Royal Oak",
    description: "The iconic octagonal bezel and integrated bracelet with a blue dial.",
    price: 12500000, image: "https://i.pinimg.com/736x/fd/b6/64/fdb6648557469de20dad43cd9c623874.jpg" },

  { id: "audemars-piguet-royal-oak-offshore", category: "watch", brand: "Audemars Piguet", brandSlug: "audemars-piguet",
    name: "Audemars Piguet Royal Oak Offshore",
    description: "A bold, sporty chronograph on a black rubber strap.",
    price: 11500000, image: "https://i.pinimg.com/1200x/b6/a8/0c/b6a80c15cc315a873c3dd31f36203254.jpg" },

  { id: "audemars-piguet-code-11-59", category: "watch", brand: "Audemars Piguet", brandSlug: "audemars-piguet",
    name: "Audemars Piguet Code 11.59",
    description: "A modern round-case design with a deep green dial on leather.",
    price: 8500000, image: "https://i.pinimg.com/1200x/4d/5c/8d/4d5c8df88ba29a29a7ef096972ca8bd0.jpg" },

  { id: "audemars-piguet-royal-oak-perpetual-calendar", category: "watch", brand: "Audemars Piguet", brandSlug: "audemars-piguet",
    name: "Audemars Piguet Royal Oak Perpetual Calendar",
    description: "A refined rose-gold complication with a silver dial.",
    price: 45000000, image: "https://i.pinimg.com/1200x/b2/e4/e3/b2e4e32f18b85e8e4b5dee29341ade86.jpg" },

  { id: "audemars-piguet-royal-oak-concept", category: "watch", brand: "Audemars Piguet", brandSlug: "audemars-piguet",
    name: "Audemars Piguet Royal Oak Concept",
    description: "An avant-garde, dark-toned sports watch with a rubber strap.",
    price: 50000000, image: "https://i.pinimg.com/736x/78/d0/da/78d0dad5601a129e7a16657f49b8900c.jpg" },

  /* ---------- Franck Muller watches ---------- */
  { id: "franck-muller-vanguard", category: "watch", brand: "Franck Muller", brandSlug: "franck-muller",
    name: "Franck Muller Vanguard",
    description: "A dynamic, curved-case sports watch in black and steel.",
    price: 3500000, image: "https://i.pinimg.com/1200x/f6/f6/3d/f6f63da979eb69e95ed63b444d09fcf5.jpg" },

  { id: "franck-muller-cintree-curvex", category: "watch", brand: "Franck Muller", brandSlug: "franck-muller",
    name: "Franck Muller Cintree Curvex",
    description: "The signature curved case with a creamy dial and gold finish.",
    price: 4200000, image: "https://i.pinimg.com/1200x/1e/51/74/1e5174ea18bd8daba3ee65abe35aff23.jpg" },

  { id: "franck-muller-conquistador", category: "watch", brand: "Franck Muller", brandSlug: "franck-muller",
    name: "Franck Muller Conquistador",
    description: "A confident chronograph with a deep blue dial and steel bracelet.",
    price: 3200000, image: "https://i.pinimg.com/736x/87/da/d1/87dad122e88499d77ea587cacec1c97b.jpg" },

  { id: "franck-muller-crazy-hours", category: "watch", brand: "Franck Muller", brandSlug: "franck-muller",
    name: "Franck Muller Crazy Hours",
    description: "A playful, avant-garde dial with jumping-hour numerals.",
    price: 6500000, image: "https://i.pinimg.com/1200x/fb/df/d1/fbdfd16cfb02d0d6833707b906774d8f.jpg" },

  { id: "franck-muller-master-square", category: "watch", brand: "Franck Muller", brandSlug: "franck-muller",
    name: "Franck Muller Master Square",
    description: "A square case with an ivory dial for understated elegance.",
    price: 2800000, image: "https://i.pinimg.com/736x/58/13/f3/5813f3f0a43eb0da62a20bed34f64bfe.jpg" },

  /* ---------- Patek Philippe watches ---------- */
  { id: "patek-philippe-nautilus", category: "watch", brand: "Patek Philippe", brandSlug: "patek-philippe",
    name: "Patek Philippe Nautilus",
    description: "A porthole-inspired sports icon with a horizontally embossed blue dial.",
    price: 25000000, image: "https://i.pinimg.com/736x/ca/bc/0a/cabc0a9173137cf24425c8357df655ba.jpg" },

  { id: "patek-philippe-aquanaut", category: "watch", brand: "Patek Philippe", brandSlug: "patek-philippe",
    name: "Patek Philippe Aquanaut",
    description: "A contemporary sports watch with a textured dial and green strap.",
    price: 18000000, image: "https://i.pinimg.com/1200x/93/1c/26/931c264dc7a3f0285db019024c61c674.jpg" },

  { id: "patek-philippe-calatrava", category: "watch", brand: "Patek Philippe", brandSlug: "patek-philippe",
    name: "Patek Philippe Calatrava",
    description: "The purest dress watch: slim rose-gold case and leather strap.",
    price: 11000000, image: "https://i.pinimg.com/736x/fc/50/39/fc5039f1447582110d20050e6b950065.jpg" },

  { id: "patek-philippe-grand-complications", category: "watch", brand: "Patek Philippe", brandSlug: "patek-philippe",
    name: "Patek Philippe Grand Complications",
    description: "A gold chronograph that showcases masterful watchmaking.",
    price: 42000000, image: "https://i.pinimg.com/736x/0f/38/ba/0f38bac1f85c96c90c8cc8ef3d97e3c6.jpg" },

  { id: "patek-philippe-twenty4", category: "watch", brand: "Patek Philippe", brandSlug: "patek-philippe",
    name: "Patek Philippe Twenty~4",
    description: "An elegant rectangular watch with a bracelet of rose gold.",
    price: 9500000, image: "https://i.pinimg.com/736x/56/fd/07/56fd07ca10506356d1387fa90256220c.jpg" },

  /* ---------- Cartier watches ---------- */
  { id: "cartier-tank-must", category: "watch", brand: "Cartier", brandSlug: "cartier",
    name: "Cartier Tank Must",
    description: "A timeless rectangular case with Roman numerals and a burgundy strap.",
    price: 1350000, image: "https://i.pinimg.com/1200x/31/7c/ca/317cca2b38d7b5bc9bea90073585d12c.jpg" },

  { id: "cartier-santos-de-cartier", category: "watch", brand: "Cartier", brandSlug: "cartier",
    name: "Cartier Santos de Cartier",
    description: "A square, industrial-chic design with exposed screws.",
    price: 2700000, image: "https://i.pinimg.com/1200x/ba/75/0b/ba750b4e693e0e829bd212b83d396294.jpg" },

  { id: "cartier-ballon-bleu", category: "watch", brand: "Cartier", brandSlug: "cartier",
    name: "Cartier Ballon Bleu",
    description: "A rounded case and domed crown with a vivid blue dial.",
    price: 2200000, image: "https://i.pinimg.com/736x/cd/91/95/cd91950f145775edfd56216405572c13.jpg" },

  { id: "cartier-pasha-de-cartier", category: "watch", brand: "Cartier", brandSlug: "cartier",
    name: "Cartier Pasha de Cartier",
    description: "A bold round watch with a black dial and sporty character.",
    price: 2600000, image: "https://i.pinimg.com/1200x/ec/fa/d0/ecfad047a767e3501ceef8fa59766d28.jpg" },

  { id: "cartier-panthere", category: "watch", brand: "Cartier", brandSlug: "cartier",
    name: "Cartier Panthere",
    description: "A refined, jewellery-style bracelet watch in polished gold.",
    price: 5500000, image: "https://i.pinimg.com/736x/4d/ac/38/4dac38e408b774f04e5682ea5f0c1a0c.jpg" },
];

/* Products shown in Featured section */
const FEATURED_IDS = [
  "creed-aventus",
  "rolex-submariner",
  "chanel-bleu-de-chanel",
  "patek-philippe-nautilus",
  "gucci-bloom",
  "audemars-piguet-royal-oak",
  "louis-vuitton-ombre-nomade",
  "cartier-santos-de-cartier"
];

/* ---------- Helpers shared by all pages ---------- */

/** Format a price. */
function formatPrice(amount) {
  const n = Number(amount) || 0;
  if (n === 0) return "Rs. 00";
  return "Rs. " + n.toLocaleString("en-PK");
}

/** Find one product by id. */
function getProductById(id) {
  return PRODUCTS.find(function (p) {
    return p.id === id;
  }) || null;
}

/** Products filtered by category and optional brand slug. */
function getProducts(category, brandSlug) {
  return PRODUCTS.filter(function (p) {
    return (!category || p.category === category) &&
           (!brandSlug || p.brandSlug === brandSlug);
  });
}
