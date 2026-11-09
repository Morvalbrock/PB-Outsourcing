"use client";

import { useState } from "react";
import { Check, Clapperboard } from "lucide-react";

export type VideoSample = {
  id: string;
  title: string;
  label: string;
  src: string;
  poster: string;
  duration: string;
  description: string;
};

export const sampleVideos: VideoSample[] = [
  {
    id: "promo",
    title: "Real Estate Promotional Walkthrough",
    label: "Promo Reel",
    src: "/sample-video/real-estate-promo.mp4",
    poster: "/HDR/After.jpg",
    duration: "1:05",
    description: "Cinematic real estate marketing promo featuring dynamic transitions, speed ramps, and architectural pacing.",
  },
  {
    id: "animation",
    title: "Photo Animation & 3D Motion Effects",
    label: "Photo Motion",
    src: "/sample-video/photo-animation-effects.mp4",
    poster: "/day-to-twilight/twilight-sample-1-after.jpg",
    duration: "0:45",
    description: "Dynamic parallax photo animation bringing static photographs to life with cinematic camera depth.",
  },
  {
    id: "sample-1",
    title: "Luxury Interior Walkthrough Tour",
    label: "Tour 1",
    src: "/sample-video/sample-1.mp4",
    poster: "/virtual-staging/staging-sample-1-after.jpg",
    duration: "1:30",
    description: "Complete interior stabilized gimbal tour with natural lighting correction and ambient flow.",
  },
  {
    id: "sample-3",
    title: "Architectural Property Tour 2",
    label: "Tour 2",
    src: "/sample-video/sample-3.mp4",
    poster: "/HDR/After1.jpg",
    duration: "1:15",
    description: "Multi-room architectural showcase with smooth gimbal pans, room speedramps, and clean cuts.",
  },
  {
    id: "sample-4",
    title: "Modern Residence Walkthrough",
    label: "Tour 3",
    src: "/sample-video/sample-4.mp4",
    poster: "/virtual-staging/staging-sample-2-after.jpg",
    duration: "1:20",
    description: "Showcase combining indoor lifestyle spaces and outdoor living zones into a cohesive marketing video.",
  },
  {
    id: "sample-6",
    title: "Full Property Showcase Flow Reel",
    label: "Flow Reel",
    src: "/sample-video/sample-6.mp4",
    poster: "/day-to-twilight/twilight-sample-2-after.jpg",
    duration: "1:10",
    description: "High-impact highlight reel showcasing exterior grounds, living zones, and luxury property finishes.",
  },
];

export function ServiceVideoPlayer() {
  const [activeVideo, setActiveVideo] = useState<VideoSample>(sampleVideos[0]);

  return (
    <div className="service-video-widget">
      {/* TABS */}
      <div className="comparison-tabs" role="tablist" aria-label="Sample Video selector">
        {sampleVideos.map((video) => (
          <button
            key={video.id}
            type="button"
            role="tab"
            className={`comparison-tab-btn ${activeVideo.id === video.id ? "active" : ""}`}
            aria-selected={activeVideo.id === video.id}
            onClick={() => setActiveVideo(video)}
          >
            <span>{video.label}</span>
            {activeVideo.id === video.id && <Check size={14} aria-hidden="true" />}
          </button>
        ))}
      </div>

      {/* VIDEO CONTAINER */}
      <div className="service-video-frame">
        <video
          key={activeVideo.src}
          controls
          playsInline
          poster={activeVideo.poster}
          className="service-video-element"
          preload="metadata"
        >
          <source src={activeVideo.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="service-video-badge">
          <Clapperboard size={14} />
          <span>{activeVideo.duration}</span>
        </div>
      </div>

      {/* CAPTION */}
      <div className="comparison-caption">
        <strong>{activeVideo.title}</strong>
        <p>{activeVideo.description}</p>
      </div>
    </div>
  );
}
