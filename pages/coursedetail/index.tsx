import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Titlespan from "@/components/parts/Titlespan";
import Layout from "@/components/DashboardLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={t.pressData.metaData.title}>
      <section className="grid auto-rows-max grid-flow-col gap-6">
        <div className="p-8 lg:p-8 bg-base-100 rounded-[3rem] gap-8 row-end-3 row-span-2">
          <ScrollReveal>
            <div className="place-content-between flex items-baseline">
              <Titlespan
                blackText="Checkified - Nyckeln till Framgång"
                blueText=""
                className="text-left mb-4 text-xl font-bold"
              />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            <ScrollReveal className="bg-white grid justify-between cursor-pointer transition-all duration-150">
              <div>
                <div className="w-full h-[400px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/course-detail/video-bg.png"
                    fill
                    alt="blog"
                    className="absolute object-cover"
                  />
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <Image
                      src="/images/course-detail/play-circle.png"
                      alt="blog"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h1 className="font-semibold text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                  Mindset
                </h1>
                <p className="text-subtitle mb-3 text-sm font-medium">
                  Du kommer att lära dig varför rätt tänkesätt är avgörande för
                  framgång i dropshippingbranschen. Utveckla ett tillväxttänk
                  som kan hjälpa dig att övervinna utmaningar, lära av
                  misslyckanden och fortsätta att förbättras över tid. Du kommer
                  också att lära dig tekniker för att hantera stressen och
                  osäkerheten som ofta följer med entreprenörskap, inklusive
                  mindfulness och målsättningsstrategier.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <div className="p-8 lg:p-8 bg-base-100 rounded-[3rem]">
          <ScrollReveal className="flex justify-center">
            <Titlespan
              blackText="Modulöversikt"
              blueText=""
              className="text-center text-xl font-bold "
            />
          </ScrollReveal>
          <section className="my-6">
            <div className="grid grid-cols-1 gap-6">
              <ScrollReveal
                key=""
                className="flex justify-between items-center bg-play-tab py-4 px-4 rounded-2xl"
              >
                <Link key="" href="">
                  <div className="mega-menu-list items-center flex gap-3 items-start  rounded-lg">
                    <div className="list-icon bg-base-100 rounded-full play-video-sm">
                      <Image
                        src="/icons/course-detail/play-svg.svg"
                        alt="Mega menu icon"
                        className="object-contain"
                        width={20}
                        height={20}
                        priority
                      />
                    </div>

                    <div className="menu-content">
                      <h2 className="font-semibold text-left">Introduktion</h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
              <ScrollReveal
                key=""
                className="flex justify-between items-center bg-primary btn-shadow py-4 px-4 rounded-2xl play-tab-shadow"
              >
                <Link key="" href="">
                  <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                    <div className="list-icon bg-base-100 rounded-full play-video-sm">
                      <Image
                        src="/icons/course-detail/pause-svg.svg"
                        alt="Mega menu icon"
                        className="object-contain"
                        width={20}
                        height={20}
                        priority
                      />
                    </div>

                    <div className="menu-content">
                      <h2 className="font-semibold text-left text-white">
                        Mindset
                      </h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
              <ScrollReveal
                key=""
                className="flex justify-between items-center bg-play-tab py-4 px-4 rounded-2xl"
              >
                <Link key="" href="">
                  <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                    <div className="list-icon bg-base-100 rounded-full play-video-sm">
                      <Image
                        src="/icons/course-detail/play-svg.svg"
                        alt="Mega menu icon"
                        className="object-contain"
                        width={20}
                        height={20}
                        priority
                      />
                    </div>

                    <div className="menu-content">
                      <h2 className="font-semibold text-left">Affärsmodell</h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
              <ScrollReveal
                key=""
                className="flex justify-between items-center bg-play-tab py-4 px-4 rounded-2xl"
              >
                <Link key="" href="">
                  <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                    <div className="list-icon bg-base-100 rounded-full play-video-sm">
                      <Image
                        src="/icons/course-detail/play-svg.svg"
                        alt="Mega menu icon"
                        className="object-contain"
                        width={20}
                        height={20}
                        priority
                      />
                    </div>

                    <div className="menu-content">
                      <h2 className="font-semibold text-left">
                        Avslöjar Vinnande Produkt
                      </h2>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
