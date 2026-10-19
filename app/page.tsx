import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { BeforeAfterSlider } from "@/components/before-after-slider";

const heroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85";
const beforeImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80";
const afterImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80";

export default function HomePage() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> REAL ESTATE VISUAL SOLUTIONS</p>
          <h1>Every property deserves its <em>best picture.</em></h1>
          <p className="hero-description">
            Professional photo editing, virtual staging, floor plans and video
            solutions designed to make property listings stand out.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="/contact">Get a free quote <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="/portfolio">Explore our work <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-points">
            <span><Check size={15} /> Professional quality</span>
            <span><Check size={15} /> Reliable communication</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image src={heroImage} alt="Bright contemporary residential interior" fill priority sizes="(max-width: 800px) 100vw, 55vw" className="cover-image" />
            <div className="image-tag"><Sparkles size={15} /> Thoughtful editing. Better first impressions.</div>
          </div>
          <div className="hero-index"><span>01</span><span className="index-line" /><span>VISUAL QUALITY</span></div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <p>YOUR CREATIVE EDITING PARTNER</p>
          <h2>Helping property professionals present every space with clarity, consistency and impact.</h2>
          <span className="strip-mark">PB.</span>
        </div>
      </section>

      <section className="section container" id="services">
        <div className="section-heading">
          <div><p className="eyebrow">WHAT WE DO</p><h2>Complete visual solutions<br />for real estate.</h2></div>
          <p className="section-intro">From polished property photographs to immersive floor plans and cinematic videos, bring every property to life.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <Link href="/services" className={`service-card ${index === 6 ? "service-card-featured" : ""}`} key={service.title}>
              <div className="service-number">0{index + 1}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-link">Explore service <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="comparison-section">
        <div className="container comparison-layout">
          <div className="comparison-copy">
            <p className="eyebrow eyebrow-light">THE POWER OF PROFESSIONAL EDITING</p>
            <h2>See the difference<br /><em>in every detail.</em></h2>
            <p>Thoughtful editing helps interiors feel balanced, exteriors feel inviting, and property details stand out.</p>
            <Link className="button button-light" href="/portfolio">Explore the portfolio <ArrowRight size={17} /></Link>
            <p className="demo-note">Demo comparison UI — replace with a genuine matching before-and-after image pair.</p>
          </div>
          <BeforeAfterSlider before={beforeImage} after={afterImage} />
        </div>
      </section>

      <section className="section container portfolio-preview">
        <div className="section-heading">
          <div><p className="eyebrow">SELECTED VISUALS</p><h2>Visual quality<br />you can see.</h2></div>
          <Link href="/portfolio" className="text-link">View portfolio <ArrowRight size={17} /></Link>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-tile portfolio-tile-large">
            <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Contemporary living room" fill sizes="(max-width: 700px) 100vw, 60vw" className="cover-image" />
            <span className="portfolio-label">INTERIOR ENHANCEMENT</span>
          </div>
          <div className="portfolio-tile">
            <Image src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85" alt="Modern residential exterior" fill sizes="(max-width: 700px) 100vw, 35vw" className="cover-image" />
            <span className="portfolio-label">PROPERTY PHOTOGRAPHY</span>
          </div>
          <div className="portfolio-tile">
            <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85" alt="Warm, staged living space" fill sizes="(max-width: 700px) 100vw, 35vw" className="cover-image" />
            <span className="portfolio-label">VIRTUAL STAGING STYLE</span>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">A SIMPLE PROCESS</p><h2>From raw images<br />to ready-to-use visuals.</h2></div>
            <p className="section-intro">A straightforward workflow keeps your project clear from the first conversation to final delivery.</p>
          </div>
          <div className="process-grid">
            {[
              ["01", "Share your project", "Tell us about your property, editing needs and creative direction."],
              ["02", "Send your files", "Provide your photographs, footage or floor plan requirements."],
              ["03", "Editing & review", "Your requirements guide the editing and quality review process."],
              ["04", "Final delivery", "Receive completed files through the agreed delivery method."],
            ].map(([number, title, description]) => (
              <div className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta container">
        <div>
          <p className="eyebrow">LET&apos;S WORK TOGETHER</p>
          <h2>Ready to make every<br />property stand out?</h2>
          <p>Tell us about your project and let&apos;s discuss the right visual solution.</p>
        </div>
        <div className="cta-actions">
          <Link href="/contact" className="button button-primary">Request a free quote <ArrowRight size={17} /></Link>
          <a href="tel:+919944310379" className="phone-link">Call +91 99443 10379</a>
        </div>
      </section>
    </>
  );
}
