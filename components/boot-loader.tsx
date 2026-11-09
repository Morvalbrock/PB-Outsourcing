"use client";

import { useEffect, useState } from "react";
import { FullScreenLoader } from "./loader";

const FADE_MS = 400;
const SETTLE_MS = 450;

export function BootLoader() {
  const [stage, setStage] = useState<"mount" | "ready" | "gone">("mount");

  useEffect(() => {
    const readyTimer = window.setTimeout(() => setStage("ready"), SETTLE_MS);
    return () => window.clearTimeout(readyTimer);
  }, []);

  useEffect(() => {
    if (stage !== "ready") return;
    const unmountTimer = window.setTimeout(() => setStage("gone"), FADE_MS);
    return () => window.clearTimeout(unmountTimer);
  }, [stage]);

  if (stage === "gone") return null;

  return (
    <div
      className={`boot-loader-shell ${stage === "ready" ? "boot-loader-fading" : ""}`}
      aria-hidden={stage === "ready"}
    >
      <FullScreenLoader />
    </div>
  );
}
