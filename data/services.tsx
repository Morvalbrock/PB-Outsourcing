import { Aperture, Camera, Clapperboard, Contrast, Home, Layers3, Sun } from "lucide-react";
import type { ReactNode } from "react";

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  iconName: string;
};

export const services: Service[] = [
  {
    id: "colour-correction",
    title: "Colour Correction",
    shortDescription:
      "Enhance property photographs with balanced colours, natural white balance, accurate tones, and consistent visual quality.",
    fullDescription:
      "Accurate color rendering is essential to showcasing materials, paint finishes, and wood grains authentically. We calibrate color temperatures, neutralize unwanted interior color casts from mixed lighting, and ensure your entire photo set maintains a cohesive, lifelike look across every room.",
    benefits: [
      "Natural white balance and neutral ambient lighting",
      "Accurate wall paint, timber, and masonry color rendering",
      "Cohesive tone and luminance across the full set",
      "Tailored to MLS, print marketing, and web standards",
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Bright, professionally photographed living room with accurate natural colors",
    iconName: "Sun",
  },
  {
    id: "hdr-photo-editing",
    title: "HDR Photo Editing",
    shortDescription:
      "Balance interior and exterior exposures to create detailed, natural-looking real estate photographs.",
    fullDescription:
      "Properties with large glass walls or sunlit windows present extreme dynamic range challenges. We blend multiple bracketed exposures with precision, ensuring exterior garden views are crisp while interior spaces remain bright, inviting, and free of artificial haloing.",
    benefits: [
      "Clear, glare-free window views with rich outdoor detail",
      "Balanced low-light tonal recovery without digital noise",
      "Vertical perspective and lens distortion correction",
      "Clean contrast curves preserving natural depth",
    ],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Spacious property interior showing balanced window views and natural interior lighting",
    iconName: "Aperture",
  },
  {
    id: "photo-retouching",
    title: "Photo Retouching",
    shortDescription:
      "Refine property images by removing approved distractions, correcting imperfections, and improving the final presentation.",
    fullDescription:
      "Even high-end properties have inevitable visual clutter such as electrical cords, pool hoses, refuse bins, or scuffed surfaces. Our retouchers delicately eliminate distractions and enhance lawns and skies, presenting the space at its absolute best while maintaining truthful representation.",
    benefits: [
      "Removal of electrical cords, vehicles, and minor clutter",
      "Lawn enhancement, patching, and debris removal",
      "Sky replacement with natural atmospheric clouds",
      "Reflection cleanup in mirrors and polished surfaces",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Exterior luxury property photograph with immaculate lawns and clean facade",
    iconName: "Camera",
  },
  {
    id: "day-to-night-conversion",
    title: "Day-to-Night Conversion",
    shortDescription:
      "Transform daytime exterior photographs into realistic twilight scenes with atmospheric skies and warm architectural lighting.",
    fullDescription:
      "Dusk photography creates an emotional, luxurious aura for prestigious listings, but evening photo shoots can be difficult to schedule. We transform daytime exterior captures into rich twilight imagery with illuminated windows, warm landscape lighting, and golden-hour skies.",
    benefits: [
      "Deep cobalt and violet evening sky transitions",
      "Warm architectural interior and exterior window glows",
      "Subtle garden, walkway, and pool light activation",
      "High visual impact for hero listings and feature ads",
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Luxury residence at dusk with warm architectural lighting and twilight sky",
    iconName: "Contrast",
  },
  {
    id: "virtual-home-staging",
    title: "Virtual Home Staging",
    shortDescription:
      "Digitally furnish empty spaces with carefully selected furniture and decor to help buyers imagine the property's potential.",
    fullDescription:
      "Vacant properties often feel sterile and make spatial proportions difficult for prospective buyers to evaluate. We populate vacant interiors with realistic, architecturally appropriate 3D furniture packages ranging from modern Scandinavian to luxury transitional.",
    benefits: [
      "Custom furniture curation suited to each room's layout",
      "Photorealistic shadows, floor reflections, and scaling",
      "Multiple styling themes: Modern, Minimalist, Coastal, Luxury",
      "Cost-effective alternative to physical staging logistics",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Elegantly furnished living room with contemporary sofa and curated decor",
    iconName: "Home",
  },
  {
    id: "floor-plans",
    title: "2D & 3D Floor Plans",
    shortDescription:
      "Present property layouts with clear 2D floor plans and visually engaging 3D representations.",
    fullDescription:
      "Prospective buyers rely heavily on floor plans to assess property flow and dimensions. We convert sketches, architectural blueprints, or laser measurements into high-clarity 2D marketing plans and dimensional 3D furnished layouts with accurate spatial cues.",
    benefits: [
      "Clear 2D schematics with room labels and metric/imperial measurements",
      "Engaging 3D top-down and isometric furnished views",
      "Brand-aligned color palettes, compass orientation, and logos",
      "Delivered in print-ready PDF and web-optimized vector formats",
    ],
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Architectural property layout reference showing clean modern floor plan aesthetic",
    iconName: "Layers3",
  },
  {
    id: "real-estate-video-editing",
    title: "Real Estate Video Editing",
    shortDescription:
      "Turn raw property footage into polished property videos with smooth transitions, colour grading, titles, and professional pacing.",
    fullDescription:
      "Video walkthroughs are crucial for modern real estate marketing. We assemble drone flyovers, gimbal interior tours, and agent introductions into compelling cinematic stories complete with speed ramps, licensed soundtrack sync, and lower-third graphic branding.",
    benefits: [
      "Cinematic narrative flow with smooth stabilised pacing",
      "Professional color grading matching property photographs",
      "Modern lower-thirds, property badges, and agent branding",
      "Horizontal 16:9 4K exports and vertical 9:16 social reels",
    ],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Cinematic residential property interior visual showing video-grade lighting",
    iconName: "Clapperboard",
  },
];
