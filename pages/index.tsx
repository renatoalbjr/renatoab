import { Form } from "@formium/client";
import type { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";
import { MutableRefObject, useEffect, useState } from "react";

import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import ParticlesjsBackground from "../components/ParticlesjsBackground";
import Portfolio from "../components/Portfolio";
import Sidebar from "../components/Sidebar";

import useElementOnScreen from "../hooks/useElementOnScreen";
import { formium } from "../utils/formium";

const sections = ["Intro", "Portfolio", "About Me", "Contact"];
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

  const [visibleSection, setVisibleSection] = useState("Intro");

  useEffect(() => {
    if (isContactVisible) setVisibleSection("Contact");
    else if (isAboutVisible) setVisibleSection("About Me");
    else if (isPortfolioVisible) setVisibleSection("Portfolio");
    else setVisibleSection("Intro");
  }, [visibleSection, isContactVisible, isAboutVisible, isPortfolioVisible]);

  return (
    <>
      <Head>
        <title>Renato AB. | Software Developer</title>
      </Head>
      <ParticlesjsBackground />
      <Sidebar
        navIDs={sections}
        navTitles={sections}
        navVisibleID={visibleSection}
        className="scrollbar-thin scrollbar-track-base-100 scrollbar-thumb-base-300 items-stretch selection:bg-primary/70 relative"
      >
        <Intro />
        <Portfolio id="Portfolio" ref={portfolioRef} />
        <AboutMe id="About Me" ref={aboutRef} />
        <Contact form={form} id="Contact" ref={contactRef} />

        <Footer />
      </Sidebar>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const form = await formium.getFormBySlug("portfolio-contact");
  return {
    props: {
      form,
    },
  };
};
