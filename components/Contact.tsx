/* eslint-disable react/display-name */
import { Form } from "@formium/client";
import { mdiGithub } from "@mdi/js";
import Icon from "@mdi/react";
import React, { HTMLAttributes } from "react";
import { formium } from "../utils/formium";

interface Props extends HTMLAttributes<HTMLElement> {
  form: Form;
}

const Contact = React.forwardRef<HTMLElement, Props>(
  ({ form, ...props }, ref) => {
    return (
      <section ref={ref} className="bg-base-100 px-24 py-16" {...props}>
        <h1 className="font-title text-4xl text-primary">Get in touch</h1>
        <p className="text-white font-body text-base">
          This website is my resume, if you liked it and think that I could add
          value to your team, please send me a message.
        </p>
        <div className="grid grid-cols-2 mt-8">
          <form
            className="form-control"
            action=""
            onSubmit={async (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              await formium.submitForm("portfolio-contact", formData);
              alert("Success");
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
              className="btn btn-primary mt-4 max-w-fit self-end"
              type="submit"
            >
              Send
            </button>
          </form>
          <div className="pl-6 border-l border-primary ml-6">
            <h2 className="text-white font-title text-2xl">Email</h2>
            <a className="block mb-8 mt-2" href="mailto:rejunior147@gmail.com">
              rejunior147@gmail.com
            </a>
            <h2 className="text-white font-title text-2xl">Socials</h2>
            <div className="flex flex-row gap-2 mt-2">
              <a href="https://github.com/renatoalbjr">
                <Icon path={mdiGithub} className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

export default Contact;
