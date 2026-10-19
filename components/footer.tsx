import Link from "next/link";
import { Phone, MessageSquare, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-strip">
          <div className="footer-cta-headline">
            <p className="footer-lead-text">
              Let&apos;s build a reliable visual editing pipeline for your property business.
            </p>
          </div>
          <div className="footer-top-actions">
            <Link href="/contact" className="button button-accent">
              Let&apos;s Work Together <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="footer-columns-grid">
          <div className="footer-brand-column">
            <Link className="brand-logo footer-logo" href="/" aria-label="PB Outsourcing home">
              <span className="brand-mark footer-brand-mark">
                <span className="brand-letters">PB</span>
                <span className="brand-frame-line" aria-hidden="true" />
              </span>
              <span className="brand-text-group">
                <span className="brand-name text-light">PB OUTSOURCING</span>
                <span className="brand-sub text-muted">REAL ESTATE VISUALS</span>
              </span>
            </Link>
            <p className="footer-about-copy">
              Professional real estate photo editing and visual media solutions for property professionals, photographers, agencies, and developers.
            </p>
            <div className="footer-direct-contact">
              <a href="tel:+919944310379" className="footer-contact-item">
                <Phone size={15} />
                <span>+91 99443 10379</span>
              </a>
              <a
                href="https://wa.me/919944310379"
                target="_blank"
                rel="noreferrer"
                className="footer-contact-item"
              >
                <MessageSquare size={15} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Navigation</span>
            <ul className="footer-link-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Request a Quote</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Visual Services</span>
            <ul className="footer-link-list">
              <li><Link href="/services#colour-correction">Colour Correction</Link></li>
              <li><Link href="/services#hdr-photo-editing">HDR Photo Editing</Link></li>
              <li><Link href="/services#photo-retouching">Photo Retouching</Link></li>
              <li><Link href="/services#day-to-night-conversion">Day-to-Night Conversion</Link></li>
              <li><Link href="/services#virtual-home-staging">Virtual Home Staging</Link></li>
              <li><Link href="/services#floor-plans">2D & 3D Floor Plans</Link></li>
              <li><Link href="/services#real-estate-video-editing">Real Estate Video Editing</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Production Details</span>
            <p className="footer-detail-note">
              Dedicated visual post-production supporting high-dynamic range interior photography, dusk conversions, 3D floor plan drafting, and cinematic property film mastering.
            </p>
            <div className="footer-support-hours">
              <span className="status-indicator-dot" />
              <span>Direct production coordination via phone & WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p suppressHydrationWarning>© {new Date().getFullYear()} PB Outsourcing. All rights reserved.</p>
          <div className="footer-legal-links">
            <span className="legal-placeholder-link">Privacy Policy</span>
            <span className="legal-separator">·</span>
            <span className="legal-placeholder-link">Terms of Service</span>
            <span className="legal-separator">·</span>
            <span>Real Estate Visual Outsourcing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
