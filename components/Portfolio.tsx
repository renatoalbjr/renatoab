/* eslint-disable react/display-name */
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const Portfolio = React.forwardRef<HTMLElement, Props>(({ ...props }, ref) => {
  return (
    <section ref={ref} {...props}>
      {/* 1st Spotlight */}
      <div className="card lg:flex-row w-full bg-base-200 rounded-none relative">
        <figure className="relative h-96 lg:h-auto w-full lg:w-[40%] lg:shrink-0">
          <Image
            src="/images/nlw-spotlight-2.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <div className="card-body relative">
          <h1 className="card-title font-title text-4xl text-white mb-6">
            Rocketseat NLWs
          </h1>
          <p className="font-body text-base text-white mb-6">
            Rocketseat is a coding school. Periodically they organize an event
            called Next Level Week (NLW). During the event, we code a web-based
            application using the latest technologies. I loved the tech stack
            used during the event. It got me interested in learning web
            development.
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://blog.rocketseat.com.br/o-que-e-next-level-week/"
              className="btn btn-primary btn-outline rounded-full font-body font-normal"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* 2nd Spotlight */}
      <div className="card lg:card-side w-full bg-base-200 lg:bg-transparent lg:backdrop-blur-sm rounded-none relative lg:flex-row-reverse">
        <figure className="relative h-96 lg:h-auto w-full lg:w-[40%] lg:shrink-0">
          <Image
            src="/images/nlw-ecoleta-spotlight-2.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </figure>

        <div className="card-body relative">
          <h1 className="card-title font-title text-4xl text-white mb-6">
            NLW #01
          </h1>
          <p className="font-body text-base text-white mb-6">
            The first NLW brought a project about recycling material. We created
            a website where people could register recyclable material collection
            points. We also developed an app to list the closest points and the
            materials they collect.
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://github.com/renatoalbjr/nlw-01"
              className="btn btn-primary btn-outline rounded-full font-body font-normal px-8"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      {/* 3rd Spotlight */}
      <div className="card lg:card-side w-full bg-base-200 rounded-none relative">
        <figure className="relative h-96 lg:h-auto w-full lg:w-[40%] lg:shrink-0">
          <Image
            src="/images/nlw-esports-spotlight-2.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </figure>
        <div className="card-body relative">
          <h1 className="card-title font-title text-4xl text-white mb-6">
            NLW eSports
          </h1>
          <p className="font-body text-base text-white mb-6">
            In this project, we&apos;ve developed a web interface and a mobile
            app that connects users searching for a partner to play a game.
            Using React and React Native for the front end and Express for the
            back end.
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://github.com/renatoalbjr/nlw-09"
              className="btn btn-primary btn-outline rounded-full font-body font-normal px-8"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
