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
};

const items: PortfolioItem[] = [
  {
    id: "p-single-1",
    title: "Kitchen & Dining Neutral Balance",
    category: "Single Image",
    description: "Neutral daylight white balance removing yellow tungsten casts on stone countertops.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Architectural kitchen with balanced daylight",
  },
  {
    id: "p1",
    title: "Panoramic Living Room Exposure Balancing",
    category: "HDR",
    description: "Multi-exposure bracket blending balancing harsh exterior daylight with ambient indoor illumination.",
    image: "/HDR/After.jpg",
    alt: "Spacious luxury living room with balanced window lighting and true-to-life tones",
  },
  {
    id: "p-d2n-1",
    title: "Mid-Century Modern Villa at Dusk",
    category: "Day to Night",
    description: "Day-to-night conversion featuring deep dusk skies and illuminated architectural windows.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary residential exterior at dusk with warm interior lighting",
  },
  {
    id: "p-twi-1",
    title: "Atmospheric Twilight Estate Facade",
    category: "Twilight",
    description: "Golden hour and dusk polish enriching ambient lantern glows and vibrant sky gradients.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    alt: "Suburban residence exterior at twilight with lit landscape lights",
  },
  {
    id: "p-hdr-2",
    title: "Architectural Interior & Window Pull",
    category: "HDR",
    description: "Balanced dynamic range preserving delicate textures, floor timber reflections, and clear window scenery.",
    image: "/HDR/After1.jpg",
    alt: "Luxury interior with natural window views and crisp architectural finishes",
  },
  {
    id: "p3",
    title: "Scandinavian Staged Open-Plan Suite",
    category: "Staging",
    description: "Vacant space digitally furnished with contemporary sectional, rugs, and botanical accents.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    alt: "Architectural living space staged with modern Scandinavian furniture",
  },
  {
    id: "p-clip-1",
    title: "Designer Armchair Vector Cutout",
    category: "Clipping Path",
    description: "Hand-crafted vector pen-tool clipping path for e-commerce catalog isolation.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=85",
    alt: "Designer furniture cleanly isolated with clipping path",
  },
  {
    id: "p-hdr-3",
    title: "Shadow Recovery & True-Tone Lighting",
    category: "HDR",
    description: "Lifting deep room shadows and neutralizing color casts while preserving contrast and crisp textures.",
    image: "/HDR/After2.jpg",
    alt: "High dynamic range room photograph with illuminated shadows and vibrant textures",
  },
  {
    id: "p-rem-1",
    title: "Suburban Residence Wire & Distraction Removal",
    category: "Item Removal",
    description: "Retouching removing overhead wires, driveway stains, bins, and refining curb appeal.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
    alt: "Clean residential facade with manicured lawn and clear blue sky",
  },
  {
    id: "p-wed-1",
    title: "Bridal Portrait & Golden Hour Color Grade",
    category: "Wedding",
    description: "Warm editorial color toning, delicate gown lace retention, and gentle skin glow retouching.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
    alt: "Bride and groom in natural golden hour light with romantic artistic color grading",
  },
  {
    id: "p-aer-1",
    title: "Coastal Waterfront Estate Aerial Drone",
    category: "Aerial",
    description: "Atmospheric haze removal, vibrant ocean saturation, and horizon leveling from 200ft altitude.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85",
    alt: "Elevated aerial drone perspective of luxury waterfront property",
  },
  {
    id: "p-hdr-4",
    title: "Natural Ambient Daylight Balancing",
    category: "HDR",
    description: "Harmonizing multiple natural and artificial light sources for an inviting, realistic property view.",
    image: "/HDR/After3.jpg",
    alt: "Open-plan property interior with crisp whites and vivid outdoor window views",
  },
  {
    id: "p-hdr-5",
    title: "High Dynamic Range Room Balancing",
    category: "HDR",
    description: "Highlight recovery revealing outdoor greenery and sky without darkening delicate indoor finishes.",
    image: "/HDR/After4.jpg",
    alt: "Expertly graded HDR finish showcasing full spatial clarity and accurate surface tones",
  },
  {
    id: "p-hdr-6",
    title: "Complete Exposure & Perspective Alignment",
    category: "HDR",
    description: "Flawless window pulling, wall leveling, and shadow tone balancing for editorial-level presentation.",
    image: "/HDR/After5.jpg",
    alt: "Final retouched HDR photograph ready for high-end MLS and print presentation",
  },
  {
    id: "p7",
    title: "Cinematic Estate Walkthrough Tour",
    category: "Video",
    description: "Smooth gimbal walkthrough sequence with speed ramps and subtle ambient sound design.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
    alt: "Cinematic real estate video preview frame of modern property",
    isVideo: true,
    videoDuration: "1:45",
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
  "Clipping Path",
  "Item Removal",
  "Wedding",
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
          aria-label="Image preview lightbox"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-media-box">
              <Image
                src={filteredItems[selectedIndex].image}
                alt={filteredItems[selectedIndex].alt}
                fill
                sizes="95vw"
                priority
              />
              {filteredItems[selectedIndex].isVideo && (
                <div className="lightbox-video-overlay">
                  <span className="lightbox-play-circle">
                    <Play size={28} fill="currentColor" />
                  </span>
                  <p>Sample real estate video preview clip</p>
                </div>
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
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="lightbox-counter">
                  {selectedIndex + 1} / {filteredItems.length}
                </span>
                <button
                  type="button"
                  className="lightbox-nav-btn"
                  onClick={() => setSelectedIndex((selectedIndex + 1) % filteredItems.length)}
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  type="button"
                  className="lightbox-close-btn"
                  onClick={() => setSelectedIndex(null)}
                  aria-label="Close preview"
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
