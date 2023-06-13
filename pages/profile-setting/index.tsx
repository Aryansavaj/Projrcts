import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
// import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Layout from "@/components/DashboardLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfileForm from "@/components/parts/ProfileForm";
// import en from "@/locales/en";
// import sv from "@/locales/sv";
import { profiledata } from "@/locales/sv/profilesetting";

type Props = {};

export default function Profilesetting({}: Props) {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={profiledata.metaData.title}>
      <section className="mb-8 lg:mb-8">
        <div className="px-4 py-10 bg-base-100 rounded-[3rem] h-14 flex items-center gap-6 text-sm w-[350px]">
        <Link  href="/profile-setting">
          <div className="flex items-center gap-2 text-1xl font-bold">
            <div className="bg-primary text-white rounded-full btn-shadow text-3xl px-2 py-2 font-bold w-[50px] text-center">
              1
            </div>
            Information
          </div>
          </Link>
          <Link  href="/profile-setting-payment">
          <div className="flex items-center gap-2 text-1xl">
            <div className="bg-primary text-white rounded-full btn-shadow text-3xl px-2 py-2 font-bold w-[50px] text-center">
              2
            </div>
            Betalning
          </div>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-6">
        <div className="p-8 lg:p-8 bg-base-100 rounded-[3rem] gap-8 col-span-2">
          <ScrollReveal>
            <Title
              blackText="Personliga"
              blueText="Uppgifter"
              className="mx-auto title-font-size"
            />
          </ScrollReveal>
          <ProfileForm profileData={profiledata.profileForm} />
        </div>

        <div className="p-8 lg:p-8 bg-primary rounded-[3rem] gap-8">
          <ScrollReveal>
            <Title
              blackText={"Din Kundvagn"}
              blueText=""
              className="text-left text-26 text-white title-font-size"
            />
          </ScrollReveal>
          <section className="relative mb-28">
            <div className="grid grid-cols-1 gap-6 mb-20">
              <div className="bg-glass-light p-3 rounded-2xl">
                <div className="flex justify-between items-center bg-base-200 py-4 px-4 hover:bg-base-200 rounded-2xl job-openings-shadow">
                  <Link key="" href="">
                    <div className="mega-menu-list items-center flex gap-3 items-start  rounded-lg">
                      <div className="list-icon bg-base-200 rounded-lg">
                        <Image
                          src="/icons/pricing/2-premium.png"
                          alt="Mega menu icon"
                          className="object-contain"
                          width={40}
                          height={40}
                          priority
                        />
                      </div>

                      <div className="menu-content">
                        <h2 className="font-semibold text-left text-[14px]">Checkified</h2>
                        <h3 className="font-semibold text-left text-[11px]">14 997 :-</h3>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="btn mr-2  w-full btn-primary items-center py-1"
                        >
                          <div className="flex justify-center items-center w-full">
                            <div className="mr-1 text-white font-semibold font-sans relative text-[12px]">
                              Premium
                            </div>
                            <Image
                              src="/icons/profile-setting/chargeicon-1.png"
                              className="relative border p-1 border-white rounded-full"
                              width="32"
                              height="32"
                              alt="Facebook"
                              priority
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="bg-glass rounded-2xl">
                <div key="" className="py-2 px-2">
                  <div className=" flex relative">
                    <input
                      type="text"
                      placeholder="Rabattkod"
                      className="px-4 py-3 rounded-lg mr-2 text-subtitle-dark focus:outline-primary bg-transparent placeholder-gray-200 text-sm"
                    />
                    <button className="btn btn-primary absolute right-0 text-white hover:bg-white hover:text-primary hover:border-primary text-sm">
                      Tillämpa
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-glass-border p-3 rounded-2xl">
              <div
                  key=""
                  className="flex justify-between items-center py-2 px-2 rounded-2xl"
                >
                  
                    <div className="list-icon rounded-lg bg-transparent">
                      <h2 className="font-semibold text-white pro_setting_side_font">Moms</h2>
                    </div>

                    <div>
                    <h2 className="font-semibold text-white pro_setting_side_font">14 997 :- </h2>
                      
                    </div>
                  
                </div>
                <div
                  key=""
                  className="flex justify-between items-center bg-white-gradient py-2 px-2 hover:bg-base-200 rounded-2xl"
                >
                  
                    <div className="list-icon rounded-lg bg-transparent">
                      <h2 className="font-semibold text-primary text-sm">Totalt</h2>
                    </div>

                    <div>
                    <button className="btn hover:text-primary hover:border-primary btn-white text-[14px]">
                    14 997 :-
                    </button>
                      
                    </div>
                  
                </div>
              </div>

              <div className="bg-glass-light p-3 rounded-2xl">
                <div className="flex items-center py-1 px-1 justify-center">
                  <Link key="" href="">
                    <div className="items-center flex">
                      <h2 className="font-bold text-center text-white text-[16px]">
                        Fortsätt till Betalning
                      </h2>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
