import { Aperture, Camera, Clapperboard, Contrast, Home, Layers3, Sun } from "lucide-react";
import type { ReactNode } from "react";

export type Service = {
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  image: string;
  imageAlt: string;
  icon: ReactNode;
};

export const services: Service[] = [
  {
    title: "Colour Correction",
    description: "Balanced colour, natural white balance and consistent tones across property photographs.",
    longDescription: "Refine the colour and tone of property photographs for a clean, cohesive presentation while keeping materials and interiors looking natural.",
    benefits: ["Balanced white balance and colour", "Consistent tones across a set", "Polished, natural-looking results"],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bright contemporary living room",
    icon: <Sun size={20} />,
  },
  {
    title: "HDR Photo Editing",
    description: "Balanced interior and exterior exposures with clear, natural-looking details.",
    longDescription: "Bring detail into bright windows and darker interiors with carefully balanced real estate photo editing that aims to preserve a natural look.",
    benefits: ["Balanced exposure and contrast", "Clearer interior details", "Consistent property image sets"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Spacious property interior",
    icon: <Aperture size={20} />,
  },
  {
    title: "Photo Retouching",
    description: "Refine property images by removing approved distractions and correcting imperfections.",
    longDescription: "Carefully clean up property images by addressing distracting elements and minor imperfections in line with the client's instructions.",
    benefits: ["Distraction removal by request", "Careful image cleanup", "Consistent finishing"],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Modern residential exterior",
    icon: <Camera size={20} />,
  },
  {
    title: "Day-to-Night Conversion",
    description: "Create atmospheric twilight property images with warm, realistic lighting.",
    longDescription: "Transform suitable daytime exterior images into evening-style visuals with carefully considered sky tones and architectural lighting.",
    benefits: ["Twilight-style presentation", "Balanced sky and lighting", "Attention to realistic details"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Warmly lit residential property",
    icon: <Contrast size={20} />,
  },
  {
    title: "Virtual Home Staging",
    description: "Digitally furnish empty spaces to help viewers imagine a room's potential.",
    longDescription: "Create a furnished-room concept using digital furniture and decor that suit the room's proportions and intended style.",
    benefits: ["Room-appropriate furniture concepts", "Cohesive decor styling", "Clear presentation of room potential"],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Tastefully furnished living space",
    icon: <Home size={20} />,
  },
  {
    title: "2D & 3D Floor Plans",
    description: "Present property layouts through clear 2D plans and engaging 3D views.",
    longDescription: "Help customers understand a property's layout with organised 2D floor plans and 3D visual representations based on the supplied measurements and requirements.",
    benefits: ["Clear layout presentation", "2D and 3D visual formats", "Useful for property marketing"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Interior visual reference for floor plan presentation",
    icon: <Layers3 size={20} />,
  },
  {
    title: "Real Estate Video Editing",
    description: "Turn property footage into polished videos with clean pacing and transitions.",
    longDescription: "Shape supplied property footage into a clear visual walkthrough using editing, colour refinement, titles and transitions appropriate to the brief.",
    benefits: ["Clean transitions and pacing", "Consistent colour treatment", "Titles and music where requested"],
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Contemporary interior suitable for property video",
    icon: <Clapperboard size={20} />,
  },
];
