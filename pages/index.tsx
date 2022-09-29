import type { NextPage } from "next";
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

const sections = ["Intro", "Portfolio", "About Me", "Contact"];
const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const Home: NextPage = () => {
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
        className="scrollbar-thin scrollbar-track-base-100 scrollbar-thumb-base-300 items-stretch"
      >
        <section
          id="Intro"
          className="flex items-center justify-center min-h-[100vh]"
        >
          <Intro />
        </section>
        <section id="Portfolio" ref={portfolioRef}>
          <Portfolio />
        </section>
        <section
          id="About Me"
          ref={aboutRef}
          className="flex items-center justify-center"
        >
          <AboutMe />
        </section>
        <section
          id="Contact"
          ref={contactRef}
          className="bg-base-100 px-24 py-16"
        >
          <Contact />
        </section>
        <div className="flex items-center justify-center min-h-[150px] bg-emerald-700">
          <Footer />
        </div>
      </Sidebar>
    </>
  );
};

export default Home;
