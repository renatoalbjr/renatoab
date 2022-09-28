import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";

interface props extends HTMLProps<HTMLDivElement> {}

const AboutMe: NextComponentType<NextPageContext, props, props> = () => {
  return <h1 className="text-black font-title">AboutMe</h1>;
};

export default AboutMe;
