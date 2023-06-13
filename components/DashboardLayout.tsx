import React, { ReactNode, useState } from "react"

import Header from "./parts/DashboardHeader"
import SideHeader from "./parts/SideHeader"
import Footer from "./parts/Footer"
import MetaHead from "./MetaHead"

type Props = {
  headTitle: string
  isFullWidth?: boolean
  children: ReactNode
}

export default function Layout({ headTitle, isFullWidth, children }: Props) {
  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <MetaHead title={headTitle} />
      <div data-theme="light" className="overflow-hidden relative">
        <Header setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
        <main className="pt-header-height bg-base-100">
          <div className="p-8 lg:p-12 bg-base-200 flex flex-col lg:flex-row gap-8 height-fullscreen">
            <div className="w-full lg:w-1/6 relative h-[360px]">
                <SideHeader
                  setOpenSidebar={setOpenSidebar}
                  openSidebar={openSidebar}
                />
            </div>
           
            <div className={`${isFullWidth ? "" : "container"} mx-auto isolate w-full lg:w-6/6`}>
              <style jsx>{`
                .wrapper {
                  margin-right: auto;
                  margin-left: auto;
                  max-width: 960px;
                  padding-right: 10px;
                  padding-left: 10px;
                }
              `}</style>

              {children}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
