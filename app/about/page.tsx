import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us | PB Outsourcing",
  description: "Learn about PB Outsourcing's real estate visual editing services and workflow.",
};

export default function AboutPage() {
  return (
    <section className="container page-shell about-page">
      <p className="eyebrow">ABOUT PB OUTSOURCING</p>
      <h1 className="page-title">Your partner in<br /><em>property visual excellence.</em></h1>
      <p className="page-lead">PB Outsourcing supports property professionals with real estate photo editing and visual media services designed around clear requirements and consistent presentation.</p>
      <div className="about-panel">
        <div><p className="eyebrow">OUR APPROACH</p><h2>Good visuals begin with a thoughtful process.</h2></div>
        <div className="about-points">
          {["Understand each project's requirements", "Focus on visual consistency and clarity", "Communicate clearly throughout the workflow", "Agree on deliverables before work begins"].map((item) => <p key={item}><CheckCircle2 size={18} />{item}</p>)}
        </div>
      </div>
      <div className="about-bottom"><p>Have a project in mind? Let&apos;s discuss the service and workflow that fit your needs.</p><Link href="/contact" className="button button-primary">Contact us <ArrowRight size={17} /></Link></div>
    </section>
  );
}
