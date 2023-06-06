import React from "react";
import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";

import { useRouter } from "next/router";

import Title from "@/components/parts/Title";
import Layout from "@/components/DashboardLayout";
import FadeLogo from "@/components/graphic/FadeLogo";
import ScrollReveal from "@/components/transition/ScrollReveal";
import { Progress, Typography } from "@material-tailwind/react";
import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={t.pressData.metaData.title}>
      <section className="mb-8 lg:mb-8"></section>

      <section className=" bg-primary rounded-[2rem] py-12 lg:py-16 text-white relative mb-16 isolate">
        <div className="w-full lg:w-2/5  p-8 lg:px-16 lg:py-10 rounded-tl-3xl rounded-bl-3xl backdrop-blur-xl lg:mr-auto mt-40 lg:mt-0">
          <FadeLogo
            positionClassName="left-[-4rem] bottom-[-7rem]"
            svgClassname="svg-white-opacity"
            sizeClassName="w-[20rem] h-[20rem]"
            className="z-[-1]"
          />

          <ScrollReveal>
            <h2 className="text-[30px] lg:text-[40px] mb-4 font-bold">
              Välkommen 👋
            </h2>

            <p className="mb-6">
              Du är bara en produkt ifrån oändlig framgång.{" "}
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute w-full h-[300px] lg:w-[520px] lg:h-[520px] xl:w-[460px] xl:h-[380px] -top-10 -right-2 lg:top-[1rem] xl:top-[-3rem] lg:-right-10 xl:right-[1rem] z-[-1]">
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
          <Title blackText={"Mina"} blueText={"Kurser"} className="text-left" />
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
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
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
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
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
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
