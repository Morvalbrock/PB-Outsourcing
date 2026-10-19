import { ContactForm } from "@/components/contact-form";
import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";

export const metadata = {
  title: "Contact | PB Outsourcing",
  description: "Contact PB Outsourcing to discuss your real estate photo editing project.",
};

export default function ContactPage() {
  return (
    <section className="container page-shell contact-page">
      <p className="eyebrow">START A PROJECT</p>
      <h1 className="page-title">Tell us about<br /><em>your project.</em></h1>
      <p className="page-lead">Share a few details about your visual editing requirements. This starter form is a UI prototype and is not connected to a submission service yet.</p>
      <div className="contact-layout">
        <div className="contact-info">
          <h2>Let&apos;s talk visuals.</h2>
          <p>Call or message PB Outsourcing to discuss your project requirements.</p>
          <a className="contact-method" href="tel:+919944310379"><span><Phone size={19} /></span><div><small>CALL US</small><strong>+91 99443 10379</strong></div><ArrowUpRight size={17} /></a>
          <a className="contact-method" href="https://wa.me/919944310379" target="_blank" rel="noreferrer"><span><MessageCircle size={19} /></span><div><small>WHATSAPP</small><strong>Start a conversation</strong></div><ArrowUpRight size={17} /></a>
          <div className="contact-note"><p className="eyebrow">GOOD TO KNOW</p><p>It helps to include the service you need, approximate project volume, and any reference images or instructions.</p></div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
