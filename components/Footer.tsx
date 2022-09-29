import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";

interface props extends HTMLProps<HTMLDivElement> {}

const Footer: NextComponentType<NextPageContext, props, props> = () => {
  return (
    <div className="flex items-center flex-col justify-between py-6 lg:flex-row lg:px-24 min-h-[150px] bg-base-300">
      <p className="font-subtitle text-white/50 text-sm">
        © Renato Alves.{" "}
        <span className="whitespace-nowrap">All rights reserved.</span>
      </p>
      <p className="font-subtitle text-white/50 text-sm lg:before:content-[''] lg:pl-6 lg:before:h-full lg:before:w-[2px] lg:before:bg-white/50 lg:relative lg:before:absolute lg:before:left-0 lg:ml-6 lg:before:rounded-full ">
        Animated Background:{" "}
        <a
          className="hover:underline-offset-2 hover:underline whitespace-nowrap text-secondary"
          href="https://marcbruederlin.github.io/particles.js/"
        >
          Particles.js
        </a>
      </p>
      <p className="font-subtitle text-white/50 text-sm lg:before:content-[''] lg:pl-6 lg:before:h-full lg:before:w-[2px] lg:before:bg-white/50 lg:relative lg:before:absolute lg:before:left-0 lg:ml-6 lg:before:rounded-full ">
        Design inspiration:{" "}
        <a
          className="hover:underline-offset-2 hover:underline whitespace-nowrap text-secondary"
          href="https://html5up.net/hyperspace"
        >
          HTML5 UP - Hyperspace
        </a>
      </p>
    </div>
  );
};

export default Footer;
