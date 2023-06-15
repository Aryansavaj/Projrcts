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

export default function Admin_layout({ headTitle, children }: Props) {
  return (
    <>
      <MetaHead title={headTitle} />
      <div data-theme="light" className="overflow-hidden relative">
        <Admin_header />
        <section className="flex flex-row overflow-x-hidden flex-auto">
          <Admin_sidebar />
          <main className="bg_color_dash main_body w-full relative">
            <div className="middle_section">{children}</div>
          </main>
        </section>
      </div>
    </>
  );
}
