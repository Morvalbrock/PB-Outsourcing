"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";
import { ArrowLeftRight, Check } from "lucide-react";
import { comparisons, ComparisonItem } from "@/data/comparisons";

interface BeforeAfterSliderProps {
  initialPresetId?: string;
  showSelector?: boolean;
}

export function BeforeAfterSlider({
  initialPresetId = "hdr",
  showSelector = true,
}: BeforeAfterSliderProps) {
  const [activePreset, setActivePreset] = useState<ComparisonItem>(
    () => comparisons.find((c) => c.id === initialPresetId) || comparisons[0]
  );
  const [split, setSplit] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSplitFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setSplit(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSplitFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSplitFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if capture was already released
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSplit((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSplit((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="comparison-widget">
      {showSelector && (
        <div className="comparison-tabs" role="tablist" aria-label="Comparison category presets">
          {comparisons.map((item) => (
            <button
              key={item.id}
              role="tab"
              type="button"
              className={`comparison-tab-btn ${activePreset.id === item.id ? "active" : ""}`}
              aria-selected={activePreset.id === item.id}
              onClick={() => {
                setActivePreset(item);
                setSplit(50);
              }}
            >
              <span>{item.category}</span>
              {activePreset.id === item.id && <Check size={14} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}

      <div
        ref={containerRef}
        className="before-after"
        style={{ "--split": `${split}%` } as React.CSSProperties}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        tabIndex={0}
        role="slider"
        aria-label={`Before and after image comparison for ${activePreset.title}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={split}
        onKeyDown={handleKeyDown}
      >
        <div className="before-after-image before-after-before">
          <Image
            src={activePreset.beforeImage}
            alt={activePreset.beforeAlt}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            priority
          />
        </div>

        <div className="before-after-image before-after-after">
          <Image
            src={activePreset.afterImage}
            alt={activePreset.afterAlt}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            priority
          />
        </div>

        <span className="before-after-label before-label">BEFORE</span>
        <span className="before-after-label after-label">AFTER</span>

        <div className="before-after-divider" aria-hidden="true" />
        <div className="before-after-handle" aria-hidden="true">
          <ArrowLeftRight size={18} />
        </div>
      </div>

      <div className="comparison-caption">
        <strong>{activePreset.title}</strong>
        <p>{activePreset.description}</p>
      </div>
    </div>
  );
}
