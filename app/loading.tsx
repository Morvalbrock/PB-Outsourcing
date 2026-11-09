import { ApertureLoader } from "@/components/loader";

export default function Loading() {
  return (
    <div className="route-loader" role="status" aria-label="Loading the next page">
      <ApertureLoader size={56} />
      <span className="route-loader-text" aria-hidden="true">
        Preparing your view
      </span>
    </div>
  );
}
