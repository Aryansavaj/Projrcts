import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
// import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Layout from "@/components/DashboardLayout";
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import CacingOne from "@/components/graphic/CacingOne"
import FadeLogo from "@/components/graphic/FadeLogo"
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfilePayForm from "@/components/parts/ProfilePayment";
// import en from "@/locales/en";
// import sv from "@/locales/sv";
import { profilepaymentdata } from "@/locales/sv/profilepayment";

type Props = {};

export default function Profilepayment({}: Props) {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={profilepaymentdata.metaData.title}>
      <section className="mb-8 lg:mb-8">
        <div className="px-4 py-10 bg-base-100 rounded-[3rem] h-14 flex items-center gap-6 text-sm w-[350px]">
        <Link  href="/profile-setting">
          <div className="flex items-center gap-2 text-1xl font-semibold text_12_color">
            <div className="bg-base-200 text_12_color rounded-full  text-3xl px-2 py-2 font-bold w-[50px] text-center page_title-font-size">
              1
            </div>
            Information
          </div>
          </Link>
          <Link  href="/profile-setting-payment">
          <div className="flex items-center gap-2 text-1xl font-semibold ">
            <div className="bg-primary text-white rounded-full  text-3xl px-2 py-2 font-bold w-[50px] text-center page_title-font-size">
              2
            </div>
            Betalning
          </div>
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-6 profile_grid_set">
        <div className="p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 col-span-2 profile_grid_inner_set_1">
          <ScrollReveal>
            <Title
              blackText=""
              blueText="Kortuppgifter"
              className="mx-auto text-26 title-font-size"
            />
          </ScrollReveal>
          <ProfilePayForm profilepayData={profilepaymentdata.profilePayment} />
        </div>


        <div className="p-8 lg:p-8 bg-primary rounded-[28px] gap-8 profile_grid_inner_set_2">
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
                    <div className="mega-menu-list items-center flex gap-4 items-start  rounded-lg">
                      <div className="list-icon bg-base-200 rounded-lg">
                        <Image
                          src="/icons/pricing/2-premium.png"
                          alt="Mega menu icon"
                          className="object-contain"
                          width={55}
                          height={55}
                          priority
                        />
                      </div>

                      <div className="menu-content">
                        <h2 className="font-semibold text-left text-[14px]">Checkified</h2>
                        <h3 className="text-left text-[11px] font-medium">14 997 :-</h3>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="btn mr-2  w-full btn-primary items-center px-3 py-1 relative overflow-hidden"
                        >
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute absolute_obje_position">
                            <path d="M30.1011 16.0353C30.1011 23.7779 23.7942 30.0662 15.9998 30.0662C8.20542 30.0662 1.89844 23.7779 1.89844 16.0353C1.89844 8.29263 8.20542 2.00439 15.9998 2.00439C23.7942 2.00439 30.1011 8.29263 30.1011 16.0353Z" stroke="url(#paint0_linear_1_2)" stroke-width="3"/>
                            <defs>
                            <linearGradient id="paint0_linear_1_2" x1="15.9998" y1="-16.4602" x2="15.9998" y2="24.987" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                            </linearGradient>
                            </defs>
                          </svg>
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute absolute_obje_position2">
                                <ellipse cx="15.6013" cy="15.5309" rx="15.6013" ry="15.5309" fill="url(#paint0_linear_2_3)"/>
                                <defs>
                                <linearGradient id="paint0_linear_2_3" x1="18.2435" y1="45.5719" x2="18.2435" y2="7.36134" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="0.935323" stop-color="white" stop-opacity="0"/>
                                </linearGradient>
                                </defs>
                          </svg>


                          <div className="flex justify-center items-center w-full">
                            <div className="mr-1 text-white font-semibold font-sans relative text-[12px]">
                              Premium
                            </div>
                            <Image
                              src="/icons/profile-setting/chargeicon-1.png"
                              className="relative border buttton_img_pro_setting border-white rounded-full"
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

              <div className="bg-glass-border p-2 rounded-2xl">
              <div
                  key=""
                  className="flex justify-between items-center py-2 px-2 rounded-2xl"
                >
                  
                    <div className="list-icon rounded-lg bg-transparent">
                      <h2 className="font-semibold text-white pro_setting_side_font">Moms</h2>
                    </div>

                    <div>
                    <h2 className=" text-white pro_setting_side_font font-bold">14 997 :- </h2>
                      
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
                    <button className="btn hover:text-primary hover:border-primary btn-white text-[14px] py-2 px-6 pro_pri_btn font-bold">
                    14 997 :-
                    </button>
                      
                    </div>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
