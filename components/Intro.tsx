import { NextComponentType, NextPageContext } from "next";
import Script from "next/script";
import { HTMLProps } from "react";
import initParticles from "../utils/particlesWrapper";

interface props extends HTMLProps<HTMLElement> {}

const Intro: NextComponentType<NextPageContext, props, props> = ({
  className,
  ...rest
}: props) => {
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
      <header
        className={"mx-24 my-auto w-full bg-transparent relative " + className}
        {...rest}
      >
        <h1
          className={
            "font-title text-4xl text-white " +
            "after:absolute after:w-full after:rounded-full after:h-1 after:bg-primary after:block after:mt-6 "
          }
        >
          Hi, I&apos;m <span className="text-primary">Renato</span>,<br />a
          Software Developer.
        </h1>
        <p className="font-body text-white text-lg font-normal mt-[3.25rem]">
          Here you can learn more about me and check out the projects in my
          portfolio.
        </p>
        <a
          href="#Portfolio"
          className="btn btn-outline btn-primary rounded-full text-lg font-medium font-title mt-8 h-fit py-4 px-8"
        >
          Portfolio
        </a>
      </header>
      <canvas className="background absolute -z-10 left-0">Background</canvas>
    </>
  );
};

export default Intro;
