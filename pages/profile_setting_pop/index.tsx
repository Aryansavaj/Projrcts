import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
// import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Layout from "@/components/DashboardLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfileForm from "@/components/parts/profile_form";
import Popupform from "@/components/parts/popup_form";
import Popup from "@/components/parts/popup";
// import en from "@/locales/en";
// import sv from "@/locales/sv";
import { profile_pop } from "@/locales/sv/profile_setting_pop";
import { Popup_form } from "@/locales/sv/popup_form";

type Props = {};

export default function Profile_setting_pop({}: Props) {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "en" ? en : sv;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };
  return (
    <Layout headTitle={profile_pop.metaData.title}>
      <section className="grid grid-cols-4">
        <div className="pt-8 pl-8 pr-8 pb-0 bg-base-100 rounded-[3rem] gap-8 col-span-3">
          <section className=" bg-primary rounded-[2rem] text-white relative mb-5 isolate">
            <div className="w-full  p-7 rounded-tl-3xl rounded-bl-3xl lg:mr-auto mt-40 lg:mt-0">
              <ScrollReveal>
                <div className="grid grid-cols-2 gap-10 place-content-between">
                  <div className="form_benner_wrap">
                    <div className=" grid grid-cols-2 gap- place-content-between form_benner_logo first-letter border border-white rounded-2xl p-4">
                      <div className="bg-white p-1 rounded-full w-fit border border-white form_inner_logo ">
                        <div className="bg-white rounded-full w-fit p-3">
                          <Image
                            className="svg-primary"
                            src="/logo.svg"
                            alt="checkified"
                            height={40}
                            width={40}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 place-content-center">
                        <div className="form_benner_icon grid grid-cols-2 place-content-center rounded-lg w-fit mx-auto">
                          <div className="form_inner_icon_1 bg-primary rounded-lg py-2 px-3">
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M7.12498 17.4172H11.875C15.8333 17.4172 17.4166 15.8338 17.4166 11.8755V7.1255C17.4166 3.16717 15.8333 1.58383 11.875 1.58383H7.12498C3.16665 1.58383 1.58331 3.16717 1.58331 7.1255V11.8755C1.58331 15.8338 3.16665 17.4172 7.12498 17.4172Z"
                                stroke="white"
                                stroke-width="1.17003"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M7.12502 7.91716C7.99947 7.91716 8.70835 7.20827 8.70835 6.33382C8.70835 5.45937 7.99947 4.75049 7.12502 4.75049C6.25057 4.75049 5.54169 5.45937 5.54169 6.33382C5.54169 7.20827 6.25057 7.91716 7.12502 7.91716Z"
                                stroke="white"
                                stroke-width="1.17003"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M2.11371 15.0026L6.01662 12.3822C6.64204 11.9626 7.54454 12.0101 8.10662 12.493L8.36787 12.7226C8.98537 13.253 9.98288 13.253 10.6004 12.7226L13.8937 9.89638C14.5112 9.36596 15.5087 9.36596 16.1262 9.89638L17.4166 11.0047"
                                stroke="white"
                                stroke-width="1.17003"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="form_inner_icon_2 py-2 px-3">
                            <svg
                              width="19"
                              height="19"
                              viewBox="0 0 19 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.6251 4.7343C13.9889 4.47305 11.3368 4.33847 8.69262 4.33847C7.12512 4.33847 5.55762 4.41764 3.99012 4.57597L2.37512 4.7343"
                                stroke="white"
                                stroke-width="1.17003"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M6.72919 3.93453L6.90335 2.89745C7.03002 2.14537 7.12502 1.58328 8.46294 1.58328H10.5371C11.875 1.58328 11.9779 2.17703 12.0967 2.90537L12.2709 3.93453"
                                stroke="white"
                                stroke-width="1.17003"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M14.923 7.23575L14.4085 15.2078C14.3214 16.4507 14.2501 17.4166 12.0414 17.4166H6.95888C4.75013 17.4166 4.67888 16.4507 4.59179 15.2078L4.07721 7.23575"
                                stroke="white"
                                stroke-width="1.17003"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M8.17804 13.0627H10.8143"
                                stroke="white"
                                stroke-width="1.17003"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M7.52063 9.89575H11.479"
                                stroke="white"
                                stroke-width="1.17003"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/dashboard/pr_form.png"
                      alt="stats"
                      fill
                      className="absolute object-contain profile_pop_img"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
          <ProfileForm profile_pop={profile_pop.profileForm} />
          <div className="text-end">
            <button
              className="btn btn-primary w-full lg:w-fit mb-6 mt-6"
              onClick={handleOpenPopup}
              type="button"
            >
              Spara
            </button>
          </div>
        </div>
      </section>
      {/* <h1>My Page</h1> */}
      {/* <button onClick={handleOpenPopup}>Open Popup</button> */}
      <Popup isOpen={isOpen} onClose={handleClosePopup}>
        <Popupform popup_pass={Popup_form.profileForm} />
        <div className="text-end">
          <button
            className="btn btn-primary w-full lg:w-fit mb-2 mt-6 px-8 py-0 text-[14px]"
            type="button"
          >
            Spara
          </button>
        </div>
      </Popup>
    </Layout>
  );
}
