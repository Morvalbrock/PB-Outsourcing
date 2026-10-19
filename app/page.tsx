import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowDownRight,
  CheckCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { FAQAccordion } from "@/components/faq-accordion";
import { PortfolioGallery } from "@/components/portfolio-gallery";

const heroImage =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85";
const trustImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85";

export default function HomePage() {
  return (
    <>
      {/* SECTION 2: HERO */}
      <section className="hero-section container">
        <div className="hero-headline-block">
          <h1 className="hero-main-title">
            <span>Every Property Deserves</span><br />
            <span>Its Best Picture.</span>
          </h1>
        </div>

        <div className="hero-split-grid">
          <div className="hero-content-column">
            <p className="hero-support-copy">
              Professional real estate photo editing, virtual staging, floor plans, and video
              solutions designed to make property listings stand out across online marketplaces and editorial features.
            </p>

            <div className="hero-cta-group">
              <Link className="button button-accent" href="/contact">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
              <Link className="button button-secondary" href="/portfolio">
                Explore Our Work <ArrowDownRight size={16} />
              </Link>
            </div>

            <div className="hero-value-pills">
              <span className="value-pill">
                <CheckCircle size={15} /> Professional Quality
              </span>
              <span className="value-pill">
                <CheckCircle size={15} /> Reliable Turnaround
              </span>
              <span className="value-pill">
                <CheckCircle size={15} /> Scalable Editing Support
              </span>
            </div>
          </div>

          <div className="hero-visual-column">
            <div className="hero-photo-frame">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={heroImage}
                className="hero-video-loop"
                aria-label="Contemporary luxury residential architectural property tour"
              >
                <source
                  src="https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-panoramic-view-40742-large.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="hero-visual-tag">
                <Sparkles size={16} />
                <span>Balanced exposure, perspective, and twilight conversion</span>
              </div>
            </div>
            <div className="hero-scroll-indicator">
              <span>Scroll to explore visual solutions</span>
              <span aria-hidden="true">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: TRUST AND VALUE PROPOSITION */}
      <section className="trust-strip-section">
        <div className="container trust-split-layout">
          <div className="trust-narrative-copy">
            <h2 className="section-title">Your Creative Editing Partner.</h2>
            <p>
              We help property professionals present every space with clarity, consistency,
              and visual impact. From individual luxury shoots to continuous agency volume, our post-production process is calibrated for architectural authenticity.
            </p>
            <div className="trust-photo-card">
              <Image
                src={trustImage}
                alt="Architectural living space with balanced daylight and natural finishes"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="trust-audiences-stack">
            <div className="trust-audience-item">
              <h3>Real Estate Photographers</h3>
              <p>
                High-volume bracket blending, window pulling, and color balancing so you can shoot more and edit less.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Property Agencies</h3>
              <p>
                Consistent visual polish across all residential and commercial portfolios to strengthen brand presentation.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Real Estate Marketing Teams</h3>
              <p>
                Ready-to-publish digital staging, floor plans, and social video reels calibrated for high engagement.
              </p>
            </div>

            <div className="trust-audience-item">
              <h3>Property Developers</h3>
              <p>
                Architectural renderings, 3D furnished spatial plans, and twilight conversions for pre-sale launches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="services-overview-section container" id="services">
        <div className="section-header-block">
          <div>
            <h2 className="section-title">
              <span>Complete Visual Solutions</span><br />
              <span>for Real Estate.</span>
            </h2>
          </div>
          <p className="section-lead-paragraph">
            From polished property photographs to immersive floor plans and cinematic videos,
            bring every property to life with professional visual editing.
          </p>
        </div>

        <div className="services-bento-grid">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={`service-bento-card ${index === 0 || index === 6 ? "featured-card" : ""}`}
            >
              <div className="service-bento-media">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="service-bento-body">
                <h3 className="service-bento-title">{service.title}</h3>
                <p className="service-bento-copy">{service.shortDescription}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="service-explore-action"
                  aria-label={`Explore ${service.title}`}
                >
                  <span>Explore Service</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 5: BEFORE-AND-AFTER TRANSFORMATION */}
      <section className="transformation-section" id="comparison">
        <div className="container transformation-grid">
          <div className="transformation-copy-column">
            <h2 className="section-title text-light">See the Difference.</h2>
            <p className="transformation-lead-text">
              Small details create a stronger first impression. Explore how professional editing
              transforms property photography by comparing original exposures against finished visual assets.
            </p>

            <div className="transformation-perks-list">
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>Exposure window recovery with natural lighting balancing</span>
              </div>
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>Atmospheric sunset sky and warm architectural lighting</span>
              </div>
              <div className="transformation-perk-item">
                <span className="perk-bullet" />
                <span>Digitally furnished staging highlighting room potential</span>
              </div>
            </div>

            <div className="transformation-cta-wrap">
              <Link className="button button-accent" href="/contact">
                Request a Custom Transformation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="transformation-widget-column">
            <BeforeAfterSlider initialPresetId="hdr" showSelector={true} />
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED PORTFOLIO */}
      <section className="featured-portfolio-section container" id="portfolio">
        <div className="section-header-block">
          <div>
            <h2 className="section-title">Visual Quality You Can See.</h2>
          </div>
          <p className="section-lead-paragraph">
            Explore examples of the transformations possible across property photography and real
            estate visual media.
          </p>
        </div>

        <PortfolioGallery />
      </section>

      {/* SECTION 7: WHY CHOOSE PB OUTSOURCING? */}
      <section className="why-us-section">
        <div className="container why-us-split-layout">
          <div className="why-us-lead-box">
            <h2 className="section-title">Built Around Your Workflow.</h2>
            <p>
              Professional editing support designed to fit the way real estate photography
              businesses work. We prioritize consistent deliverables, dependable communication, and flexible turnaround schedules.
            </p>
            <Link href="/contact" className="button button-primary">
              Discuss Your Workflow <ArrowRight size={16} />
            </Link>
          </div>

          <div className="why-us-benefits-matrix">
            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Consistent Quality</h3>
              <p className="why-benefit-text">
                Maintain a polished, cohesive look across your property image collections with strict color management.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Reliable Delivery</h3>
              <p className="why-benefit-text">
                Keep projects moving with a clear editing workflow, agreed delivery targets, and dependable communication.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Flexible Capacity</h3>
              <p className="why-benefit-text">
                Get editing support for individual projects or larger property image collections without overhead constraints.
              </p>
            </div>

            <div className="why-benefit-item">
              <h3 className="why-benefit-title">Clear Communication</h3>
              <p className="why-benefit-text">
                Share project requirements and receive updates through a straightforward service process via direct messaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: HOW IT WORKS */}
      <section className="process-timeline-section container" id="process">
        <div className="section-header-block">
          <div>
            <h2 className="section-title">
              <span>From Raw Images</span><br />
              <span>to Ready-to-Use Visuals.</span>
            </h2>
          </div>
          <p className="section-lead-paragraph">
            A transparent four-stage pipeline designed for simplicity, speed, and exact creative alignment.
          </p>
        </div>

        <div className="process-horizontal-grid">
          <div className="process-stage-item">
            <span className="process-stage-badge">Consultation</span>
            <h3 className="process-stage-title">Share Your Project</h3>
            <p className="process-stage-desc">
              Tell us which services you need and share your requirements, reference styles, or listing notes.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">Transfer</span>
            <h3 className="process-stage-title">Send Your Files</h3>
            <p className="process-stage-desc">
              Provide your property photographs, footage, floor plan requirements, or reference material via cloud link.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">Refinement</span>
            <h3 className="process-stage-title">Editing & Review</h3>
            <p className="process-stage-desc">
              Our editing workflow focuses on consistency, presentation, and your specified creative instructions.
            </p>
          </div>

          <div className="process-stage-item">
            <span className="process-stage-badge">Completion</span>
            <h3 className="process-stage-title">Final Delivery</h3>
            <p className="process-stage-desc">
              Receive the completed deliverables formatted for MLS, social media, and high-resolution print marketing.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9: CUSTOMER TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header-block">
            <div>
              <h2 className="section-title">Quality That Supports Your Business.</h2>
            </div>
            <p className="section-lead-paragraph">
              Feedback from photographers and property marketing agencies who rely on our visual services.
            </p>
          </div>

          <div className="testimonials-cards-grid">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="testimonial-quote-card">
                <p className="quote-text">&ldquo;{t.quote}&rdquo;</p>
                <footer className="quote-author-footer">
                  <div className="author-avatar-initials">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="author-details-column">
                    <cite className="author-name">{t.name}</cite>
                    <span className="author-role">{t.role}</span>
                    <span className="author-agency">{t.location}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="testimonials-demo-notice">
            <p>
              Sample client feedback placeholder for preview purposes. Actual client references available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="faq-section container" id="faq">
        <div className="faq-layout-split">
          <div className="faq-intro-column">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-intro-text">
              Clear answers on how we collaborate with real estate photographers, agencies, and marketing teams worldwide.
            </p>
            <div className="faq-support-box">
              <span className="faq-box-title">Have a specific question?</span>
              <p>Our editing team is ready to discuss your specific camera profiles and turnarounds.</p>
              <a href="tel:+919944310379" className="faq-phone-link">
                <Phone size={15} /> +91 99443 10379
              </a>
            </div>
          </div>

          <div className="faq-accordion-column">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CALL TO ACTION */}
      <section className="final-cta-section">
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <h2 className="section-title text-light">
              Ready to Make Every Property Stand Out?
            </h2>
            <p className="final-cta-text">
              Tell us about your project and discover how professional real estate visual editing
              can support your business.
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
    </>
  );
}
