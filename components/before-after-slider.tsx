"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";
import { ArrowLeftRight, Check, MoveHorizontal } from "lucide-react";
import { comparisons, ComparisonItem } from "@/data/comparisons";

interface BeforeAfterSliderProps {
  initialPresetId?: string;
  showSelector?: boolean;
  items?: ComparisonItem[];
  compact?: boolean;
}

export function BeforeAfterSlider({
  initialPresetId = "hdr",
  showSelector = true,
  items,
  compact = false,
}: BeforeAfterSliderProps) {
  const dataset = items && items.length > 0 ? items : comparisons;
  const [activePreset, setActivePreset] = useState<ComparisonItem>(
    () => dataset.find((c) => c.id === initialPresetId) || dataset[0]
  );
  const [split, setSplit] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isSmooth, setIsSmooth] = useState(false);
  const [hoverMove, setHoverMove] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const smoothTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const found = dataset.find((c) => c.id === initialPresetId) || dataset[0];
    setActivePreset(found);
    setSplit(50);
  }, [initialPresetId, dataset]);

  const triggerSmoothTransition = useCallback((targetSplit: number) => {
    setIsSmooth(true);
    setSplit(targetSplit);
    if (smoothTimerRef.current) clearTimeout(smoothTimerRef.current);
    smoothTimerRef.current = setTimeout(() => {
      setIsSmooth(false);
    }, 320);
  }, []);

  const updateSplitFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = Math.round((x / rect.width) * 100);
    setIsSmooth(false);
    setSplit(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    setIsDragging(true);
    setIsSmooth(false);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSplitFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateSplitFromClientX(e.clientX);
    } else if (hoverMove && e.pointerType === "mouse") {
      updateSplitFromClientX(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Ignored if capture already ended
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      triggerSmoothTransition(Math.max(0, split - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      triggerSmoothTransition(Math.min(100, split + 5));
    } else if (e.key === "Home") {
      e.preventDefault();
      triggerSmoothTransition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      triggerSmoothTransition(100);
    }
  };

  return (
    <div className={`comparison-widget ${compact ? "comparison-compact" : ""}`}>
      {showSelector && (
        <div className="comparison-tabs" role="tablist" aria-label="Comparison category presets">
          {dataset.map((item) => (
            <button
              key={item.id}
              role="tab"
              type="button"
              className={`comparison-tab-btn ${activePreset.id === item.id ? "active" : ""}`}
              aria-selected={activePreset.id === item.id}
              onClick={() => {
                setActivePreset(item);
                triggerSmoothTransition(50);
              }}
            >
              <span>{item.category}</span>
              {activePreset.id === item.id && <Check size={14} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}

      {/* INTERACTIVE DRAGGABLE IMAGE CONTAINER */}
      <div
        ref={containerRef}
        className={`before-after ${isDragging ? "is-dragging" : ""} ${
          isSmooth ? "is-smooth" : ""
        }`}
        style={{ "--split": `${split}%` } as React.CSSProperties}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        tabIndex={0}
        role="slider"
        aria-label={`Interactive before and after comparison slider for ${activePreset.title}`}
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

        {/* CORNER LABELS */}
        <span className="before-after-label before-label">BEFORE</span>
        <span className="before-after-label after-label">AFTER</span>

        {/* MOVABLE DIVIDER LINE */}
        <div className="before-after-divider" aria-hidden="true" />

        {/* MOVABLE CENTRAL HANDLE */}
        <div className="before-after-handle" aria-hidden="true">
          <ArrowLeftRight size={18} />
          <span className="handle-tag">SLIDE</span>
        </div>

        {/* BOTTOM ACTIVE SPLIT INDICATOR */}
        <div className="before-after-badge" aria-hidden="true">
          <span>Reveal:</span>
          <span className="active-pct">{split}% After</span>
          <span>·</span>
          <span>{100 - split}% Before</span>
        </div>
      </div>

      {/* USER-FRIENDLY MOVABLE CONTROLS TOOLBAR */}
      <div className="slider-toolbar">
        <div className="slider-toolbar-main">
          {/* QUICK 1-CLICK PRESET BUTTONS */}
          <div className="slider-quick-group" role="group" aria-label="Quick jump positions">
            <button
              type="button"
              className={`slider-quick-btn ${split === 0 ? "active" : ""}`}
              onClick={() => triggerSmoothTransition(0)}
              title="Show 100% Before"
            >
              100% Before
            </button>
            <button
              type="button"
              className={`slider-quick-btn ${split === 50 ? "active" : ""}`}
              onClick={() => triggerSmoothTransition(50)}
              title="Reset to 50/50 Split"
            >
              50:50
            </button>
            <button
              type="button"
              className={`slider-quick-btn ${split === 100 ? "active" : ""}`}
              onClick={() => triggerSmoothTransition(100)}
              title="Show 100% After"
            >
              100% After
            </button>
          </div>

          {/* DRAGGABLE RANGE TRACK */}
          <div className="slider-track-container">
            <input
              type="range"
              min={0}
              max={100}
              value={split}
              onChange={(e) => {
                setIsSmooth(false);
                setSplit(Number(e.target.value));
              }}
              className="slider-native-range"
              aria-label="Drag bar to adjust comparison split"
            />
          </div>

          {/* HOVER MOVE TOGGLE FOR DESKTOP */}
          <button
            type="button"
            className={`slider-hover-toggle-btn ${hoverMove ? "active" : ""}`}
            onClick={() => setHoverMove(!hoverMove)}
            title="When active, moving your mouse over the photo slides the divider without clicking"
          >
            <MoveHorizontal size={14} />
            <span>{hoverMove ? "Hover: ON" : "Hover: OFF"}</span>
          </button>
        </div>
      </div>

      {/* CAPTION */}
      <div className="comparison-caption">
        <strong>{activePreset.title}</strong>
        <p>{activePreset.description}</p>
      </div>
    </div>
  );
}
