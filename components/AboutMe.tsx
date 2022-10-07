/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/display-name */
import {
  ExpoLogo,
  NextLogo,
  PrismaLogo,
  ReactLogo,
  TailwindLogo,
  TypescriptLogo,
} from "../components/Icons/MyIcons";
import {
  mdiBookOutline,
  mdiChevronLeft,
  mdiChevronRight,
  mdiHistory,
  mdiMapMarkerOutline,
  mdiSchoolOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { HTMLAttributes, MutableRefObject } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { useTranslation } from "next-i18next";

const abilities = [
  {
    title: "React.js",
    icon: (
      <ReactLogo className="text-white w-12 h-12 group-hover:text-white/50" />
    ),
    link: "https://reactjs.org/",
  },
  {
    title: "Next.js",
    icon: (
      <NextLogo className="text-white w-12 h-12 group-hover:text-white/50" />
    ),
    link: "https://nextjs.org/",
  },
  {
    title: "React Native",
    icon: (
      <ReactLogo className="text-white w-12 h-12 group-hover:text-white/50" />
    ),
    link: "https://reactnative.dev/",
  },
  {
    title: "Expo",
    icon: (
      <ExpoLogo className="text-white w-12 h-12 group-hover:text-white/50" />
    ),
    link: "https://expo.dev/",
  },
  {
    title: "Express.js",
    icon: (
      <img
        className="object-cover w-full h-12"
        src="/images/ExpressLogo.png"
        alt=""
      />
    ),
    link: "https://expressjs.com/",
  },
  {
    title: "Prisma",
    icon: (
      <PrismaLogo className="text-white w-12 h-12 group-hover:text-white/50" />
    ),
    link: "https://www.prisma.io/",
  },
  {
    title: "Tailwindcss",
    icon: (
      <TailwindLogo className="text-white w-12 h-12 group-hover:text-white/50" />
    ),
    link: "https://tailwindcss.com/",
  },
  {
    title: "Typescript",
    icon: (
      <TypescriptLogo className="text-white w-12 h-12 group-hover:text-white/50" />
    ),
    link: "https://www.typescriptlang.org/",
  },
];

interface Props extends HTMLAttributes<HTMLElement> {}

const AboutMe = React.forwardRef<HTMLElement, Props>(({ ...props }, ref) => {
  const abilitiesIOOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  const [firstAbilityRef, isFirstAbilityVisible] = useElementOnScreen(
    abilitiesIOOptions
  ) as [MutableRefObject<null>, boolean];
  const [lastAbilityRef, isLastAbilityVisible] = useElementOnScreen(
    abilitiesIOOptions
  ) as [MutableRefObject<null>, boolean];

  const { t } = useTranslation("common");

  return (
    <section
      ref={ref}
      className="flex items-center justify-center backdrop-blur-sm"
      {...props}
    >
      <main className="px-6 lg:px-24 py-16 w-full">
        <h1 className="text-4xl font-title text-primary">{t("About_Me")}</h1>
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 w-full rounded-lg border border-white overflow-hidden mt-8">
          {/* Knowledge */}
          <section className="p-4 border border-white pb-6">
            <h1 className="font-title text-2xl text-white mt-4 flex items-center gap-2">
              <Icon
                path={mdiBookOutline}
                className="w-12 h-12 m-2 text-primary "
              />
              {t("about_1.title")}
            </h1>
            <p className="font-body text-base text-white mt-4">
              {t("about_1.text")}
            </p>
            <div className="relative w-full flex items-center">
              <Icon
                path={mdiChevronLeft}
                className={`${
                  isFirstAbilityVisible ? "invisible " : " "
                } w-12 h-12 text-white`}
              />
              <div className="flex flex-row items-center gap-6 mt-6 pb-6 pr-6 overflow-x-scroll scrollbar-thin">
                {abilities.map(({ title, icon, link }, index) => {
                  return (
                    <a
                      className="flex flex-col items-center gap-2 group"
                      key={title}
                      href={link}
                      ref={
                        index === 0
                          ? firstAbilityRef
                          : index === abilities.length - 1
                          ? lastAbilityRef
                          : null
                      }
                    >
                      {icon}
                      <span className="font-body truncate text-sm text-white group-hover:text-white/50">
                        {title}
                      </span>
                    </a>
                  );
                })}
              </div>
              <Icon
                path={mdiChevronRight}
                className={`${
                  isLastAbilityVisible ? "invisible " : " "
                } w-12 h-12 text-white `}
              />
            </div>
          </section>

          {/* Education */}
          <section className="p-4 border border-white pb-6">
            <h1 className="font-title text-2xl text-white mt-4 flex items-center gap-2">
              <Icon
                path={mdiSchoolOutline}
                className="w-12 h-12 m-2 text-primary "
              />
              {t("about_2.title")}
            </h1>
            <p className="font-body text-base text-white mt-4">
              {t("about_2.text.1")}
              <span className="text-primary">{t("about_2.text.2")}</span>
              {t("about_2.text.3")}
              <span className="text-primary">{t("about_2.text.4")}</span>
              {t("about_2.text.5")}
              <span className="text-primary">{t("about_2.text.6")}</span>
              {t("about_2.text.7")}
            </p>
          </section>

          {/* History */}
          <section className="p-4 border border-white pb-6">
            <h1 className="font-title text-2xl text-white mt-4 flex items-center gap-2">
              <Icon path={mdiHistory} className="w-12 h-12 m-2 text-primary " />
              {t("about_3.title")}
            </h1>
            <p className="font-body text-base text-white mt-4">
              {t("about_3.text")}
            </p>
          </section>

          {/* Location */}
          <section className="p-4 border border-white pb-6">
            <h1 className="font-title text-2xl text-white mt-4 flex items-center gap-2">
              <Icon
                path={mdiMapMarkerOutline}
                className="w-12 h-12 m-2 text-primary "
              />
              {t("about_4.title")}
            </h1>
            <p className="font-body text-base text-white mt-4">
              {t("about_4.text")}
            </p>
          </section>
        </div>
      </main>
    </section>
  );
});

export default AboutMe;
