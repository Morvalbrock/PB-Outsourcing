import {
  Aperture,
  Camera,
  Clapperboard,
  Compass,
  Contrast,
  Eraser,
  Heart,
  Home,
  Scissors,
  Sun,
  Sunset,
} from "lucide-react";

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
    id: "single-image",
    title: "Single Image Editing",
    shortDescription:
      "Enhance single-exposure property and commercial photographs with natural white balance, accurate tones, and crisp contrast.",
    fullDescription:
      "For single-exposure captures, our retouchers optimize dynamic range, lift deep room shadows, calibrate color temperature, and eliminate yellow halogen or fluorescent color casts. Ideal for quick listings, rentals, architectural spaces, and high-volume shoots.",
    benefits: [
      "Natural white balance and ambient tone calibration",
      "Shadow recovery without digital grain or noise",
      "Lens distortion, keystoning, and vertical alignment",
      "Optimized for high-speed delivery and web platforms",
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Single-exposure living room with clean daylight balance and natural finishes",
    iconName: "Sun",
  },
  {
    id: "hdr-photo-editing",
    title: "HDR Photo Editing",
    shortDescription:
      "Balance extreme interior and exterior exposures with multi-bracket blending, clean window pulls, and realistic architectural depth.",
    fullDescription:
      "Properties with sunlit windows present extreme dynamic range challenges. We manually blend multiple bracketed exposures (3 to 7 stops) with precision window pulling, ensuring outdoor views are crystal clear while interior spaces remain bright, inviting, and free of artificial haloing.",
    benefits: [
      "Crystal clear window pulls revealing gardens, sky, and pools",
      "Balanced low-light shadow recovery without artificial halos",
      "True 90° vertical perspective and barrel distortion correction",
      "Delicate ambient and flash exposure harmonization",
    ],
    image: "/HDR/After.jpg",
    imageAlt: "Luxury property interior with professionally balanced HDR exposure and natural window view",
    iconName: "Aperture",
  },
  {
    id: "day-to-night",
    title: "Day-to-Night Conversion",
    shortDescription:
      "Transform flat daytime exterior captures into dramatic twilight scenes with warm architectural lighting and evening skies.",
    fullDescription:
      "Dusk photography creates an emotional, luxurious aura for prestigious listings, but evening shoots are difficult to schedule. We transform daytime exterior photos into evocative twilight imagery with illuminated windows, warm landscape lighting, and golden-hour skies.",
    benefits: [
      "Deep cobalt and sunset sky replacements",
      "Warm architectural interior and exterior window glows",
      "Subtle garden, walkway, and pool light activation",
      "High visual impact for hero listings and feature campaigns",
    ],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Luxury residence at dusk with warm architectural lighting and twilight sky",
    iconName: "Contrast",
  },
  {
    id: "twilight",
    title: "Twilight / Dusk Enhancement",
    shortDescription:
      "Elevate authentic dusk and twilight captures with golden hour warmth, rich sky transitions, and glowing architectural fixtures.",
    fullDescription:
      "Authentic twilight captures often suffer from fast-fading light, digital noise, or mixed ambient colors. We enhance dusk captures by enriching sky gradients, balancing structure-to-sky luminance, softening harsh glare, and bringing out warm ambient porch and patio lighting.",
    benefits: [
      "Golden hour warmth and rich violet sky transitions",
      "Balanced architectural facade illumination",
      "Pool, patio, and landscape lighting enhancement",
      "Noise suppression on low-light long exposure captures",
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Atmospheric residential exterior at twilight with glowing landscape lights",
    iconName: "Sunset",
  },
  {
    id: "virtual-staging",
    title: "Virtual Staging",
    shortDescription:
      "Digitally furnish vacant rooms with stylish contemporary furniture and decor to help prospective buyers visualize full spatial potential.",
    fullDescription:
      "Vacant properties feel sterile and make spatial proportions difficult for buyers to evaluate. We populate vacant interiors with realistic, architecturally appropriate 3D furniture packages ranging from modern Scandinavian to luxury transitional.",
    benefits: [
      "Custom 3D furniture curation suited to each room layout",
      "Photorealistic shadows, floor reflections, and scaling",
      "Multiple styling themes: Modern, Minimalist, Coastal, Luxury",
      "High buyer engagement at a fraction of physical staging cost",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Elegantly furnished living room with contemporary sofa and curated decor",
    iconName: "Home",
  },
  {
    id: "video-editing",
    title: "Video Editing",
    shortDescription:
      "Turn raw gimbal and drone footage into cinematic property showcase videos with smooth transitions, color grading, and titles.",
    fullDescription:
      "Video walkthroughs are crucial for modern real estate marketing. We assemble drone flyovers, gimbal interior tours, and agent introductions into compelling cinematic stories complete with speed ramps, licensed soundtrack sync, and lower-third graphic branding.",
    benefits: [
      "Cinematic narrative flow with smooth stabilised pacing",
      "Professional color grading matching still photography sets",
      "Modern lower-thirds, property badges, and agent branding",
      "Horizontal 16:9 4K exports and vertical 9:16 social reels",
    ],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Cinematic residential property interior visual showing video-grade lighting",
    iconName: "Clapperboard",
  },
  {
    id: "clipping-path",
    title: "Clipping Path (Cutout)",
    shortDescription:
      "Pixel-perfect manual pen tool clipping paths, pure white backgrounds, and transparent cutouts for e-commerce and furniture.",
    fullDescription:
      "Hand-crafted vector clipping paths created with Photoshop's Pen Tool for flawless edge definition. Ideal for furniture catalogs, interior design cutouts, e-commerce listings, and complex product extractions with sharp or soft alpha channels.",
    benefits: [
      "100% hand-drawn vector paths using Adobe Pen Tool",
      "Crisp edge isolation without jagged or blurred borders",
      "Pure white (RGB 255,255,255) or transparent PNG exports",
      "Multi-path selections for localized color changes",
    ],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Designer armchair cleanly isolated with crisp vector clipping path",
    iconName: "Scissors",
  },
  {
    id: "item-removal",
    title: "Item & Object Removal",
    shortDescription:
      "Erase unwanted clutter, electrical cords, vehicles, bins, and imperfections with seamless texture reconstruction.",
    fullDescription:
      "Distractions draw buyer attention away from architectural beauty. We delicately eliminate power lines, vehicles parked on driveways, refuse bins, pool hoses, messy electrical cords, and scuffed surfaces, seamlessly reconstructing textures underneath.",
    benefits: [
      "Removal of vehicles, street signs, and overhead wires",
      "Driveway oil stain and concrete crack patching",
      "Interior cord, pet accessory, and clutter decluttering",
      "Natural texture cloning on wood, turf, and tiles",
    ],
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Immaculate architectural residence with clean driveway and flawless lawn",
    iconName: "Eraser",
  },
  {
    id: "wedding-image-editing",
    title: "Wedding Image Editing",
    shortDescription:
      "Artistic wedding photo post-production: natural skin retouching, bridal gown detail enhancement, and emotional color grading.",
    fullDescription:
      "Wedding photographers shoot thousands of frames under varying light. We provide high-volume culling, uniform color palettes (Clean Film, Warm Moody, Bright & Airy), blemish correction, stray hair removal, and delicate wedding gown contrast preservation.",
    benefits: [
      "Natural skin retouching and gentle eye/teeth brightening",
      "Cohesive color palette applied across the entire celebration",
      "Delicate bridal gown lace and veil detail recovery",
      "Discreet removal of exit signs, background guests, and clutter",
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Bride and groom in natural golden hour light with romantic artistic color grading",
    iconName: "Heart",
  },
  {
    id: "aerial-drone",
    title: "Aerial & Drone Editing",
    shortDescription:
      "Enhance high-altitude drone captures with atmospheric haze removal, horizon leveling, and vivid landscape colors.",
    fullDescription:
      "Aerial perspectives reveal property layout, proximity to coastline, and neighborhood context. We remove haze, balance direct sun glare with landscape shadows, level horizons, enrich turf and water hues, and highlight property boundary lines with precision graphics.",
    benefits: [
      "Atmospheric haze reduction and dynamic range expansion",
      "Horizon leveling and wide-angle drone lens correction",
      "Property boundary outline overlays and locator pins",
      "Vibrant turf greening and ocean blue color enhancement",
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Elevated aerial drone perspective of luxury waterfront property with lush grounds",
    iconName: "Compass",
  },
];
