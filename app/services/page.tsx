import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { comparisons, hdrComparisons } from "@/data/comparisons";

export const metadata = {
  title: "Professional Photo & Visual Editing Services | ClearPixelImages",
  description:
    "Comprehensive visual solutions by ClearPixelImages: 1. Single Image, 2. HDR, 3. Day to Night, 4. Twilight, 5. Virtual Staging, 6. Video Editing, 7. Clipping Path, 8. Item Removal, 9. Wedding Image Editing, and 10. Aerial Drone Photo Editing.",
};

const comparisonPresetMap: Record<string, string> = {
  "single-image": "single-image",
  "hdr-photo-editing": "hdr-sample-1",
  "day-to-night": "day-to-night",
  "twilight": "twilight",
  "virtual-staging": "staging",
  "item-removal": "item-removal",
  "wedding-image-editing": "wedding",
  "aerial-drone": "aerial",
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      {/* SERVICES HERO */}
      <section className="page-hero-banner container">
        <h1 className="page-hero-title">
          Professional Photo & Visual Editing Services.
        </h1>
        <p className="page-hero-subtitle">
          From single-image exposure calibration to high-bracket HDR blending, virtual staging, wedding storytelling, and drone post-production.
          Explore our complete 10-service creative suite engineered for photographers, agencies, and studios worldwide.
        </p>

        {/* QUICK SERVICE PILLS */}
        <div className="hero-value-pills" style={{ marginTop: "24px" }}>
          <span className="value-pill"><CheckCircle2 size={15} /> 1. Single Image</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 2. HDR Editing</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 3. Day to Night</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 4. Twilight / Dusk</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 5. Virtual Staging</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 6. Video Editing</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 7. Clipping Path</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 8. Item Removal</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 9. Wedding Editing</span>
          <span className="value-pill"><CheckCircle2 size={15} /> 10. Aerial & Drone</span>
        </div>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="services-detailed-flow container">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          const comparisonPresetId = comparisonPresetMap[service.id];

          return (
            <article
              key={service.id}
              id={service.id}
              className={`service-detail-section ${isEven ? "reverse-layout" : ""}`}
            >
              {service.id === "hdr-photo-editing" && (
                <div className="hdr-service-top-strip">
                  <div className="hdr-top-badge-group">
                    <span className="about-tag">
                      <Sparkles size={14} /> Real Camera Brackets Showcase
                    </span>
                    <span className="hdr-top-subtext">
                      Compare all 6 real before &amp; after raw exposure transformations
                    </span>
                  </div>
                  <Link href="/HDR" className="button button-accent hdr-top-prominent-btn">
                    View All 6 Real HDR Samples <ArrowRight size={16} />
                  </Link>
                </div>
              )}

              <div className="service-media-pane">
                {comparisonPresetId ? (
                  <div className="service-embedded-slider">
                    <BeforeAfterSlider
                      initialPresetId={comparisonPresetId}
                      items={
                        service.id === "hdr-photo-editing"
                          ? hdrComparisons
                          : comparisons.filter((c) => c.id === comparisonPresetId)
                      }
                      showSelector={service.id === "hdr-photo-editing"}
                    />
                  </div>
                ) : (
                  <div className="service-large-photo">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="service-content-pane">
                <div className="service-content-header-row">
                  <span className="about-tag">
                    Service #{index + 1}
                  </span>
                  {service.id === "hdr-photo-editing" && (
                    <Link href="/HDR" className="hdr-top-link-chip">
                      View All 6 Real HDR Samples →
                    </Link>
                  )}
                </div>
                <h2 className="service-headline">{service.title}</h2>
                <p className="service-summary-text">{service.shortDescription}</p>
                <p className="service-extended-text">{service.fullDescription}</p>

                <div className="service-benefits-group">
                  <span className="benefits-group-title">Key Capabilities & Standards</span>
                  <ul className="benefits-checklist">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>
                        <CheckCircle2 size={16} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-cta-row">
                  <Link href="/contact" className="button button-accent">
                    Request a Quote for {service.title} <ArrowRight size={16} />
                  </Link>
                  {service.id === "hdr-photo-editing" && (
                    <Link href="/HDR" className="button button-secondary">
                      View All 6 Real HDR Samples <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* FINAL PAGE CTA */}
      <section className="final-cta-section">
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <h2 className="section-title text-light">
              Ready to Outsource Your Photo & Video Editing?
            </h2>
            <p className="final-cta-text">
              Partner with ClearPixelImages for scalable turnaround, strict color management, and dedicated post-production across all 10 service categories.
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
