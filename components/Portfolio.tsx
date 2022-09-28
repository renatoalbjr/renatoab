import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";

interface props extends HTMLProps<HTMLDivElement> {}

const Portfolio: NextComponentType<NextPageContext, props, props> = () => {
  return <h1 className="text-black font-title">Portfolio</h1>;
};

export default Portfolio;
