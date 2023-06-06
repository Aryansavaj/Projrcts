import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
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
      <section className="mb-8 lg:mb-8"></section>

      <section className="grid grid-cols-3 gap-6">
        <div className="p-8 lg:p-8 bg-base-100 rounded-[3rem] gap-8 col-span-2">
          <ScrollReveal>
            <div style={{ opacity: 1, transform: "none" }}>
              <h1 className="text-[26px] lg:text-[26px] leading-[2rem] lg:leading-[3rem] font-bold mb-4 text-left">
                <span className="">Checkified - Nyckeln till Framgång</span>
                <span className="text-primary "> </span>
              </h1>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            <ScrollReveal className="bg-white grid justify-between hover:bg-base-200 p-4 cursor-pointer transition-all duration-150">
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
                <h1 className="font-bold text-xl mb-2 hover:text-primary hover:underline transition-all duration-200">
                  Mindset
                </h1>
                <p className="text-subtitle mb-3">
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

        <div className="p-8 lg:p-8 bg-base-100 rounded-[3rem] gap-8">
          <ScrollReveal>
            <Title
              blackText="Modulöversikt"
              blueText=""
              className="text-left text-[26px] lg:text-[26px]"
            />
          </ScrollReveal>
          <section className="relative mb-28">
            <div className="grid grid-cols-1 gap-6 mb-20">
              
                <ScrollReveal key="" className="flex justify-between items-center bg-base-200 py-4 px-4 hover:bg-base-200 rounded-2xl job-openings-shadow">
                  <Link key="" href="">
                  <div className="mega-menu-list items-center flex gap-3 items-start  rounded-lg">
                        <div className="list-icon bg-base-200 rounded-lg">
                          <Image
                            src="/icons/courier-detail/play-circle.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={40}
                            height={40}
                            priority
                          />
                        </div>
                        
                        <div className="menu-content">
                          <h2 className="font-semibold text-left">Introduktion</h2>
                        </div>
                      </div>
                  </Link>
                </ScrollReveal>
                <ScrollReveal key="" className="flex justify-between items-center bg-base-200 py-4 px-4 hover:bg-base-200 rounded-2xl job-openings-shadow">
                  <Link key="" href="">
                  <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                        <div className="list-icon bg-base-200 rounded-lg">
                          <Image
                            src="/icons/courier-detail/play-circle.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={40}
                            height={40}
                            priority
                          />
                        </div>
                        
                        <div className="menu-content">
                          <h2 className="font-semibold text-left">Mindset</h2>
                        </div>
                      </div>
                  </Link>
                </ScrollReveal>
                <ScrollReveal key="" className="flex justify-between items-center bg-base-200 py-4 px-4 hover:bg-base-200 rounded-2xl job-openings-shadow">
                  <Link key="" href="">
                  <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                        <div className="list-icon bg-base-200 rounded-lg">
                          <Image
                            src="/icons/courier-detail/play-circle.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={40}
                            height={40}
                            priority
                          />
                        </div>
                        
                        <div className="menu-content">
                          <h2 className="font-semibold text-left">Affärsmodell</h2>
                        </div>
                      </div>
                  </Link>
                </ScrollReveal>
                <ScrollReveal key="" className="flex justify-between items-center bg-base-200 py-4 px-4 hover:bg-base-200 rounded-2xl job-openings-shadow">
                  <Link key="" href="">
                  <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                        <div className="list-icon bg-base-200 rounded-lg">
                          <Image
                            src="/icons/courier-detail/play-circle.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={40}
                            height={40}
                            priority
                          />
                        </div>
                        
                        <div className="menu-content">
                          <h2 className="font-semibold text-left">Avslöjar Vinnande Produkt</h2>
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
