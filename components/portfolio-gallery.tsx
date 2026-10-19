"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { title: "Bright living space", category: "HDR Editing", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" },
  { title: "Modern exterior", category: "Day-to-Night", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" },
  { title: "Warm interior styling", category: "Virtual Staging", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" },
  { title: "Contemporary kitchen", category: "Colour Correction", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85" },
  { title: "Residential detail", category: "HDR Editing", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85" },
  { title: "Architectural living", category: "Video Editing", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85" },
];
const categories = ["All Work", "HDR Editing", "Colour Correction", "Day-to-Night", "Virtual Staging", "Video Editing"];

export function PortfolioGallery() {
  const [category, setCategory] = useState("All Work");
  const [selected, setSelected] = useState<number | null>(null);
  const visible = items.map((item, index) => ({ ...item, originalIndex: index })).filter((item) => category === "All Work" || item.category === category);

  useEffect(() => {
    if (selected === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((current) => current === null ? null : (current + 1) % items.length);
      if (event.key === "ArrowLeft") setSelected((current) => current === null ? null : (current - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selected]);

  return <>
    <div className="portfolio-filters" aria-label="Filter portfolio">
      {categories.map((item) => <button type="button" key={item} className={`filter-button ${category === item ? "active" : ""}`} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>)}
    </div>
    <div className="portfolio-gallery">
      {visible.map((item) => <button className="gallery-item" type="button" key={item.title} onClick={() => setSelected(item.originalIndex)} aria-label={`View ${item.title}`}>
        <span className="gallery-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw" className="cover-image" /></span>
        <span className="gallery-caption"><small>{item.category}</small><strong>{item.title}</strong></span>
      </button>)}
    </div>
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Portfolio image preview" onClick={() => setSelected(null)}>
      <div className="lightbox-inner" onClick={(event) => event.stopPropagation()}>
        <Image src={items[selected].image} alt={items[selected].title} fill sizes="90vw" />
        <button type="button" className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close preview"><X /></button>
        <button type="button" className="lightbox-prev" onClick={() => setSelected((selected - 1 + items.length) % items.length)} aria-label="Previous image"><ChevronLeft /></button>
        <button type="button" className="lightbox-next" onClick={() => setSelected((selected + 1) % items.length)} aria-label="Next image"><ChevronRight /></button>
      </div>
    </div>}
  </>;
}
