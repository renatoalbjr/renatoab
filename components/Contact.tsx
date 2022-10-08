/* eslint-disable react/display-name */
import { Form } from "@formium/client";
import { mdiGithub, mdiLinkedin } from "@mdi/js";
import Icon from "@mdi/react";
import { useTranslation } from "next-i18next";
import React, { HTMLAttributes, useState } from "react";
import { siDiscord } from "simple-icons/icons";
import { formium } from "../utils/formium";
import FormSuccess from "./FormSuccess";

interface Props extends HTMLAttributes<HTMLElement> {
  form: Form;
}

const Contact = React.forwardRef<HTMLElement, Props>(
  ({ form, ...props }, ref) => {
    const [isSuccessVisible, setSuccessVisible] = useState(false);
    const [discordCopied, setDiscordCopied] = useState(false);

    function toggleSuccessVisible() {
      setSuccessVisible(!isSuccessVisible);
    }

    const { t } = useTranslation();

    return (
      <section
        ref={ref}
        className="bg-base-100 px-6 md:px-12 lg:px-24 py-16"
        {...props}
      >
        <h1 className="font-title text-4xl text-primary">
          {t("contact.title")}
        </h1>
        <p className="text-white font-body text-base">{t("contact.text")}</p>
        <div className="md:grid md:grid-cols-2 mt-8">
          <form
            className="form-control"
            action=""
            onSubmit={async (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              await formium.submitForm("portfolio-contact", formData);
              toggleSuccessVisible();
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label" htmlFor="Name">
                  <span className="label-text font-title text-2xl">
                    {t("contact.name")}
                  </span>
                </label>
                <input
                  id="Name"
                  name="Name"
                  className="input input-bordered w-full max-w-xs"
                  type="text"
                />
              </div>
              <div>
                <label className="label" htmlFor="Email">
                  <span className="label-text font-title text-2xl">
                    {t("contact.email")}
                  </span>
                </label>
                <input
                  id="Email"
                  name="Email"
                  className="input input-bordered w-full max-w-xs"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label className="label" htmlFor="Message">
                <span className="label-text font-title text-2xl">
                  {t("contact.message")}
                </span>
              </label>
              <textarea
                id="Message"
                name="Message"
                className="textarea textarea-bordered min-h-[10rem] w-full"
              />
            </div>
            <button
              className="btn btn-primary mt-4 max-w-fit self-end rounded-full px-8"
              type="submit"
            >
              {t("contact.send")}
            </button>
          </form>
          <div className="mt-10 pt-10 border-t md:mt-0 md:pt-0 md:border-t-0 md:pl-6 md:border-l border-primary md:ml-6">
            <h2 className="text-white font-title text-2xl">
              {t("contact.email")}
            </h2>
            <a className="block mb-8 mt-2" href="mailto:renato.albjr@gmail.com">
              renato.albjr@gmail.com
            </a>
            <h2 className="text-white font-title text-2xl">
              {t("contact.socials")}
            </h2>
            <div className="flex flex-row gap-2 mt-2">
              <a href="https://github.com/renatoalbjr">
                <Icon path={mdiGithub} className="h-6 w-6" />
              </a>
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip={
                  discordCopied
                    ? t("contact.discord_copied")
                    : t("contact.discord_copy")
                }
              >
                <button
                  onClick={async () => {
                    if (typeof navigator !== "undefined") {
                      if (typeof navigator.clipboard !== "undefined")
                        navigator.clipboard.writeText("Barbosa#6814");
                      setDiscordCopied(true);
                      setTimeout(() => setDiscordCopied(false), 1000);
                    }
                  }}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: siDiscord.svg }}
                    className="h-6 w-6 fill-white hover:fill-white/50"
                  />
                </button>
              </div>
              <a href="https://linkedin.com/in/renato-albjr">
                <Icon path={mdiLinkedin} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        {isSuccessVisible ? (
          <FormSuccess closeCallback={toggleSuccessVisible} />
        ) : (
          ""
        )}
      </section>
    );
  }
);

export default Contact;
