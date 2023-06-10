import React from "react";
import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";

import { useRouter } from "next/router";

import Title from "@/components/parts/Title";
import Titleh6 from "@/components/parts/Titleh6";
import Layout from "@/components/DashboardLayout";
import FadeLogo from "@/components/graphic/FadeLogo";
import ScrollReveal from "@/components/transition/ScrollReveal";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Progress, Typography } from "@material-tailwind/react";
import en from "@/locales/en";
import sv from "@/locales/sv";
import ProgressBarComponent from "@/components/parts/progress_bar";

type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={t.pressData.metaData.title}>
 
      
      <section className="mb-8 lg:mb-8 p-8 lg:p-10 bg-base-100 rounded-[3rem] items-center lg:flex-row gap-8 ">
            <ScrollReveal>
              <div className="grid grid-cols-2 place-content-between flex items-baseline">
                <Titleh6
                  blackText="Mina"
                  blueText="Kurser"
                  className="text-left"
                />
                <h1 className="font-medium text-l mb-2 text-primary transition-all duration-200 text-right cursor-pointer flex items-center justify-end gap-1">
                  Visa alla  
                  <MdOutlineKeyboardArrowRight
                    size={28}
                    className={`transform`}
                  />
                </h1>
              </div>
            </ScrollReveal>
            <ScrollReveal>
        <button className="btn bg-base-200 w-full lg:w-fit mb-6 text-subtitle border-none font-semibold">
              Alla
        </button>
        <button className="btn btn-primary w-full lg:w-fit mb-6 ml-2 mr-2">
              Pågående
        </button>
        <button className="btn bg-base-200 w-full lg:w-fit mb-6 text-subtitle border-none">
              Avslutad
        </button>
        </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
              <ScrollReveal
                key=""
                className="bg-white grid justify-between rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box"
              >
                <div>
                  <div className="w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg">
                    <Image
                      src="/images/dashboard/image-1.png"
                      fill
                      alt="blog"
                      className="absolute object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <ProgressBarComponent progress={80} />
                  </div>
                  <h1 className="font-semibold text-lg mb-2 hover:text-primary hover:underline transition-all duration-200">
                    Checkified - Nyckeln till Framgång
                  </h1>
                </div>
              </ScrollReveal>

              <ScrollReveal className="bg-white grid justify-between rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box">
                <div>
                  <div className="w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg">
                    <Image
                      src="/images/dashboard/image-1.png"
                      fill
                      alt="blog"
                      className="absolute object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <ProgressBarComponent progress={80} />
                  </div>
                  <h1 className="font-semibold text-lgmb-2 hover:text-primary hover:underline transition-all duration-200 ">
                    Checkified - Nyckeln till Framgång
                  </h1>
                </div>
              </ScrollReveal>
              <ScrollReveal className="bg-white grid justify-between rounded-[25px] p-4 cursor-pointer transition-all duration-150 box-shadow-box">
                <div>
                  <div className="w-full h-[150px] relative rounded-[18px] overflow-hidden mb-6 shadow-lg">
                    <Image
                      src="/images/dashboard/image-1.png"
                      fill
                      alt="blog"
                      className="absolute object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <ProgressBarComponent progress={80} />
                  </div>
                  <h1 className="font-semibold text-lg mb-2 hover:text-primary hover:underline transition-all duration-200">
                    Checkified - Nyckeln till Framgång
                  </h1>
                </div>
              </ScrollReveal>
            </div>
          </section>
    </Layout>
  );
}
