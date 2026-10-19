export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "PB Outsourcing gives our real estate photography business dependable editing support. Their exposure balancing and natural color rendition make every listing look professional.",
    name: "Marcus Vance",
    role: "Lead Real Estate Photographer",
    location: "Commercial & Residential Media",
  },
  {
    quote:
      "The day-to-night transformations and virtual staging have significantly boosted enquiry rates on our high-end residential listings. Their team is communicative and reliable.",
    name: "Elena Rostova",
    role: "Marketing Director",
    location: "Prestige Property Agency",
  },
  {
    quote:
      "From detailed 2D floor plans to cinematic walkthrough video editing, having a single partner who understands property visuals saves us hours every week.",
    name: "David Chen",
    role: "Property Development Partner",
    location: "Urban Living Developments",
  },
];
