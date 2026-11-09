"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  isVideo?: boolean;
  videoDuration?: string;
  videoSrc?: string;
};

const items: PortfolioItem[] = [
  {
    id: "p-single-1",
    title: "Single Image Tone & Exposure Polish",
    category: "Single Image",
    description: "Single-exposure capture refined with neutral white balance, shadow recovery, and crisp architectural detail.",
    image: "/images/single-image/single-sample-1-after.jpg",
    alt: "Single-image edited real estate interior with balanced tones",
  },
  {
    id: "p-single-2",
    title: "Interior Shadow Recovery & White Balance",
    category: "Single Image",
    description: "Warm cast neutralized and shadow detail lifted from a single RAW frame while preserving natural ambient light.",
    image: "/images/single-image/single-sample-2-after.jpg",
    alt: "Single-shot interior with neutralized color cast and recovered shadows",
  },
  {
    id: "p-single-3",
    title: "Single Shot Contrast & Clarity Lift",
    category: "Single Image",
    description: "Tonal contrast, texture clarity, and realistic window light restored from a single-source exposure.",
    image: "/images/single-image/single-sample-3-after.jpg",
    alt: "Single exposure interior with lifted contrast and clean window light",
  },
  {
    id: "p-single-4",
    title: "Natural Daylight Color Calibration",
    category: "Single Image",
    description: "Color temperature calibrated to true daylight, with cleaned highlights and faithful material tones.",
    image: "/images/single-image/single-sample-4-after.jpg",
    alt: "Single frame real estate interior with daylight color calibration",
  },
  {
    id: "p-single-5",
    title: "Single Image Window Pull & Finish",
    category: "Single Image",
    description: "Window exterior pulled in from a single exposure using mask-based brightness and ambient tone balancing.",
    image: "/images/single-image/single-sample-5-after.jpg",
    alt: "Single-exposure interior with clear window pull and balanced finish",
  },
  {
    id: "p1",
    title: "Panoramic Living Room Exposure Balancing",
    category: "HDR",
    description: "Multi-exposure bracket blending balancing harsh exterior daylight with ambient indoor illumination.",
    image: "/images/hdr/hdr-sample-1-after.jpg",
    alt: "Spacious luxury living room with balanced window lighting and true-to-life tones",
  },
  {
    id: "p-d2n-1",
    title: "Mid-Century Modern Villa at Dusk",
    category: "Day to Night",
    description: "Day-to-night conversion featuring deep dusk skies and illuminated architectural windows.",
    image: "/images/day-to-twilight/twilight-sample-1-after.jpg",
    alt: "Contemporary residential exterior at dusk with warm interior lighting",
  },
  {
    id: "p-twi-1",
    title: "Atmospheric Twilight Estate Facade",
    category: "Twilight",
    description: "Golden hour and dusk polish enriching ambient lantern glows and vibrant sky gradients.",
    image: "/images/day-to-twilight/twilight-sample-2-after.jpg",
    alt: "Suburban residence exterior at twilight with lit landscape lights",
  },
  {
    id: "p-hdr-2",
    title: "Architectural Interior & Window Pull",
    category: "HDR",
    description: "Balanced dynamic range preserving delicate textures, floor timber reflections, and clear window scenery.",
    image: "/images/hdr/hdr-sample-2-after.jpg",
    alt: "Luxury interior with natural window views and crisp architectural finishes",
  },
  {
    id: "p3",
    title: "Open Living Suite Contemporary Staging",
    category: "Staging",
    description: "Vacant space digitally styled with modern sectional sofa, contemporary rug, coffee table, and art.",
    image: "/images/virtual-staging/staging-sample-1-after.jpg",
    alt: "Architectural living space staged with modern Scandinavian furniture",
  },
  {
    id: "p-stage-2",
    title: "Modern Scandinavian Lounge Staging",
    category: "Staging",
    description: "Unfurnished contemporary interior decorated with plush seating, ambient illumination, and curated textures.",
    image: "/images/virtual-staging/staging-sample-2-after.jpg",
    alt: "Contemporary room staged with Scandinavian furnishings and ambient lighting",
  },
  {
    id: "p-stage-3",
    title: "Sunlit Dining & Living Lounge Staging",
    category: "Staging",
    description: "Hardwood open area enhanced with designer dining table, comfortable armchairs, and pendant fixture.",
    image: "/images/virtual-staging/staging-sample-3-after.jpg",
    alt: "Sunlit dining and lounge interior staged with modern dining suite",
  },
  {
    id: "p-stage-4",
    title: "Master Bedroom Suite Staging",
    category: "Staging",
    description: "Bare bedroom realistically dressed with plush king bed, nightstands, and soft ambient bedside lighting.",
    image: "/images/virtual-staging/staging-sample-4-after.jpg",
    alt: "Cozy master bedroom suite staged with bed, pillows, lamps, and art",
  },
  {
    id: "p-hdr-3",
    title: "Shadow Recovery & True-Tone Lighting",
    category: "HDR",
    description: "Lifting deep room shadows and neutralizing color casts while preserving contrast and crisp textures.",
    image: "/images/hdr/hdr-sample-3-after.jpg",
    alt: "High dynamic range room photograph with illuminated shadows and vibrant textures",
  },
  {
    id: "p-rem-1",
    title: "Exterior Distraction & Clutter Removal",
    category: "Item Removal",
    description: "Seamless erasure of unwanted objects and distractions with natural texture reconstruction.",
    image: "/images/object-removal/removal-sample-1-after.jpg",
    alt: "Property exterior cleaned of distractions with seamless retouching",
  },
  {
    id: "p-rem-2",
    title: "Interior Object & Reflection Cleanup",
    category: "Item Removal",
    description: "Reflective markers and interior clutter cleanly removed while preserving surface detail and lighting.",
    image: "/images/object-removal/removal-sample-2-after.jpg",
    alt: "Interior scene with objects seamlessly removed and textures preserved",
  },
  {
    id: "p-aer-1",
    title: "Aerial Drone Haze Removal & Color Pop",
    category: "Aerial",
    description: "Atmospheric haze cut, saturation lifted, and horizon straightened for a crisp overhead presentation.",
    image: "/images/aerial/aerial-sample-1-after.jpg",
    alt: "Clear aerial drone photograph with vivid landscape color and leveled horizon",
  },
  {
    id: "p-aer-2",
    title: "Aerial Landscape Clarity & Horizon Correction",
    category: "Aerial",
    description: "Washed sky and soft tones replaced with vibrant greenery, defined horizon, and natural sunlight.",
    image: "/images/aerial/aerial-sample-2-after.jpg",
    alt: "Aerial drone photograph with vibrant greenery and corrected horizon",
  },
  {
    id: "p-hdr-4",
    title: "Natural Ambient Daylight Balancing",
    category: "HDR",
    description: "Harmonizing multiple natural and artificial light sources for an inviting, realistic property view.",
    image: "/images/hdr/hdr-sample-4-after.jpg",
    alt: "Open-plan property interior with crisp whites and vivid outdoor window views",
  },
  {
    id: "p-hdr-5",
    title: "High Dynamic Range Room Balancing",
    category: "HDR",
    description: "Highlight recovery revealing outdoor greenery and sky without darkening delicate indoor finishes.",
    image: "/images/hdr/hdr-sample-5-after.jpg",
    alt: "Expertly graded HDR finish showcasing full spatial clarity and accurate surface tones",
  },
  {
    id: "p-hdr-6",
    title: "Complete Exposure & Perspective Alignment",
    category: "HDR",
    description: "Flawless window pulling, wall leveling, and shadow tone balancing for editorial-level presentation.",
    image: "/images/hdr/hdr-sample-6-after.jpg",
    alt: "Final retouched HDR photograph ready for high-end MLS and print presentation",
  },
  {
    id: "p-vid-1",
    title: "Real Estate Promotional Walkthrough",
    category: "Video",
    description: "Cinematic property promotional reel with smooth stabilization, speed ramping, and branded lower-thirds.",
    image: "/images/hdr/hdr-sample-1-after.jpg",
    alt: "Real Estate Promotional Walkthrough video preview frame",
    isVideo: true,
    videoDuration: "1:05",
    videoSrc: "/videos/real-estate-promo.mp4",
  },
  {
    id: "p-vid-2",
    title: "Photo Animation & 3D Motion Effects",
    category: "Video",
    description: "Dynamic parallax photo animation bringing static photographs to life with cinematic camera depth.",
    image: "/images/day-to-twilight/twilight-sample-1-after.jpg",
    alt: "Photo Animation and 3D Motion Effects preview frame",
    isVideo: true,
    videoDuration: "0:45",
    videoSrc: "/videos/photo-animation-effects.mp4",
  },
  {
    id: "p-vid-3",
    title: "Luxury Interior Walkthrough Tour 1",
    category: "Video",
    description: "Complete interior stabilized gimbal tour with natural lighting correction and ambient flow.",
    image: "/images/virtual-staging/staging-sample-1-after.jpg",
    alt: "Luxury Interior Walkthrough Tour preview frame",
    isVideo: true,
    videoDuration: "1:30",
    videoSrc: "/videos/sample-1.mp4",
  },
  {
    id: "p-vid-4",
    title: "Architectural Property Tour 2",
    category: "Video",
    description: "Multi-room architectural showcase with smooth gimbal pans, room speedramps, and clean cuts.",
    image: "/images/hdr/hdr-sample-2-after.jpg",
    alt: "Architectural Property Tour preview frame",
    isVideo: true,
    videoDuration: "1:15",
    videoSrc: "/videos/sample-3.mp4",
  },
  {
    id: "p-vid-5",
    title: "Modern Residence Walkthrough",
    category: "Video",
    description: "Showcase combining indoor lifestyle spaces and outdoor living zones into a cohesive marketing video.",
    image: "/images/virtual-staging/staging-sample-2-after.jpg",
    alt: "Modern Residence Walkthrough preview frame",
    isVideo: true,
    videoDuration: "1:20",
    videoSrc: "/videos/sample-4.mp4",
  },
  {
    id: "p-vid-6",
    title: "Full Property Showcase Flow Reel",
    category: "Video",
    description: "High-impact highlight reel showcasing exterior grounds, living zones, and luxury property finishes.",
    image: "/images/day-to-twilight/twilight-sample-2-after.jpg",
    alt: "Full Property Showcase Flow Reel preview frame",
    isVideo: true,
    videoDuration: "1:10",
    videoSrc: "/videos/sample-6.mp4",
  },
];

const categories = [
  "All Work",
  "Single Image",
  "HDR",
  "Day to Night",
  "Twilight",
  "Staging",
  "Video",
  "Item Removal",
  "Aerial",
];

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = items.filter(
    (item) => activeCategory === "All Work" || item.category === activeCategory
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") {
        setSelectedIndex((current) => (current === null ? null : (current + 1) % filteredItems.length));
      }
      if (e.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null ? null : (current - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex, filteredItems.length]);

  return (
    <div className="portfolio-showcase">
      <div className="portfolio-filter-row" role="tablist" aria-label="Filter portfolio categories">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            type="button"
            className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
            aria-selected={activeCategory === cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-grid-layout">
        {filteredItems.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            className="portfolio-card"
            onClick={() => setSelectedIndex(idx)}
            aria-label={`Open preview for ${item.title}`}
          >
            <div className="portfolio-thumb-wrap">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 33vw"
                className="portfolio-thumb-img"
              />
              {item.isVideo && (
                <div className="portfolio-video-badge" aria-label="Video item">
                  <Play size={16} fill="currentColor" />
                  <span>{item.videoDuration}</span>
                </div>
              )}
            </div>
            <div className="portfolio-meta">
              <span className="portfolio-badge">{item.category}</span>
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-desc">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && filteredItems[selectedIndex] && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Media preview lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-media-box">
              {filteredItems[selectedIndex].isVideo && filteredItems[selectedIndex].videoSrc ? (
                <video
                  key={filteredItems[selectedIndex].videoSrc}
                  src={filteredItems[selectedIndex].videoSrc}
                  controls
                  autoPlay
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    backgroundColor: "#000",
                  }}
                />
              ) : (
                <Image
                  src={filteredItems[selectedIndex].image}
                  alt={filteredItems[selectedIndex].alt}
                  fill
                  sizes="95vw"
                  priority
                />
              )}
            </div>

            <div className="lightbox-details">
              <div className="lightbox-text">
                <span className="portfolio-badge">{filteredItems[selectedIndex].category}</span>
                <h4>{filteredItems[selectedIndex].title}</h4>
                <p>{filteredItems[selectedIndex].description}</p>
              </div>

              <div className="lightbox-actions">
                <button
                  type="button"
                  className="lightbox-nav-btn"
                  onClick={() =>
                    setSelectedIndex(
                      (selectedIndex - 1 + filteredItems.length) % filteredItems.length
                    )
                  }
                  aria-label="Previous item"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="lightbox-counter">
                  {selectedIndex + 1} / {filteredItems.length}
                </span>
                <button
                  type="button"
                  className="lightbox-nav-btn"
                  onClick={() =>
                    setSelectedIndex((selectedIndex + 1) % filteredItems.length)
                  }
                  aria-label="Next item"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Close modal preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
