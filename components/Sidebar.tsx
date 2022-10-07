import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";
import { Icon } from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import Link from "next/link";
import { useRouter } from "next/router";

interface props extends HTMLProps<HTMLDivElement> {
  navIDs: string[];
  navTitles: string[];
  navVisibleID?: string;
}

const Sidebar: NextComponentType<NextPageContext, props, props> = ({
  navIDs,
  navTitles,
  navVisibleID,
  children,
  className,
  ...rest
}: props) => {
  // const {pathname, asPath, locale} = useRouter();
  return (
    <div className="drawer drawer-mobile">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle [&:checked~.drawer-side>.drawer-overlay]:[--nf:#000]"
      />
      <div
        className={"drawer-content flex flex-col items-center " + className}
        {...rest}
      >
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden fixed left-2 top-2 z-10"
        >
          <Icon path={mdiMenu} className="text-white h-6" />
        </label>
        {children}
      </div>
      <nav className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay !bg-black/50"
        ></label>
        <ol className="px-12 min-w-max w-[20vw] max-w-xl bg-base-200 text-base-content flex flex-col justify-center">
          {/* <!-- Sidebar content here --> */}
          {navIDs.map((id, index) => {
            if (navTitles.length <= index) return;
            return (
              <li key={id} className="relative w-full mb-4">
                {/* prettier-ignore */}
                <Link href={`/#${id}`}>
                  <a
                    className={
                      "text-lg uppercase font-title hover:text-white py-4 block text-right " +
                      (navVisibleID === undefined
                        ? "py-0 text-base-content/50"
                        : ("before:content-[''] before:bg-base-300 before:hover:bg-white/50 before:absolute before:bottom-0 before:right-0 before:w-full before:rounded-full before:h-[3px] " +
                          "after:content-[''] after:bg-primary after:absolute after:bottom-0 after:right-0 after:rounded-full after:h-[3px] after:ease-linear after:duration-200 " +
                          (navVisibleID === id ? "after:w-full font-bold text-white " : "after:w-0 text-base-content/50")
                          )
                      )
                    }
                  >
                    {navTitles[index]}
                  </a>
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Sidebar;
