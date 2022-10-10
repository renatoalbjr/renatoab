import { NextComponentType, NextPageContext } from "next";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { HTMLProps } from "react";

interface props extends HTMLProps<HTMLElement> {}

const Intro: NextComponentType<NextPageContext, props, props> = ({
  className,
  ...rest
}: props) => {
  const { t } = useTranslation("common");
  return (
    <section
      className={"flex items-center justify-center min-h-[100vh] " + className}
      {...rest}
    >
      <header className="mx-12 lg:mx-24 my-auto w-full bg-transparent relative">
        <h1
          className={
            "font-title text-4xl text-white " +
            "after:absolute after:w-full after:rounded-full after:h-1 after:bg-primary-400 after:block after:mt-6"
          }
        >
          {t("intro.line_1")} <span className="text-primary-400">Renato</span>,
          <br />
          {t("intro.line_2")}.
        </h1>
        <p className="font-body text-white text-lg font-normal mt-[3.25rem]">
          {t("intro.p")}
        </p>
        <Link href={"#" + t("sections.portfolio")}>
          <a className="btn btn-primary rounded-full mt-6">{t("Portfolio")}</a>
        </Link>
        <Link href="https://github.com/renatoalbjr/renatoab">
          <a className="btn btn-primary btn-outline rounded-full mt-6 ml-4 lg:ml-6">
            {t("Github")}
          </a>
        </Link>
      </header>
    </section>
  );
};

export default Intro;
