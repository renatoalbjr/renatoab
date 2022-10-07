/* eslint-disable react/display-name */
import { useTranslation } from "next-i18next";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {}

const Portfolio = React.forwardRef<HTMLElement, Props>(({ ...props }, ref) => {
  const { t } = useTranslation("common");
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
            {t("spotlight_1.title")}
          </h1>
          <p className="font-body text-base text-white mb-6">
            {t("spotlight_1.text")}
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://blog.rocketseat.com.br/o-que-e-next-level-week/"
              className="btn btn-primary btn-outline rounded-full font-body font-normal"
            >
              {t("Learn_more")}
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
            {t("spotlight_2.title")}
          </h1>
          <p className="font-body text-base text-white mb-6">
            {t("spotlight_2.text")}
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://github.com/renatoalbjr/nlw-01"
              className="btn btn-primary btn-outline rounded-full font-body font-normal px-8"
            >
              {t("Github")}
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
            {t("spotlight_3.title")}
          </h1>
          <p className="font-body text-base text-white mb-6">
            {t("spotlight_3.text")}
          </p>
          <div className="card-actions justify-end">
            <a
              href="https://github.com/renatoalbjr/nlw-09"
              className="btn btn-primary btn-outline rounded-full font-body font-normal px-8"
            >
              {t("Github")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
