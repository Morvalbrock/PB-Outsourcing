"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, UploadCloud, CheckCircle2, Phone, MessageSquare, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      setErrorMessage("Please complete all required fields with valid details.");
      return;
    }

    setIsSubmitting(true);

    // Simulate polite asynchronous submission handling for visual prototype demonstration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      form.reset();
      setSelectedFileName(null);
    }, 700);
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFileName(event.target.files[0].name);
    }
  }

  return (
    <div className="contact-form-wrapper">
      {isSubmitted ? (
        <div className="form-feedback-card" role="status" aria-live="polite">
          <div className="feedback-icon-box">
            <CheckCircle2 size={36} />
          </div>
          <h3>UI Prototype Demonstration</h3>
          <p className="feedback-lead">
            Thank you for exploring the ClearPixelImages quote workflow!
          </p>
          <div className="feedback-disclaimer-box">
            <p>
              <strong>Notice:</strong> This interface is an interactive design prototype. No backend server or email endpoint is currently attached, so your input has not been saved or transmitted.
            </p>
          </div>
          <p className="feedback-direct-prompt">
            To discuss a live visual editing project or request an actual quote, please connect with ClearPixelImages directly:
          </p>
          <div className="feedback-quick-actions">
            <a href="tel:+919944310379" className="button button-primary">
              <Phone size={16} /> Call +91 99443 10379
            </a>
            <a
              href="https://wa.me/919944310379"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              <MessageSquare size={16} /> Message on WhatsApp
            </a>
          </div>
          <button
            type="button"
            className="button button-tertiary"
            onClick={() => setIsSubmitted(false)}
          >
            Reset Form Demo
          </button>
        </div>
      ) : (
        <form className="quote-form-panel" onSubmit={handleSubmit} noValidate={false}>
          <div className="form-header-area">
            <h2>Request a Project Quote</h2>
            <p>
              Fill out your property visual requirements below and our team will outline service recommendations.
            </p>
          </div>

          {errorMessage && (
            <div className="form-alert-banner" role="alert">
              <AlertCircle size={18} />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="form-fields-grid">
            <div className="input-field-group">
              <label htmlFor="fullName">Full Name *</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Sarah Jenkins"
                required
                autoComplete="name"
              />
            </div>

            <div className="input-field-group">
              <label htmlFor="businessName">Business Name (optional)</label>
              <input
                id="businessName"
                name="businessName"
                type="text"
                placeholder="e.g. Coastal Sotheby's or Studio Media"
                autoComplete="organization"
              />
            </div>

            <div className="input-field-group">
              <label htmlFor="emailAddress">Email Address *</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="name@business.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="input-field-group">
              <label htmlFor="contactPhone">Contact Number *</label>
              <input
                id="contactPhone"
                name="contactPhone"
                type="tel"
                placeholder="+1 555 019 2834"
                required
                autoComplete="tel"
              />
            </div>

            <div className="input-field-group span-full">
              <label htmlFor="serviceCategory">Service Required *</label>
              <select id="serviceCategory" name="serviceCategory" required defaultValue="">
                <option value="" disabled>Select the primary visual service</option>
                <option value="single-image">1. Single Image Editing</option>
                <option value="hdr-photo-editing">2. HDR Photo Editing</option>
                <option value="day-to-night">3. Day-to-Night Conversion</option>
                <option value="twilight">4. Twilight / Dusk Enhancement</option>
                <option value="virtual-staging">5. Virtual Staging</option>
                <option value="video-editing">6. Video Editing</option>
                <option value="clipping-path">7. Clipping Path (Cutout)</option>
                <option value="item-removal">8. Item & Object Removal (Declutter)</option>
                <option value="wedding-image-editing">9. Wedding Image Editing</option>
                <option value="aerial-drone">10. Aerial & Drone Photo Editing</option>
                <option value="multiple-services">Multiple Services (Combined Package)</option>
                <option value="other">Other Custom Visual Service</option>
              </select>
            </div>

            <div className="input-field-group">
              <label htmlFor="projectVolume">Estimated Volume *</label>
              <select id="projectVolume" name="projectVolume" required defaultValue="">
                <option value="" disabled>Select image / video volume</option>
                <option value="1-10">1 to 10 images</option>
                <option value="11-30">11 to 30 images</option>
                <option value="31-60">31 to 60 images</option>
                <option value="60-plus">60+ images (Bulk)</option>
                <option value="video-project">Property Video walkthrough</option>
                <option value="floorplan-project">Floor Plan schematic</option>
              </select>
            </div>

            <div className="input-field-group">
              <label htmlFor="timeline">Preferred Delivery Timeline *</label>
              <select id="timeline" name="timeline" required defaultValue="">
                <option value="" disabled>Select expected timeline</option>
                <option value="standard">Standard turnaround</option>
                <option value="urgent">Prompt delivery</option>
                <option value="scheduled">Scheduled recurring pipeline</option>
                <option value="flexible">Flexible / Exploratory</option>
              </select>
            </div>

            <div className="input-field-group span-full">
              <label htmlFor="projectDescription">Project Description & Instructions *</label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={4}
                placeholder="Describe the property style, specific elements to enhance or remove, desired twilight mood, or cloud link (Google Drive, Dropbox, WeTransfer)..."
                required
              />
            </div>

            <div className="input-field-group span-full">
              <label>Reference Files or Sample Images (Design Prototype)</label>
              <div className="upload-dropzone-box">
                <input
                  type="file"
                  id="sampleUpload"
                  className="upload-native-input"
                  onChange={handleFileChange}
                  aria-label="Upload reference files placeholder"
                />
                <label htmlFor="sampleUpload" className="upload-visual-label">
                  <UploadCloud size={24} />
                  <span>
                    {selectedFileName ? (
                      <strong>Selected: {selectedFileName}</strong>
                    ) : (
                      <>
                        <strong>Choose sample files</strong> or drop them here (Preview placeholder)
                      </>
                    )}
                  </span>
                  <small>Accepts JPG, PNG, RAW, MP4, or PDF (UI demo only)</small>
                </label>
              </div>
            </div>
          </div>

          <div className="form-consent-box">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>
                I agree that ClearPixelImages may use these submitted details to prepare and send a service quote.
              </span>
            </label>
          </div>

          <div className="form-footer-actions">
            <button
              type="submit"
              className="button button-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Submit Quote Request"}
              <ArrowRight size={16} />
            </button>
            <p className="form-disclaimer-note">
              Notice: UI demonstration prototype. For immediate production inquiries, call +91 99443 10379.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
