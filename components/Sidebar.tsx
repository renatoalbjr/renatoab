import { NextComponentType, NextPageContext } from "next";
import { HTMLProps } from "react";
import { Icon } from "@mdi/react";
import { mdiMenu } from "@mdi/js";

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
}: props) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden absolute left-2 top-2"
        >
          <Icon path={mdiMenu} className="text-white h-6" />
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="px-12 min-w-max w-[20vw] max-w-xl bg-base-200 text-base-content flex flex-col justify-center">
          {/* <!-- Sidebar content here --> */}
          {navIDs.map((id, index) => {
            if (navTitles.length <= index) return;
            return (
              <li key={id} className="relative w-full mb-4">
                {/* prettier-ignore */}
                <a
                  href={`/#${id}`}
                  className={
                    "text-base-100 text-2xl font-bold hover:text-white py-4 block text-right " +
                    (navVisibleID === undefined
                      ? "py-0 "
                      : ("before:content-[''] before:bg-base-300 before:absolute before:bottom-0 before:right-0 before:w-full before:rounded-full before:h-1 " +
                        "after:content-[''] after:bg-primary2BaseGradient after:absolute after:bottom-0 after:right-0 after:rounded-full after:h-1 after:ease-linear after:duration-200 " +
                        (navVisibleID === id ? "after:w-full " : "after:w-0 ")
                        )
                    )
                  }
                >
                  {navTitles[index]}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
