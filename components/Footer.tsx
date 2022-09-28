import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";

interface props extends HTMLProps<HTMLDivElement> {}

const Footer: NextComponentType<NextPageContext, props, props> = () => {
  return <h1 className="text-black font-title">Footer</h1>;
};

export default Footer;
