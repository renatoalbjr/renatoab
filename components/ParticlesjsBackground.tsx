import { NextComponentType } from "next";
import Script from "next/script";
import initParticles from "../utils/particlesWrapper";

const ParticlesjsBackground: NextComponentType = () => {
  return (
    <>
      <Script
        src="/particles.min.js"
        id="particles"
        onLoad={() =>
          initParticles({
            selector: ".particlesBackground",
            connectParticles: true,
            color: ["#FFFFFF"],
            minDistance: 120,
          })
        }
      />
      <canvas className="particlesBackground fixed -z-10 w-screen h-screen">
        Background
      </canvas>
    </>
  );
};
export default ParticlesjsBackground;
