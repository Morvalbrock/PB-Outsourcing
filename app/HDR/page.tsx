import type { Metadata } from "next";
import Link from "next/link";
import {
  Aperture,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Eye,
  Layers,
  Phone,
  SlidersHorizontal,
} from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { hdrComparisons } from "@/data/comparisons";

export const metadata: Metadata = {
  title: "HDR Photo Editing Showcase | Real Results & Before/Afters | ClearPixelImages",
  description:
    "Explore real estate HDR photo editing with authentic before-and-after transformations by ClearPixelImages. Multi-bracket exposure blending, window pulls, natural shadow recovery, and architectural color grading.",
};

export default function HDRPage() {
  return (
    <div className="page-wrapper">
      {/* 1. BREADCRUMBS & HERO */}
      <section className="page-hero-banner container hdr-page-hero">
        <div className="hdr-top-navigation-row">
          <nav className="hdr-breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href="/services">Services</Link>
            <ChevronRight size={14} />
            <span aria-current="page">HDR Photo Editing</span>
          </nav>

          <a href="#samples-grid" className="button button-accent hdr-top-view-btn">
            View All 6 Real HDR Samples <ArrowDown size={15} />
          </a>
        </div>

        <h1 className="page-hero-title">
          Real Estate HDR Photo Editing Showcase.
        </h1>
        <p className="page-hero-subtitle">
          Explore real before-and-after property photographs processed with our multi-exposure bracket blending technique.
          We balance extreme window contrast, recover deep interior shadows, and preserve authentic architectural finishes.
        </p>

        <div className="hero-cta-group" style={{ marginTop: "24px", marginBottom: "16px" }}>
          <a href="#samples-grid" className="button button-accent">
            View All 6 Real HDR Samples <ArrowDown size={16} />
          </a>
          <Link href="/contact" className="button button-secondary">
            Request Free HDR Test Edit <ArrowRight size={16} />
          </Link>
        </div>

        <div className="hero-value-pills" style={{ marginTop: "24px" }}>
          <span className="value-pill">
            <CheckCircle2 size={15} /> Multi-Bracket Blending
          </span>
          <span className="value-pill">
            <CheckCircle2 size={15} /> Clean Window Pulls
          </span>
          <span className="value-pill">
            <CheckCircle2 size={15} /> Natural Shadow Recovery
          </span>
          <span className="value-pill">
            <CheckCircle2 size={15} /> Perspective & Vertical Alignment
          </span>
        </div>
      </section>

      {/* 2. INTERACTIVE FEATURED SLIDER */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div className="section-header-block">
          <div>
            <span className="about-tag" style={{ marginBottom: "12px", display: "inline-block" }}>
              Interactive Inspection
            </span>
            <h2 className="section-title">Slide to Compare Raw Exposures vs. Finished HDR</h2>
          </div>
          <p className="section-lead-paragraph">
            Switch between the 6 real sample sets below to examine how our retouchers eliminate glare, pull natural exterior views, and illuminate interior textures.
          </p>
        </div>

        <div className="spotlight-slider-container">
          <BeforeAfterSlider items={hdrComparisons} initialPresetId="hdr-sample-1" showSelector={true} />
        </div>
      </section>

      {/* 3. ALL 6 REAL HDR TRANSFORMATION CARDS */}
      <section id="samples-grid" className="container" style={{ marginBottom: "96px", scrollMarginTop: "90px" }}>
        <div className="section-header-block">
          <div>
            <h2 className="section-title">All 6 Real HDR Transformations</h2>
          </div>
          <p className="section-lead-paragraph">
            Each property photo set features custom exposure balancing calibrated for MLS, luxury print media, and digital marketing.
          </p>
        </div>

        <div className="hdr-samples-grid">
          {hdrComparisons.map((sample, idx) => (
            <article key={sample.id} className="hdr-sample-card">
              <div className="hdr-sample-header">
                <div>
                  <span className="hdr-sample-number">Sample #{idx + 1}</span>
                  <h3 className="hdr-sample-title">{sample.title}</h3>
                </div>
              </div>
              <p className="hdr-sample-desc">{sample.description}</p>
              <div className="hdr-sample-slider-wrap">
                <BeforeAfterSlider
                  items={[sample]}
                  initialPresetId={sample.id}
                  showSelector={false}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. TECHNICAL PROCESS & METHODOLOGY */}
      <section className="about-capabilities-strip" style={{ marginBottom: "96px" }}>
        <div className="container">
          <div className="section-header-block text-center-block">
            <span className="about-tag" style={{ marginBottom: "12px", display: "inline-block" }}>
              Our Methodology
            </span>
            <h2 className="section-title">Why Our HDR Editing Outperforms Generic Automation</h2>
            <p className="section-lead-paragraph centered">
              Automated HDR software often creates unnatural halos, muddy shadows, and cartoonish saturation.
              Our retouchers balance technical science with human aesthetic judgment.
            </p>
          </div>

          <div className="capabilities-triad-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <div className="capability-column-card">
              <Aperture size={28} className="text-forest" style={{ marginBottom: "16px", color: "var(--green)" }} />
              <h3>Bracket Alignment & Ghosting Correction</h3>
              <p>
                We align multi-stop bracketed exposures with sub-pixel precision, correcting foliage movement outside windows and subtle camera vibrations.
              </p>
              <ul className="capability-bullet-list">
                <li>3 to 7 bracket merge support</li>
                <li>Handheld bracket stabilization</li>
                <li>Tree & curtain ghost removal</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <Eye size={28} className="text-forest" style={{ marginBottom: "16px", color: "var(--green)" }} />
              <h3>True Window Pulls & Glare Neutralization</h3>
              <p>
                Rather than muddy masking, we pull crystal clear glass views with accurate exterior color contrast, revealing pools, gardens, and blue skies.
              </p>
              <ul className="capability-bullet-list">
                <li>Glare and reflection softening</li>
                <li>True-to-life outdoor exposure</li>
                <li>Clean border edge definitions</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <SlidersHorizontal size={28} className="text-forest" style={{ marginBottom: "16px", color: "var(--green)" }} />
              <h3>Color Cast Neutralization & Material Realism</h3>
              <p>
                We remove unsightly yellow incandescent or blue daylight casts from walls and ceilings, keeping marble, timber, and painted surfaces pure.
              </p>
              <ul className="capability-bullet-list">
                <li>Accurate wood grain & stone tones</li>
                <li>Neutral ambient ceiling whites</li>
                <li>Ambient + speedlight harmonization</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <Layers size={28} className="text-forest" style={{ marginBottom: "16px", color: "var(--green)" }} />
              <h3>Perspective & Vertical Geometry Correction</h3>
              <p>
                Every interior and exterior shot undergoes vertical line leveling, wide-angle barrel distortion correction, and crop optimization.
              </p>
              <ul className="capability-bullet-list">
                <li>True 90° architectural verticals</li>
                <li>Wide-angle distortion removal</li>
                <li>High-resolution master export</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="final-cta-section">
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <h2 className="section-title text-light">
              Want to Test Our HDR Editing on Your Own Raw Brackets?
            </h2>
            <p className="final-cta-text">
              Send us a test set of 3 or 5 raw bracketed exposures. We&apos;ll edit them for free so you can evaluate our quality on your actual camera profiles.
            </p>
          </div>

          <div className="final-cta-actions">
            <Link href="/contact" className="button button-accent cta-large-btn">
              Request Free HDR Test Edit <ArrowRight size={17} />
            </Link>
            <a href="tel:+919944310379" className="phone-cta-link">
              <Phone size={16} /> Call +91 99443 10379
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
