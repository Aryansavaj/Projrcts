import React, { ReactNode, useState } from "react";

import Admin_header from "./parts/Admin_header";
import Admin_sidebar from "./parts/Admin_sidebar";
import Footer from "./parts/Footer";
import MetaHead from "./MetaHead";

type Props = {
  headTitle: string;
  isFullWidth?: boolean;
  children: ReactNode;
};

export default function Admin_layout({ headTitle, isFullWidth, children }: Props) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <MetaHead title={headTitle} />
      <div data-theme="light" className="overflow-hidden relative">
        <Admin_header setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        <main className="pt-header-height bg-base-100">
          <div className="p-8 lg:p-12 bg-base-200 flex flex-col lg:flex-row gap-8 height-fullscreen bg_color_dash">
            <div className="w-full lg:w-1/6 relative h-[360px]">
              <Admin_sidebar
                setOpenSidebar={setOpenSidebar}
                openSidebar={openSidebar}
              />
            </div>

            <div
              className={`${
                isFullWidth ? "" : "container"
              } mx-auto isolate w-full lg:w-6/6`}
            >
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
