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
    id: "p1",
    title: "Panoramic Penthouse Living Room",
    category: "HDR Editing",
    description: "Multi-exposure blending balancing direct coastal sunlight with interior timber details.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    alt: "Spacious luxury penthouse living area with balanced window lighting",
  },
  {
    id: "p2",
    title: "Mid-Century Modern Villa at Dusk",
    category: "Twilight",
    description: "Day-to-night conversion featuring deep dusk skies and illuminated architectural windows.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary residential exterior at dusk with warm interior lighting",
  },
  {
    id: "p3",
    title: "Scandinavian Staged Open-Plan Suite",
    category: "Virtual Staging",
    description: "Vacant space digitally furnished with contemporary sectional, rugs, and botanical accents.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    alt: "Architectural living space staged with modern Scandinavian furniture",
  },
  {
    id: "p4",
    title: "Minimalist Kitchen & Dining Pavilion",
    category: "Colour Correction",
    description: "Neutral white calibration eliminating yellow halogen casts on stone countertops.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    alt: "Crisp architectural kitchen with natural neutral tones",
  },
  {
    id: "p5",
    title: "Suburban Residence Exterior Polish",
    category: "Photo Retouching",
    description: "Retouching removing overhead wires, driveway stains, and refining curb appeal.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    alt: "Clean residential facade with manicured lawn and clear blue sky",
  },
  {
    id: "p6",
    title: "Architectural 3D Residential Layout",
    category: "Floor Plans",
    description: "Furnished spatial model highlighting open circulation and furniture clearances.",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
    alt: "Contemporary interior room illustrating floor plan flow",
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
  {
    id: "p8",
    title: "Master Bedroom Suite Retouch",
    category: "HDR Editing",
    description: "Fine detail retention on bedding textures with balanced outdoor terrace perspective.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1400&q=85",
    alt: "Luxury master bedroom with terrace view and balanced illumination",
  },
];

const categories = ["All Work", "HDR Editing", "Twilight", "Virtual Staging", "Floor Plans", "Video"];

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
