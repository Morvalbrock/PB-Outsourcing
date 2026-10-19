"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [error, setError] = useState("");
  const [showPrototype, setShowPrototype] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    // UI prototype only. Connect an API/email provider before accepting real enquiries.
    setShowPrototype(true);
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Request a quote</h2>
      <p className="form-intro">Tell us a little about what you need.</p>
      {error && <p className="form-message error" role="alert">{error}</p>}
      {showPrototype && <p className="form-message success" role="status">Prototype interaction only: this form is not connected to an enquiry service. Please call or WhatsApp +91 99443 10379 to contact the business.</p>}
      <div className="form-grid">
        <div className="form-field"><label htmlFor="name">Full name *</label><input id="name" name="name" placeholder="Your name" required autoComplete="name" /></div>
        <div className="form-field"><label htmlFor="business">Business name</label><input id="business" name="business" placeholder="Company (optional)" autoComplete="organization" /></div>
        <div className="form-field"><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" /></div>
        <div className="form-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" placeholder="Your contact number" autoComplete="tel" /></div>
        <div className="form-field full"><label htmlFor="service">Service required *</label><select id="service" name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Colour Correction</option><option>HDR Photo Editing</option><option>Photo Retouching</option><option>Day-to-Night Conversion</option><option>Virtual Home Staging</option><option>2D Floor Plans</option><option>3D Floor Plans</option><option>Real Estate Video Editing</option><option>Multiple Services</option><option>Other</option></select></div>
        <div className="form-field"><label htmlFor="volume">Estimated project volume</label><select id="volume" name="volume" defaultValue=""><option value="">Select volume</option><option>1–10 images</option><option>11–50 images</option><option>51–100 images</option><option>100+ images</option><option>Video or floor plan project</option></select></div>
        <div className="form-field"><label htmlFor="timeline">Preferred delivery timeline</label><select id="timeline" name="timeline" defaultValue=""><option value="">Select timeline</option><option>Flexible</option><option>As soon as possible</option><option>Discuss with me</option></select></div>
        <div className="form-field full"><label htmlFor="details">Project details *</label><textarea id="details" name="details" placeholder="Tell us about your property, requirements and reference material..." required /></div>
      </div>
      <label className="privacy-row"><input type="checkbox" required /> <span>I agree that my details may be used to respond to this enquiry. *</span></label>
      <button type="submit" className="button button-primary">Submit request <ArrowRight size={17} /></button>
      <p className="form-disclaimer">Prototype only: no data is sent or stored. Connect a secure form endpoint before publishing this form for real enquiries.</p>
    </form>
  );
}
