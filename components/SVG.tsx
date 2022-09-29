import { NextComponentType, NextPageContext } from "next";
import { HTMLProps, useEffect } from "react";

interface props extends HTMLProps<HTMLImageElement> {
  src: string;
}

const SVG: NextComponentType<NextPageContext, props, props> = ({
  src,
  ...rest
}: props) => {
  return <h1 className="text-primary font-title text-lg">SVG</h1>;
};

export default SVG;
