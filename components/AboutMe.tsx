/* eslint-disable @next/next/no-img-element */
import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";
import Icon from "@mdi/react";
import {
  mdiBookOutline,
  mdiCertificateOutline,
  mdiHistory,
  mdiMapMarker,
} from "@mdi/js";
import Link from "next/link";
import {
  ReactLogo,
  NextLogo,
  ExpoLogo,
  PrismaLogo,
  TailwindLogo,
  TypescriptLogo,
} from "./Icons/MyIcons";

const abilities = [
  {
    title: "React.js",
    icon: <ReactLogo className="text-white w-12 h-12" />,
  },
  {
    title: "Next.js",
    icon: <NextLogo className="text-white w-12 h-12" />,
  },
  {
    title: "React Native",
    icon: <ReactLogo className="text-white w-12 h-12" />,
  },
  {
    title: "Expo",
    icon: <ExpoLogo className="text-white w-12 h-12" />,
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
  },
  {
    title: "Prisma",
    icon: <PrismaLogo className="text-white w-12 h-12" />,
  },
  {
    title: "Tailwindcss",
    icon: <TailwindLogo className="text-white w-12 h-12" />,
  },
  {
    title: "Typescript",
    icon: <TypescriptLogo className="text-white w-12 h-12" />,
  },
];

interface props extends HTMLProps<HTMLDivElement> {}

const AboutMe: NextComponentType<NextPageContext, props, props> = () => {
  return (
    <main className="px-24 py-16 backdrop-blur-sm w-full">
      <h1 className="text-4xl font-title text-primary">About Me</h1>
      <p className="text-base font-body text-white mt-6">
        I&apos;m currently working to get my Bachelors Degree in Computer
        Science at Universidade Federal de Goiás (UFG). But I&apos;m looking for
        opportunities to expand my knowledge and skills in my fields of
        interest. I&apos;m curious, willing and passionate for technology and
        business.
      </p>
      <div className="grid grid-cols-2 w-full rounded-lg border border-white overflow-hidden mt-8">
        <section className="p-4 border border-white pb-6">
          <h1 className="font-title text-2xl text-white mt-4">
            <Icon
              path={mdiBookOutline}
              className="w-12 h-12 m-2 text-primary inline"
            />
            My knowledge and skills
          </h1>
          <p className="font-body text-base text-white mt-4">
            I&apos;ve knowledge with the technology that I used to create this
            website and the projects in my portfolio, including:
          </p>
          <div className="flex flex-row items-center gap-6 mt-6 pb-6 mx-8 overflow-x-auto snap-x scrollbar-thin">
            {abilities.map(({ title, icon }) => {
              return (
                <div
                  className="flex flex-col items-center gap-2 snap-center"
                  key={title}
                >
                  {icon}
                  <span className="font-body truncate text-sm text-white">
                    {title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="p-4 border border-white pb-6">
          <h1 className="font-title text-2xl text-white mt-4">
            <Icon
              path={mdiCertificateOutline}
              className="w-12 h-12 m-2 text-primary inline"
            />
            Certifications
          </h1>
          <p className="font-body text-base text-white mt-4">
            I collected some{" "}
            <Link href={"/"}>
              <a className="text-primary">certificates</a>
            </Link>{" "}
            along my journey. You can check some of them bellow:
          </p>
        </section>

        <section className="p-4 border border-white pb-6">
          <h1 className="font-title text-2xl text-white mt-4">
            <Icon
              path={mdiHistory}
              className="w-12 h-12 m-2 text-primary inline"
            />
            Work History
          </h1>
          <p className="font-body text-base text-white mt-4">
            I&apos;m currently looking for my first job.
          </p>
        </section>

        <section className="p-4 border border-white pb-6">
          <h1 className="font-title text-2xl text-white mt-4">
            <Icon
              path={mdiMapMarker}
              className="w-12 h-12 m-2 text-primary inline"
            />
            Where do I work from
          </h1>
          <p className="font-body text-base text-white mt-4">
            I&apos;m working from Goiânia, GO - Brazil. Since my graduation is
            in Goiânia, I&apos;m only open to remote opportunities or offices
            located here.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutMe;
