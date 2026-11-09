import { Aperture } from "lucide-react";

type ApertureLoaderProps = {
  size?: number;
  label?: string;
};

export function ApertureLoader({ size = 48, label }: ApertureLoaderProps) {
  const accessibleLabel = label ?? "Loading";
  return (
    <span
      className="aperture-loader"
      role="status"
      aria-label={accessibleLabel}
      style={{ width: size, height: size }}
    >
      <Aperture size={size} strokeWidth={1.5} aria-hidden="true" />
      <span className="aperture-pixel" aria-hidden="true" />
    </span>
  );
}

type FullScreenLoaderProps = {
  label?: string;
  showWordmark?: boolean;
};

export function FullScreenLoader({
  label = "Loading ClearPixelImages",
  showWordmark = true,
}: FullScreenLoaderProps) {
  return (
    <div className="page-loader-overlay" role="status" aria-label={label}>
      <ApertureLoader size={64} label={label} />
      {showWordmark && (
        <span className="page-loader-text" aria-hidden="true">
          ClearPixelImages
        </span>
      )}
    </div>
  );
}
