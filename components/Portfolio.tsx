/* eslint-disable react/display-name */
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const Portfolio = React.forwardRef<HTMLElement, Props>(({ ...props }, ref) => {
  return (
    <section ref={ref} {...props}>
      <div className="w-full bg-base-200 flex flex-row items-center">
        <div className="h-full w-full max-w-[24rem] leading-[0px]">
          <Image
            src="/images/nlw-spotlight.jpg"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div className="pl-6 pr-24 w-fit">
          <h1 className="font-title text-4xl text-white mb-6">
            Rocketseat NLWs
          </h1>
          <p className="font-body text-base text-white mb-6">
            Rocketseat is a coding school. Periodically they organize an event
            called Next Level Week (NLW). During the event, we code a web-based
            application using the latest technologies. I loved the tech stack
            used during the event. It got me interested in learning web
            development.
          </p>
          <a
            href="https://blog.rocketseat.com.br/o-que-e-next-level-week/"
            className="btn btn-primary btn-outline rounded-full font-body font-normal"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="w-full flex flex-row items-center backdrop-blur-sm">
        <div className="pl-24 pr-6 w-fit">
          <h1 className="font-title text-4xl text-white mb-6">NLW #01</h1>
          <p className="font-body text-base text-white mb-6">
            The first NLW brought a project about recycling material. We created
            a website where people could register recyclable material collection
            points. We also developed an app to list the closest points and the
            materials they collect.
          </p>
          <a
            href="https://github.com/renatoalbjr/nlw-01"
            className="btn btn-primary btn-outline rounded-full font-body font-normal px-8"
          >
            Github
          </a>
        </div>
        <div className="w-full max-w-[24rem] leading-[0px]">
          <Image
            src="/images/nlw-ecoleta-spotlight.jpg"
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="w-full bg-base-200 flex flex-row items-center">
        <div className="w-full max-w-[24rem] leading-[0px]">
          <Image
            src="/images/nlw-esports-spotlight.jpg"
            alt=""
            width={400}
            height={400}
          />
        </div>
        <div className="pl-6 pr-24 w-fit">
          <h1 className="font-title text-4xl text-white mb-6">NLW eSports</h1>
          <p className="font-body text-base text-white mb-6">
            In this project, we&apos;ve developed a web interface and a mobile
            app that connects users searching for a partner to play a game.
            Using React and React Native for the front end and Express for the
            back end.
          </p>
          <a
            href="https://github.com/renatoalbjr/nlw-09"
            className="btn btn-primary btn-outline rounded-full font-body font-normal px-8"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
