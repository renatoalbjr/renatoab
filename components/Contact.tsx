/* eslint-disable react/display-name */
import { Form } from "@formium/client";
import { mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import React, { HTMLAttributes, useState } from "react";
import { formium } from "../utils/formium";
import FormSuccess from "./FormSuccess";
import { DiscordLogo } from "./Icons/MyIcons";

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

    return (
      <section ref={ref} className="bg-base-100 px-24 py-16" {...props}>
        <h1 className="font-title text-4xl text-primary">Get in touch</h1>
        <p className="text-white font-body text-base">
          This website is my resume. If you think I could add value to your
          team, please send me a message.
        </p>
        <div className="grid grid-cols-2 mt-8">
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
                  <span className="label-text font-title text-2xl">Name</span>
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
                  <span className="label-text font-title text-2xl">Email</span>
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
                <span className="label-text font-title text-2xl">Message</span>
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
              Send
            </button>
          </form>
          <div className="pl-6 border-l border-primary ml-6">
            <h2 className="text-white font-title text-2xl">Email</h2>
            <a className="block mb-8 mt-2" href="mailto:rejunior147@gmail.com">
              renato.albjr@gmail.com
            </a>
            <h2 className="text-white font-title text-2xl">Socials</h2>
            <div className="flex flex-row gap-2 mt-2">
              <a href="https://github.com/renatoalbjr">
                <Icon path={mdiGithub} className="h-6 w-6" />
              </a>
              <div
                className="tooltip tooltip-bottom tooltip-primary"
                data-tip={discordCopied ? "copied!" : "copy to clipboard"}
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
                  <DiscordLogo className="h-6 w-6" />
                </button>
              </div>
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
