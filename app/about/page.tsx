import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Users, Sparkles, Phone } from "lucide-react";

export const metadata = {
  title: "About Us | PB Outsourcing — Real Estate Visual Media Partner",
  description:
    "Learn about PB Outsourcing: our approach to real estate photo retouching, exposure balancing, quality control, and dedicated client collaboration.",
};

const aboutHeroImg =
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85";
const aboutWorkflowImg =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85";

export default function AboutPage() {
  return (
    <div className="page-wrapper">
      {/* 1. ABOUT HERO */}
      <section className="page-hero-banner container">
        <h1 className="page-hero-title">
          Your Partner in Property Visual Excellence.
        </h1>
        <p className="page-hero-subtitle">
          PB Outsourcing supports real estate professionals with thoughtful photo editing
          and visual media services tailored to the exacting demands of residential and commercial property marketing.
        </p>
      </section>

      {/* 2. COMPANY INTRODUCTION */}
      <section className="about-intro-split container">
        <div className="about-intro-text">
          <h2 className="section-title">Dedicated to Visual Clarity and Spatial Authenticity.</h2>
          <p className="about-body-paragraph">
            In competitive property markets, first impressions happen in seconds across online listings and editorial campaigns. PB Outsourcing was formed to solve a persistent bottleneck faced by real estate photographers, agencies, and developers: maintaining consistent, high-standard visual enhancement without sacrificing turnaround or shooting schedules.
          </p>
          <p className="about-body-paragraph">
            Rather than relying on harsh automatic filters, our post-production process combines technical color science with aesthetic nuance. We respect each property&apos;s architectural intent, enhancing natural light, textures, and spatial flow so buyers see spaces at their genuine best.
          </p>
          <div className="about-pillar-tags">
            <span className="about-tag">Natural Lighting Balance</span>
            <span className="about-tag">Authentic Material Tones</span>
            <span className="about-tag">Dedicated Art Direction</span>
          </div>
        </div>

        <div className="about-intro-image-box">
          <div className="about-image-frame">
            <Image
              src={aboutHeroImg}
              alt="Architectural residential facade illustrating thoughtful property presentation"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES & CAPABILITIES OVERVIEW */}
      <section className="about-capabilities-strip">
        <div className="container">
          <div className="section-header-block">
            <div>
              <h2 className="section-title">End-to-End Property Visual Media.</h2>
            </div>
            <p className="section-lead-paragraph">
              A comprehensive suite of visual post-production disciplines under one cohesive standard.
            </p>
          </div>

          <div className="capabilities-triad-grid">
            <div className="capability-column-card">
              <h3>Still Photography Enhancement</h3>
              <p>
                Exposure bracket blending, window pulling, true-to-life white balance, lawn restoration, sky enhancement, and discrete object removal for pristine interior and exterior photography.
              </p>
              <ul className="capability-bullet-list">
                <li>HDR exposure alignment</li>
                <li>Flash & ambient blending</li>
                <li>Lens distortion & perspective leveling</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <h3>Spatial & Twilight Visualisation</h3>
              <p>
                Transforming vacant, unfinished, or daytime spaces into evocative, high-converting marketing centerpieces through digital innovation.
              </p>
              <ul className="capability-bullet-list">
                <li>Realistic Day-to-Night (Twilight) conversions</li>
                <li>Architectural virtual room staging</li>
                <li>2D dimensional and 3D furnished floor plans</li>
              </ul>
            </div>

            <div className="capability-column-card">
              <h3>Cinematic Motion Post-Production</h3>
              <p>
                Turning raw drone and gimbal camera footage into polished walkthrough films designed to captivate buyers across websites and mobile feeds.
              </p>
              <ul className="capability-bullet-list">
                <li>Color grading matching still imagery</li>
                <li>Stabilization & speed-ramped transitions</li>
                <li>Branded titles and lower-third graphics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUALITY-FOCUSED WORKFLOW */}
      <section className="about-workflow-section container">
        <div className="workflow-split-layout">
          <div className="workflow-image-container">
            <div className="workflow-photo-frame">
              <Image
                src={aboutWorkflowImg}
                alt="Detailed interior property showcasing balanced contrast and clarity"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="workflow-steps-column">
            <h2 className="section-title">A Quality-Focused Editing Workflow.</h2>
            <p className="about-body-paragraph">
              Every photograph and floor plan follows calibrated multi-stage checks before delivery:
            </p>

            <div className="workflow-checklist">
              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Pre-Production Inspection</strong>
                  <p>Analyzing bracket alignment, dynamic range extremes, and client-specified notes.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Color Calibration & Tonal Uniformity</strong>
                  <p>Harmonizing white balance across hallways, living rooms, and exterior spaces.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Perspective & Horizon Precision</strong>
                  <p>Correcting wide-angle keystoning and vertical tilt for accurate architectural geometry.</p>
                </div>
              </div>

              <div className="workflow-point">
                <div className="workflow-point-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <strong>Final Resolution & Metadata Review</strong>
                  <p>Exporting print-ready 300 DPI masters alongside lightweight web and MLS variants.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLIENT COLLABORATION & WHY CHOOSE US */}
      <section className="about-collaboration-section">
        <div className="container">
          <div className="section-header-block text-center-block">
            <h2 className="section-title">Why Property Professionals Choose PB Outsourcing.</h2>
            <p className="section-subtitle centered">
              We treat post-production as a direct extension of your creative studio.
            </p>
          </div>

          <div className="collaboration-quad-grid">
            <div className="collab-feature-card">
              <ShieldCheck size={26} />
              <h3>Consistent Brand Style</h3>
              <p>We document your preferred color temperature, contrast levels, and sky styles to deliver uniform results across all shoots.</p>
            </div>

            <div className="collab-feature-card">
              <Clock size={26} />
              <h3>Dependable Turnarounds</h3>
              <p>Clear delivery schedules aligned with your listing timetables so agents can launch marketing campaigns on schedule.</p>
            </div>

            <div className="collab-feature-card">
              <Users size={26} />
              <h3>Direct Team Contact</h3>
              <p>Direct communication via phone and WhatsApp ensures immediate answers to urgent retouching adjustments.</p>
            </div>

            <div className="collab-feature-card">
              <Sparkles size={26} />
              <h3>Flexible Production Scale</h3>
              <p>Whether you require single listing enhancements or high-volume weekly processing, our production capacity scales to your schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION TO REQUEST A QUOTE */}
      <section className="final-cta-section">
        <div className="container final-cta-wrapper">
          <div className="final-cta-content">
            <h2 className="section-title text-light">
              Ready to Upgrade Your Property Imagery?
            </h2>
            <p className="final-cta-text">
              Reach out with your project requirements or send sample images for an introductory review.
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
