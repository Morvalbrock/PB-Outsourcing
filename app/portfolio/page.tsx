import Image from "next/image";
import { PortfolioGallery } from "@/components/portfolio-gallery";

export const metadata = {
  title: "Portfolio | PB Outsourcing",
  description: "Explore real estate photography and visual editing examples.",
};

export default function PortfolioPage() {
  return (
    <section className="container page-shell">
      <p className="eyebrow">SELECTED WORK</p>
      <h1 className="page-title">Visual quality<br /><em>you can see.</em></h1>
      <p className="page-lead">A selection of property visual styles and editing categories. Replace these demonstration assets with approved client work.</p>
      <PortfolioGallery />
      <p className="demo-note portfolio-note">Images are illustrative placeholders, not verified PB Outsourcing client projects.</p>
    </section>
  );
}
