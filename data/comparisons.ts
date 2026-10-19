export type ComparisonItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
};

export const comparisons: ComparisonItem[] = [
  {
    id: "hdr",
    title: "HDR Exposure Balancing",
    category: "HDR Enhancement",
    description: "Balanced exposures across bright window views and deep interior shadows for crisp, natural illumination.",
    beforeImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",
    afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
    beforeAlt: "Interior room with uneven lighting and bright window washout before HDR processing",
    afterAlt: "Interior room with balanced window views, balanced contrast and natural white tones after HDR enhancement",
  },
  {
    id: "twilight",
    title: "Day-to-Night Conversion",
    category: "Day-to-Night",
    description: "Atmospheric evening conversion with deep twilight skies and realistic interior & exterior architectural glow.",
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    beforeAlt: "Daytime residential property exterior with neutral flat daylight lighting",
    afterAlt: "Atmospheric twilight conversion with warm interior illumination and dusk sky glow",
  },
  {
    id: "staging",
    title: "Virtual Room Staging",
    category: "Virtual Staging",
    description: "Digitally placed designer furnishings and accessories showing the scale, warmth, and full potential of empty spaces.",
    beforeImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
    afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
    beforeAlt: "Empty contemporary room showing bare walls and unfilled floor area",
    afterAlt: "Digitally furnished room showing modern sofa, ambient lighting, coffee table and art",
  },
];
