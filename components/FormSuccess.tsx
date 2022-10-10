import { mdiCheckCircleOutline, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  closeCallback: () => void;
}

const FormSuccess: NextComponentType<NextPageContext, Props, Props> = ({
  closeCallback,
  ...props
}: Props) => {
  return (
    <div
      className="fixed top-0 left-0 lg:left-[10%] w-full h-full bg-black/60 flex items-center justify-center z-50"
      {...props}
    >
      <div className="bg-base-200 flex flex-col items-center justify-center gap-6 fixed p-16 rounded-xl">
        <Icon
          path={mdiCheckCircleOutline}
          className="text-emerald-400 w-16 h-16"
        />
        <span className="pt-2 text-primary-400 font-title text-4xl">
          Thank You!
        </span>
        <p className="text-white font-body text-base">
          Your message has been sent.
        </p>
        <button onClick={closeCallback}>
          <Icon
            path={mdiClose}
            className="text-base-300 hover:text-white absolute top-4 right-4 w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default FormSuccess;
