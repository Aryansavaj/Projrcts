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

      <section className="grid grid-cols-3 gap-6 profile_grid_set">
        <div className="p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 col-span-2 h-2/3 profile_grid_inner_set_1">
          <ScrollReveal>
            <Title
              blackText="Personliga"
              blueText="Uppgifter"
              className="mx-auto title-font-size"
            />
          </ScrollReveal>
          <ProfileForm profileData={profiledata.profileForm} />
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
                    <div className="mega-menu-list items-center flex gap-3 items-start  rounded-lg">
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
                        <h3 className="font-semibold text-left text-[11px]">14 997 :-</h3>
                      </div>

                      <div>
                        <button
                          type="button"
                          className="btn mr-2  w-full btn-primary items-center px-3 py-1"
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
                <div key="" className="py-2 px-4">
                  <div className=" flex relative">
                    <input
                      type="text"
                      placeholder="Rabattkod"
                      className="py-3 rounded-lg text-subtitle-dark focus:outline-primary bg-transparent placeholder-gray-200 text-sm"
                    />
                    <button className="btn btn-primary right-0 text-white hover:bg-white hover:text-primary hover:border-primary text-sm">
                      Tillämpa
                    </button>
                  </div>
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
              <div class="flex justify-center content-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3939 5.74002L13.1818 3.50624C12.4271 3.18282 11.5729 3.18282 10.8182 3.50624L5.60608 5.74002C5.2384 5.8976 5 6.25914 5 6.65917V11.9121C5 13.8498 5.93579 15.6682 7.51257 16.7945L10.8375 19.1694C11.5329 19.6661 12.4671 19.6661 13.1625 19.1694L16.4874 16.7945C18.0642 15.6682 19 13.8498 19 11.9121V6.65917C19 6.25914 18.7616 5.8976 18.3939 5.74002ZM15.7809 9.62469C16.1259 9.19343 16.056 8.56414 15.6247 8.21913C15.1934 7.87412 14.5641 7.94404 14.2191 8.37531L10.9171 12.5029L9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L9.89788 14.3121C10.53 14.9443 11.5714 14.8866 12.1298 14.1885L15.7809 9.62469Z" fill="white"/>
              </svg>
              <p class="text-[11px] text-white self-center">Krypterade och Säkra Betalningar</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
}
