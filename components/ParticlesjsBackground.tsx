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
            selector: ".background",
            connectParticles: true,
            color: ["#FFFFFF"],
            minDistance: 120,
          })
        }
      />
      <canvas className="background absolute -z-10 left-0">Background</canvas>
    </>
  );
};
export default ParticlesjsBackground;
