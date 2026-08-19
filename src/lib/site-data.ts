import heroFeast from "@/assets/hero-feast.jpg";
import vegFeast from "@/assets/veg-feast.jpg";
import nonvegFeast from "@/assets/nonveg-feast.jpg";
import dishMeals from "@/assets/dish-meals.jpg";
import dishSappadu from "@/assets/dish-sappadu.jpg";
import dishChickenBiryani from "@/assets/dish-chicken-biryani.jpg";
import dishMuttonBiryani from "@/assets/dish-mutton-biryani.jpg";
import dishChicken65 from "@/assets/dish-chicken65.jpg";
import dishPayasam from "@/assets/dish-payasam.jpg";
import dishSweets from "@/assets/dish-sweets.jpg";
import dishSnacks from "@/assets/dish-snacks.jpg";
import dishBeverages from "@/assets/dish-beverages.jpg";
import dishMuttonCurry from "@/assets/dish-mutton-curry.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import storyBanner from "@/assets/story-banner.jpg";
import kitchenPrep from "@/assets/kitchen-prep.jpg";
import setupBuffet from "@/assets/setup-buffet.jpg";
import occasionWedding from "@/assets/occasion-wedding.jpg";
import occasionBirthday from "@/assets/occasion-birthday.png";
import occasionCorporate from "@/assets/occasion-corporate.png";
import occasionFamily from "@/assets/occasion-family.png";
import occasionSpecial from "@/assets/occasion-special.png";

export const images = {
  heroFeast,
  vegFeast,
  nonvegFeast,
  dishMeals,
  dishSappadu,
  dishChickenBiryani,
  dishMuttonBiryani,
  dishChicken65,
  dishPayasam,
  dishSweets,
  dishSnacks,
  dishBeverages,
  dishMuttonCurry,
  dishPaneer,
  storyBanner,
  kitchenPrep,
  setupBuffet,
};

/** Editable placeholder business details — replace with real information. */
export const contactInfo = {
  phone: "+91 90000 00000",
  whatsapp: "+91 90000 00000",
  whatsappLink: "https://wa.me/919000000000",
  email: "hello@annapaathiramcatering.com",
  location: "Chennai, Tamil Nadu, India",
  serviceArea: "Available across Tamil Nadu",
};

export type Dish = {
  name: string;
  description: string;
  image: string;
  categories: string[];
};

export const signatureDishes: Dish[] = [
  {
    name: "South Indian Meals",
    description: "Rice, sambar, rasam, poriyal and curd served the traditional way.",
    image: dishMeals,
    categories: ["Vegetarian"],
  },
  {
    name: "Wedding Sappadu",
    description: "A grand banana-leaf feast crafted for wedding celebrations.",
    image: dishSappadu,
    categories: ["Vegetarian"],
  },
  {
    name: "Chicken Biryani",
    description: "Aromatic long-grain rice slow-cooked with tender chicken and spices.",
    image: dishChickenBiryani,
    categories: ["Non-Vegetarian", "Biryani"],
  },
  {
    name: "Mutton Biryani",
    description: "Rich, fragrant biryani with slow-cooked mutton and whole spices.",
    image: dishMuttonBiryani,
    categories: ["Non-Vegetarian", "Biryani"],
  },
  {
    name: "Chicken 65",
    description: "Crisp, spicy fried chicken finished with curry leaves and lemon.",
    image: dishChicken65,
    categories: ["Non-Vegetarian", "Snacks"],
  },
  {
    name: "Payasam",
    description: "Traditional sweet payasam with cashews, ghee and cardamom.",
    image: dishPayasam,
    categories: ["Sweets", "Vegetarian"],
  },
];

export const menuCategories = [
  "All",
  "Vegetarian",
  "Non-Vegetarian",
  "Biryani",
  "Sweets",
  "Snacks",
  "Beverages",
] as const;

export const menuItems: Dish[] = [
  ...signatureDishes,
  {
    name: "Paneer & Vegetable Kurma",
    description: "Creamy kurma and paneer masala served with parotta or chapati.",
    image: dishPaneer,
    categories: ["Vegetarian"],
  },
  {
    name: "Mutton Curry",
    description: "Slow-simmered South Indian mutton curry with roasted spices.",
    image: dishMuttonCurry,
    categories: ["Non-Vegetarian"],
  },
  {
    name: "Traditional Sweets",
    description: "Mysore pak, laddu and seasonal sweets prepared fresh.",
    image: dishSweets,
    categories: ["Sweets", "Vegetarian"],
  },
  {
    name: "Tiffin & Snacks",
    description: "Idli, medu vada and dosa served with chutney and sambar.",
    image: dishSnacks,
    categories: ["Snacks", "Vegetarian"],
  },
  {
    name: "Filter Coffee & Buttermilk",
    description: "Freshly brewed filter coffee, buttermilk and seasonal juices.",
    image: dishBeverages,
    categories: ["Beverages", "Vegetarian"],
  },
  {
    name: "Vegetarian Banana Leaf Feast",
    description: "A complete traditional spread of curries, rice and sides.",
    image: vegFeast,
    categories: ["Vegetarian"],
  },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  offerings: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "wedding",
    title: "Wedding Catering",
    short: "Traditional wedding meals and customized menus.",
    description:
      "From the morning tiffin to the grand banana-leaf sappadu, we plan and serve every course of your wedding day with calm, practised hospitality.",
    offerings: ["Banana-leaf sappadu", "Tiffin & snack counters", "Veg and non-veg menus", "Trained serving team"],
    image: occasionWedding,
  },
  {
    slug: "birthday",
    title: "Birthday Celebrations",
    short: "Delicious food for memorable celebrations.",
    description:
      "Menus built around the people you are celebrating — familiar favourites, crowd-pleasing biryanis and sweets to finish.",
    offerings: ["Biryani counters", "Snacks & starters", "Dessert selection", "Buffet or table service"],
    image: occasionBirthday,
  },
  {
    slug: "corporate",
    title: "Corporate Events",
    short: "Professional catering for meetings and events.",
    description:
      "Punctual, neatly presented catering for meetings, launches and office celebrations, with menus sized to your schedule.",
    offerings: ["Working lunches", "Tea & snack breaks", "Boxed meal options", "On-time setup"],
    image: occasionCorporate,
  },
  {
    slug: "family",
    title: "Family Functions",
    short: "Food for engagements, anniversaries and gatherings.",
    description:
      "Engagements, housewarmings, naming ceremonies and anniversaries — home-style cooking prepared at celebration scale.",
    offerings: ["Traditional meals", "Custom portions", "Sweet counters", "Home or hall service"],
    image: occasionFamily,
  },
  {
    slug: "special",
    title: "Special Events",
    short: "Customized catering for every celebration.",
    description:
      "Festivals, community gatherings and one-of-a-kind occasions catered around your menu, timing and guest count.",
    offerings: ["Fully customized menus", "Live counters", "Veg & non-veg combinations", "Flexible guest counts"],
    image: occasionSpecial,
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Weddings" | "Food" | "Events" | "Catering Setup";
};

export const galleryImages: GalleryImage[] = [
  { src: dishSappadu, alt: "Wedding banana-leaf feast being served", category: "Weddings" },
  { src: vegFeast, alt: "Traditional vegetarian banana-leaf meal", category: "Food" },
  { src: dishChickenBiryani, alt: "Chicken biryani in a copper handi", category: "Food" },
  { src: setupBuffet, alt: "Elegant catering buffet setup with brass vessels", category: "Catering Setup" },
  { src: nonvegFeast, alt: "Non-vegetarian South Indian spread", category: "Food" },
  { src: dishPayasam, alt: "Payasam served in a brass bowl", category: "Food" },
  { src: kitchenPrep, alt: "Chefs preparing food in the catering kitchen", category: "Catering Setup" },
  { src: storyBanner, alt: "Guests served banana-leaf meals at a celebration", category: "Events" },
  { src: dishSweets, alt: "Traditional Indian sweets on a brass plate", category: "Food" },
  { src: dishMuttonBiryani, alt: "Mutton biryani in a brass vessel", category: "Food" },
  { src: dishSnacks, alt: "South Indian tiffin and snacks platter", category: "Events" },
  { src: dishChicken65, alt: "Chicken 65 served on a banana leaf", category: "Food" },
];

export const testimonials = [
  {
    quote:
      "The banana-leaf meal at our wedding was exactly what we hoped for — traditional, generous and beautifully served.",
    name: "Placeholder Customer Name",
    event: "Wedding, Chennai",
  },
  {
    quote:
      "Guests kept asking who catered the biryani. The team arrived early and everything ran without a single hiccup.",
    name: "Placeholder Customer Name",
    event: "Birthday Celebration",
  },
  {
    quote:
      "They built the menu around our family's preferences and handled both veg and non-veg counters effortlessly.",
    name: "Placeholder Customer Name",
    event: "Family Function",
  },
  {
    quote:
      "Clean, punctual and genuinely warm service. Our office event felt personal rather than corporate.",
    name: "Placeholder Customer Name",
    event: "Corporate Event",
  },
];
