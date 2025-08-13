import React from "react";
import Lottie from "lottie-react";
import farmerAnimation from "../assets/farmer.json";

const Background = ({ speed = 1, opacity = 1, blur = 0 }) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* soft gradient under animation */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(240,255,242,1) 0%, rgba(230,250,230,1) 50%, rgba(245,255,250,1) 100%)",
        }}
      />

      {/* grain/texture (optional subtle) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(0,0,0,0.02) 0.5px, transparent 0.5px)",
          backgroundSize: "6px 6px",
          mixBlendMode: "overlay",
        }}
      />

      {/* Lottie animation layer */}
      <div
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
        style={{ transform: "translateZ(0)" }}
      >
        <div style={{ width: "100%", maxWidth: 1400, opacity: 0.6, filter: `blur(${blur}px)` }}>
          <Lottie
            animationData={farmerAnimation}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "auto", display: "block" }}
            speed={speed}
          />
        </div>
      </div>

      {/* subtle bottom vignette for depth */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, rgba(0,0,0,0.06), rgba(0,0,0,0))",
        }}
      />
    </div>
  );
};

export default Background;
