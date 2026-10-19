import { Phone, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Request a Quote & Contact | PB Outsourcing",
  description:
    "Get in touch with PB Outsourcing for real estate photo editing, virtual staging, twilight conversions, floor plans, and video editing. Call +91 99443 10379 or message on WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      {/* CONTACT HERO */}
      <section className="page-hero-banner container">
        <h1 className="page-hero-title">
          Tell Us About Your Project.
        </h1>
        <p className="page-hero-subtitle">
          Share your requirements and we&apos;ll have a clear starting point for discussing your project.
          Whether you need a single listing enhanced or an ongoing bulk pipeline, our visual team is ready to assist.
        </p>
      </section>

      {/* MAIN CONTACT LAYOUT */}
      <section className="contact-main-grid container">
        {/* LEFT COLUMN: CONTACT DETAILS & PERKS */}
        <div className="contact-details-column">
          <div className="contact-card-surface">
            <h2 className="contact-section-heading">Connect With Our Team</h2>
            <p className="contact-intro-text">
              Speak directly with our production coordinators for immediate quote estimations or custom workflow setups.
            </p>

            <div className="contact-buttons-stack">
              <a href="tel:+919944310379" className="direct-contact-tile">
                <span className="tile-icon-circle">
                  <Phone size={20} />
                </span>
                <span className="tile-text-group">
                  <small className="tile-label">DIRECT PHONE CALL</small>
                  <strong className="tile-value">+91 99443 10379</strong>
                </span>
              </a>

              <a
                href="https://wa.me/919944310379"
                target="_blank"
                rel="noreferrer"
                className="direct-contact-tile whatsapp-tile"
              >
                <span className="tile-icon-circle">
                  <MessageSquare size={20} />
                </span>
                <span className="tile-text-group">
                  <small className="tile-label">WHATSAPP CHAT</small>
                  <strong className="tile-value">Start Instant Conversation</strong>
                </span>
              </a>
            </div>

            <div className="contact-workflow-perks">
              <span className="perks-heading">What to Include for Faster Quotes</span>
              <ul className="perks-list">
                <li>
                  <CheckCircle2 size={16} />
                  <span>Number of RAW or bracketed image sets</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Required services (HDR, Twilight, Staging, Video)</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Desired delivery target date and time</span>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <span>Cloud link (Google Drive, Dropbox, WeTransfer)</span>
                </li>
              </ul>
            </div>

            <div className="contact-security-badge">
              <ShieldCheck size={20} />
              <span>All property files and proprietary imagery handled confidentially.</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE FORM */}
        <div className="contact-form-column">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
