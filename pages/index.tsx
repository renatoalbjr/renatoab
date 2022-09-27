import type { NextPage } from "next";
import Head from "next/head";
import { MutableRefObject, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import useElementOnScreen from "../hooks/useElementOnScreen";

const sections = ["Intro", "Portfolio", "About Me", "Contact"];
const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const Home: NextPage = () => {
  // const [introRef, isIntroVisible] = useElementOnScreen(options);
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
    console.log(visibleSection);
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
      <Sidebar
        navIDs={sections}
        navTitles={sections}
        navVisibleID={visibleSection}
      >
        <div
          id="Intro"
          className="flex items-center justify-center h-[1000px] flex-shrink-0 w-full bg-emerald-200"
        >
          <h1 className="text-black">Intro</h1>
        </div>
        <div
          id="Portfolio"
          ref={portfolioRef}
          className="flex items-center justify-center h-[1000px] flex-shrink-0 w-full bg-emerald-100"
        >
          <h1 className="text-black">Portfolio</h1>
        </div>
        <div
          id="About Me"
          ref={aboutRef}
          className="flex items-center justify-center h-[1000px] flex-shrink-0 w-full bg-emerald-200"
        >
          <h1 className="text-black">About Me</h1>
        </div>
        <div
          id="Contact"
          ref={contactRef}
          className="flex items-center justify-center h-[1000px] flex-shrink-0 w-full bg-emerald-100"
        >
          <h1 className="text-black">Contact</h1>
        </div>
      </Sidebar>
    </>
  );
};

export default Home;
