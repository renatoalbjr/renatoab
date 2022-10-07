import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {}

const LanguageDropdown: NextComponentType<NextPageContext, Props, Props> = ({
  className,
  ...rest
}: Props) => {
  const { locale, locales, pathname } = useRouter();
  return (
    <div className={"dropdown dropdown-end " + className} {...rest}>
      <label tabIndex={0} className="btn btn-outline btn-primary m-1">
        {typeof locale === "undefined" ? "en" : locale}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 mt-[1px] shadow bg-base-100 rounded-box items-end w-max"
      >
        {locales?.map((l) => (
          <li key={l} className="w-full">
            <Link href={pathname} locale={l}>
              <a className="text-right w-full justify-end">{l}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LanguageDropdown;
