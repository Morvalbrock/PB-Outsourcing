import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | PB Outsourcing",
  description: "Explore PB Outsourcing's real estate photo editing and visual media services.",
};

export default function ServicesPage() {
  return (
    <section className="container page-shell">
      <p className="eyebrow">OUR CAPABILITIES</p>
      <h1 className="page-title">Professional visuals.<br /><em>Thoughtfully finished.</em></h1>
      <p className="page-lead">Explore our real estate editing services, designed to help property professionals present every space at its best.</p>
      <div className="service-detail-list">
        {services.map((service, index) => (
          <article className="service-detail" key={service.title}>
            <div className="service-detail-image">
              <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 800px) 100vw, 50vw" className="cover-image" />
            </div>
            <div className="service-detail-copy">
              <p className="eyebrow">SERVICE 0{index + 1}</p>
              <h2>{service.title}</h2><p>{service.longDescription}</p>
              <ul>{service.benefits.map((benefit) => <li key={benefit}><Check size={16} />{benefit}</li>)}</ul>
              <Link href="/contact" className="text-link">Request a quote <ArrowRight size={17} /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
