import {
  Aperture,
  Camera,
  Clapperboard,
  Compass,
  Contrast,
  Eraser,
  Home,
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
    image: "/single-image/single-sample-1-after.jpg",
    imageAlt: "Single-exposure interior refined with balanced tone and natural daylight",
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
    image: "/day-to-twilight/twilight-sample-1-after.jpg",
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
    image: "/day-to-twilight/twilight-sample-2-after.jpg",
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
    image: "/virtual-staging/staging-sample-1-after.jpg",
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
    image: "/HDR/After.jpg",
    imageAlt: "Cinematic residential property interior visual showing video-grade lighting",
    iconName: "Clapperboard",
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
    image: "/object-removal/removal-sample-1-after.jpg",
    imageAlt: "Property scene with distractions seamlessly removed and textures preserved",
    iconName: "Eraser",
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
    image: "/aerial/aerial-sample-1-after.jpg",
    imageAlt: "Aerial drone photograph with vivid landscape color and leveled horizon",
    iconName: "Compass",
  },
];
