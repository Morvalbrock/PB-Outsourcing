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
            <Link className="brand-logo footer-logo" href="/" aria-label="ClearPixelImages home">
              <span className="brand-mark footer-brand-mark">
                <span className="brand-letters">CPI</span>
                <span className="brand-frame-line" aria-hidden="true" />
              </span>
              <span className="brand-text-group">
                <span className="brand-name text-light">CLEARPIXELIMAGES</span>
                <span className="brand-sub text-muted">PHOTO & VIDEO EDITING</span>
              </span>
            </Link>
            <p className="footer-about-copy">
              Professional visual editing solutions: Single Image, HDR, Day-to-Night, Twilight, Virtual Staging, Video Editing, Clipping Path, Item Removal, Wedding Photo Editing, and Aerial Drone enhancements.
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
              <li><Link href="/services">All Services (10)</Link></li>
              <li><Link href="/HDR">HDR Showcase</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Request a Quote</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Our Services</span>
            <ul className="footer-link-list">
              <li><Link href="/services#single-image">1. Single Image</Link></li>
              <li><Link href="/HDR">2. HDR Photo Editing</Link></li>
              <li><Link href="/services#day-to-night">3. Day to Night</Link></li>
              <li><Link href="/services#twilight">4. Twilight / Dusk</Link></li>
              <li><Link href="/services#virtual-staging">5. Virtual Staging</Link></li>
              <li><Link href="/services#video-editing">6. Video Editing</Link></li>
              <li><Link href="/services#clipping-path">7. Clipping Path</Link></li>
              <li><Link href="/services#item-removal">8. Item & Object Removal</Link></li>
              <li><Link href="/services#wedding-image-editing">9. Wedding Image Editing</Link></li>
              <li><Link href="/services#aerial-drone">10. Aerial & Drone</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Production Details</span>
            <p className="footer-detail-note">
              High-volume post-production studio delivering consistent color grading, sub-pixel bracket blending, hand-drawn vector clipping paths, and emotion-driven wedding retouching.
            </p>
            <div className="footer-support-hours">
              <span className="status-indicator-dot" />
              <span>Direct production coordination via phone & WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p suppressHydrationWarning>© {new Date().getFullYear()} ClearPixelImages. All rights reserved.</p>
          <div className="footer-legal-links">
            <span className="legal-placeholder-link">Privacy Policy</span>
            <span className="legal-separator">·</span>
            <span className="legal-placeholder-link">Terms of Service</span>
            <span className="legal-separator">·</span>
            <span>ClearPixelImages Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
