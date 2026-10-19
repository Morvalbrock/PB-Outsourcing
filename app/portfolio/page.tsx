import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export const metadata = {
  title: "Portfolio & Visual Transformations | PB Outsourcing",
  description:
    "Explore real estate photo editing, HDR exposure balancing, day-to-night twilight transformations, virtual staging, 3D floor plans, and property video walkthroughs.",
};

export default function PortfolioPage() {
  return (
    <div className="page-wrapper">
      {/* PORTFOLIO HERO */}
      <section className="page-hero-banner container">
        <h1 className="page-hero-title">
          Explore Our Visual Transformations.
        </h1>
        <p className="page-hero-subtitle">
          Browse real estate image editing styles and property visualisation examples.
          Filter by service category, view before-and-after comparisons, and inspect high-resolution details in the interactive lightbox.
        </p>
      </section>

      {/* INTERACTIVE COMPARISON SPOTLIGHT */}
      <section className="portfolio-transformation-spotlight container">
        <div className="spotlight-header">
          <h2 className="section-title">Interactive Before & After Demonstration</h2>
          <p className="section-lead-paragraph">
            Drag the slider to examine how professional retouching balances indoor/outdoor exposures,
            converts day scenes to evening twilight, and digitally furnishes vacant spaces.
          </p>
        </div>

        <div className="spotlight-slider-container">
          <BeforeAfterSlider initialPresetId="hdr" showSelector={true} />
        </div>
      </section>

      {/* MAIN GALLERY SECTION */}
      <section className="portfolio-gallery-section container">
        <div className="gallery-header-row">
          <div>
            <h2 className="section-title">Project Gallery by Service Category</h2>
          </div>
          <p className="gallery-disclaimer-note">
            Sample demonstration images representing our editing standards. Replaceable with client-approved assets.
          </p>
        </div>

        <PortfolioGallery />
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="final-cta-section">
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <h2 className="section-title text-light">
              Have Property Images Ready for Review?
            </h2>
            <p className="final-cta-text">
              Send us a test image or your upcoming listing files to see our editing quality firsthand.
            </p>
          </div>

          <div className="final-cta-actions">
            <Link href="/contact" className="button button-accent cta-large-btn">
              Request a Free Quote <ArrowRight size={17} />
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
