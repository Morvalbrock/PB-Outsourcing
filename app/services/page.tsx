import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { services } from "@/data/services";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export const metadata = {
  title: "Professional Real Estate Visual Editing Services | PB Outsourcing",
  description:
    "Comprehensive real estate visual solutions: Colour Correction, HDR Photo Editing, Photo Retouching, Day-to-Night Twilight Conversion, Virtual Staging, Floor Plans, and Video Editing.",
};

export default function ServicesPage() {
  return (
    <div className="page-wrapper">
      {/* SERVICES HERO */}
      <section className="page-hero-banner container">
        <h1 className="page-hero-title">
          Professional Real Estate Visual Editing Services.
        </h1>
        <p className="page-hero-subtitle">
          Everything you need to present properties with clarity, consistency, and visual appeal.
          Explore our seven core visual solutions designed specifically for property professionals.
        </p>
      </section>

      {/* DETAILED SERVICES LIST */}
      <section className="services-detailed-flow container">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;
          const hasComparison =
            service.id === "hdr-photo-editing" ||
            service.id === "day-to-night-conversion" ||
            service.id === "virtual-home-staging";

          return (
            <article
              key={service.id}
              id={service.id}
              className={`service-detail-section ${isEven ? "reverse-layout" : ""}`}
            >
              <div className="service-media-pane">
                {hasComparison ? (
                  <div className="service-embedded-slider">
                    <BeforeAfterSlider
                      initialPresetId={
                        service.id === "hdr-photo-editing"
                          ? "hdr"
                          : service.id === "day-to-night-conversion"
                          ? "twilight"
                          : "staging"
                      }
                      showSelector={false}
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
              Need Multiple Services for a New Property Listing?
            </h2>
            <p className="final-cta-text">
              We frequently bundle HDR interior/exterior editing with day-to-night twilight
              shots, virtual room staging, and accurate 2D/3D floor plans.
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
