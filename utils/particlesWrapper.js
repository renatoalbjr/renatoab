export default function initParticles({
  selector,
  maxParticles = 100,
  sizeVariations = 3,
  connectParticles = false,
  speed = 0.5,
  color = ["#000000"],
  minDistance = 120,
}) {
  Particles.init({
    selector,
    maxParticles,
    sizeVariations,
    connectParticles,
    speed,
    color,
    minDistance,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: maxParticles,
          minDistance: Math.floor(minDistance / 1.375),
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: Math.floor(maxParticles / 1.55),
          minDistance: Math.floor(minDistance / 1.55),
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 0, // disables particles.js
        },
      },
    ],
  });
}
