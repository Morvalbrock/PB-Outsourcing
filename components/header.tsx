"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link
          className="brand-logo"
          href="/"
          aria-label="PB Outsourcing homepage"
          onClick={() => setIsOpen(false)}
        >
          <span className="brand-mark">
            <span className="brand-letters">PB</span>
            <span className="brand-frame-line" aria-hidden="true" />
          </span>
          <span className="brand-text-group">
            <span className="brand-name">PB OUTSOURCING</span>
            <span className="brand-sub">REAL ESTATE VISUALS</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? "active" : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href="tel:+919944310379"
            className="header-phone-action"
            aria-label="Direct phone line"
          >
            <Phone size={14} />
            <span>+91 99443 10379</span>
          </a>
          <Link href="/contact" className="button button-accent header-cta">
            Get a Free Quote
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-drawer" role="dialog" aria-label="Mobile navigation menu">
          <nav className="mobile-drawer-nav">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link ${pathname === link.href ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mobile-drawer-footer">
            <Link
              href="/contact"
              className="button button-accent mobile-drawer-btn"
              onClick={() => setIsOpen(false)}
            >
              Get a Free Quote
            </Link>
            <div className="mobile-drawer-contacts">
              <a href="tel:+919944310379" className="mobile-contact-pill">
                <Phone size={14} /> +91 99443 10379
              </a>
              <a
                href="https://wa.me/919944310379"
                target="_blank"
                rel="noreferrer"
                className="mobile-contact-pill"
              >
                <MessageSquare size={14} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
