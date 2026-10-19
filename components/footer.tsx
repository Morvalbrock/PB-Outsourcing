import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <span className="brand-mark">PB</span>
              <span className="brand-copy"><strong>PB Outsourcing</strong><small>REAL ESTATE VISUALS</small></span>
            </Link>
            <p className="footer-description">Real estate photo editing and visual media solutions for property professionals.</p>
          </div>
          <div className="footer-column"><h3>EXPLORE</h3><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/portfolio">Portfolio</Link><Link href="/about">About Us</Link><Link href="/contact">Contact</Link></div>
          <div className="footer-column"><h3>GET IN TOUCH</h3><a href="tel:+919944310379">+91 99443 10379</a><a href="https://wa.me/919944310379" target="_blank" rel="noreferrer">WhatsApp us</a><p>Have a project in mind?</p><Link href="/contact">Request a quote →</Link></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} PB Outsourcing. All rights reserved.</span><span>Made for better property visuals.</span></div>
      </div>
    </footer>
  );
}
