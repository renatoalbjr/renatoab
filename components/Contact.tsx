import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";

interface props extends HTMLProps<HTMLDivElement> {}

const Contact: NextComponentType<NextPageContext, props, props> = () => {
  return <h1 className="text-black font-title">Contact</h1>;
};

export default Contact;
