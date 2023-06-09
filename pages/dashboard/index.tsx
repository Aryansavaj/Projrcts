import React from "react";
import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";

import { useRouter } from "next/router";

import Title from "@/components/parts/Title";
import Layout from "@/components/DashboardLayout";
import FadeLogo from "@/components/graphic/FadeLogo";
import HalfCircle from "@/components/graphic/HalfCircle";
import ScrollReveal from "@/components/transition/ScrollReveal";
import { Progress, Typography } from "@material-tailwind/react";
import en from "@/locales/en";
import sv from "@/locales/sv";
import ProgressBarComponent from '@/components/parts/progress_bar';


type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={t.pressData.metaData.title}>
      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 flex-0 lg:w-10/12">
          <section className="bg-primary rounded-[2rem] py-12 lg:py-5 text-white relative mb-10 isolate">
            <div className="w-full lg:w-1/2  p-8 lg:px-8 lg:py-10 lg:mr-auto mt-40 lg:mt-0">
              <FadeLogo
                positionClassName="left-[-2rem] bottom-[-2rem]"
                svgClassname="svg-white-opacity"
                sizeClassName="w-[12rem] h-[12rem]"
                className="z-[-1]"
              />
              <HalfCircle
                positionClassName="left-[47rem] bottom-[1rem]"
                sizeClassName="w-[14rem] h-[14rem]"
                className="z-[-1]"
              />


              <ScrollReveal>
                <h2 className="text-[35px] lg:text-[35px] mb-4 font-semibold">
                  Välkommen 👋
                </h2>

                <p className="mb-6 font-medium">
                  Du är bara en produkt ifrån oändlig framgång.{" "}
                </p>
              </ScrollReveal>
            </div>

            <div className="absolute w-full h-[300px] lg:w-[520px] lg:h-[520px] xl:w-[460px] xl:h-[285px] -top-10 -right-2 lg:top-[1rem] xl:top-[-3rem] lg:-right-10 xl:right-[1rem] z-[-1]">
              <Image
                src="/images/dashboard/man-ask.png"
                alt="stats"
                fill
                className="absolute object-contain"
              />
            </div>

            
          </section>
          
          <section className="p-8 lg:p-12 bg-base-100 rounded-[3rem] items-center lg:flex-row gap-8">
            <ScrollReveal>
            <h1 className="text-[26px] lg:text-[40px] leading-[2rem] lg:leading-[3rem] mb-8 text-left font-900 text-18">
              <span className="">Mina</span><span className="text-primary ">Kurser</span></h1>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
                <div>
                  <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
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
                  <h1 className="font-bold text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                    Checkified - Nyckeln till Framgång
                  </h1>
                </div>
              </ScrollReveal>
              <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
                <div>
                  <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
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
                  <h1 className="font-bold text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                    Checkified - Nyckeln till Framgång
                  </h1>
                </div>
              </ScrollReveal>
              <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
                <div>
                  <div className="w-full h-[200px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
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
                  <h1 className="font-bold text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                    Checkified - Nyckeln till Framgång
                  </h1>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
