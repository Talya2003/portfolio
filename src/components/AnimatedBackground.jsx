import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="animated-bg__base" />
      <div className="animated-bg__traces" />
      <div className="animated-bg__nodes" />
      <div className="animated-bg__pulse" />
      <div className="animated-bg__mist" />
    </div>
  );
}
