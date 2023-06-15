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
            
          <div className="bg-base-200 flex min-h-screen bg_color_dash">
            <div className="w-fit relative flex-1">
              <Admin_sidebar
                setOpenSidebar={setOpenSidebar}
                openSidebar={openSidebar}
              />
            </div>

           <div
              className="mx-auto isolate w-full lg:w-6/6  min-h-full"
            >
              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
