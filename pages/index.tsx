import { Form } from "@formium/client";
import type { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";
import { MutableRefObject, useEffect, useMemo, useState } from "react";

import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import ParticlesjsBackground from "../components/ParticlesjsBackground";
import Portfolio from "../components/Portfolio";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import useElementOnScreen from "../hooks/useElementOnScreen";
import { formium } from "../utils/formium";
import { useRouter } from "next/router";

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

interface Props {
  form: Form;
}

const Home: NextPage<Props> = ({ form }: Props) => {
  const [portfolioRef, isPortfolioVisible] = useElementOnScreen(options) as [
    MutableRefObject<null>,
    boolean
  ];
  const [aboutRef, isAboutVisible] = useElementOnScreen(options) as [
    MutableRefObject<null>,
    boolean
  ];
  const [contactRef, isContactVisible] = useElementOnScreen(options) as [
    MutableRefObject<null>,
    boolean
  ];

  const { locale } = useRouter();
  const { t } = useTranslation("common");

  const sections = useMemo(
    () => [
      t("sections.intro"),
      t("sections.portfolio"),
      t("sections.about"),
      t("sections.contact"),
    ],
    [t]
  );
  const [visibleSection, setVisibleSection] = useState(sections[0]);

  useEffect(() => {
    if (isContactVisible) setVisibleSection(sections[3]);
    else if (isAboutVisible) setVisibleSection(sections[2]);
    else if (isPortfolioVisible) setVisibleSection(sections[1]);
    else setVisibleSection(sections[0]);
  }, [
    visibleSection,
    isContactVisible,
    isAboutVisible,
    isPortfolioVisible,
    sections,
  ]);

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <ParticlesjsBackground />
      <Sidebar
        navIDs={sections}
        navTitles={sections}
        navVisibleID={visibleSection}
        className="scrollbar-thin scrollbar-track-base-100 scrollbar-thumb-base-300 items-stretch selection:bg-primary/70 relative"
      >
        <Intro id={sections[0]} />
        <Portfolio id={sections[1]} ref={portfolioRef} />
        <AboutMe id={sections[2]} ref={aboutRef} />
        <Contact form={form} id={sections[3]} ref={contactRef} />

        <Footer />
      </Sidebar>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const form = await formium.getFormBySlug("portfolio-contact");
  return {
    props: {
      form,
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};
