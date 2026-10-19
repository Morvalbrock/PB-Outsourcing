"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

type Props = { before: string; after: string };

export function BeforeAfterSlider({ before, after }: Props) {
  const [split, setSplit] = useState(50);
  return (
    <div className="before-after" style={{ "--split": `${split}%` } as React.CSSProperties}>
      <div className="before-after-image"><Image src={before} alt="Example property image before editing" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
      <div className="before-after-image before-after-after"><Image src={after} alt="Example property image after editing" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
      <span className="before-after-label before-label">BEFORE</span><span className="before-after-label after-label">AFTER</span>
      <div className="before-after-divider" aria-hidden="true" /><div className="before-after-handle" aria-hidden="true"><ArrowLeftRight size={18} /></div>
      <input className="before-after-range" type="range" min="0" max="100" value={split} onChange={(event) => setSplit(Number(event.target.value))} aria-label="Compare before and after images" />
    </div>
  );
}
