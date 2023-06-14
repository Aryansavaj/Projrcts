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
            <div className="bg-primary flex flex-col lg:flex-row gap-8">
                <h1 class="Admin2_title">Manage Your Course</h1>
                <div className="admin2_nav_button">
                    <button className="btn hover:bg-base-200 bg-white opacity-[.14] w-full lg:w-fit mb-8 text-subtitle border-none font-medium text-sm pt-0 pb-0 btn-height-rem">
                        Alla
                    </button>
                    <button className="btn btn-primary w-full lg:w-fit mb-8 ml-2 mr-2 text-sm font-medium pt-0 pb-0 btn-height-rem">
                        Pågående
                    </button>
                    <button className="btn bg-base-200 hover:bg-base-200 w-full lg:w-fit mb-8 text-subtitle border-none text-sm font-medium pt-0 pb-0 btn-height-rem">
                        Avslutad
                    </button>
                </div>
            </div>
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
