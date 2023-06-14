import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
// import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Admin_layout from "@/components/AdminLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfileForm from "@/components/parts/profile_form";
import Popupform from "@/components/parts/popup_form";
import Popup from "@/components/parts/popup";
import AdminList from "@/components/parts/Admin_list"
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

  const adminItems = [
    { title: 'Item 1', count: 5, date: '2023-06-01', imageUrl: 'https://example.com/image1.jpg' },
    { title: 'Item 2', count: 10, date: '2023-06-02', imageUrl: 'https://example.com/image2.jpg' },
    { title: 'Item 3', count: 7, date: '2023-06-03', imageUrl: 'https://example.com/image3.jpg' },
  ];
  return (
    <Admin_layout headTitle={profile_pop.metaData.title}>
      <section className="">
        <div className="gap-8 col-span-3">
            <div className="p-8 bg-primary flex flex-col admin2_banner">
                <h1 class="text-4xl text-white font-semibold Admin2_title">Manage Your Course</h1>
                <div className="admin2_nav_button">
                    <button className="btn  w-full lg:w-fit mb-8 text-white border-none font-medium text-sm pt-0 pb-0 btn-height-rem admin2_btn">
                    Active
                    </button>
                    <button className="btn btn-white w-full lg:w-fit text-primary mb-8 ml-2 mr-2 text-sm font-medium pt-0 pb-0 btn-height-rem">
                    Draft
                    </button>
                    <button className="btn  w-full lg:w-fit mb-8 text-white border-none font-medium text-sm pt-0 pb-0 btn-height-rem admin2_btn">
                    Paused
                    </button>
                </div>
            </div>
            <div className="p-8">
              <div className="p-8 bg-base-100 rounded-[24px]">
                <div className="admin2_content_header flex justify-between items-center">
                  <div className="admin2_content_title"><h2><span>150 </span>Active Courses</h2></div>
                  <div className="admin2_content_nav">
                    <div className="flex gap-3 justify-between items-center">
                      <h3>View by</h3>
                      <div className="form_benner_icon grid grid-cols-2 place-content-center rounded-lg w-fit mx-auto">
                          <div className="form_inner_icon_1 bg-primary rounded-lg py-2 px-3">
                            <svg
                              width="21"
                              height="21"
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
                              width="21"
                              height="21"
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
                      <div className="admin2_add_btn">
                        Add Course
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  {adminItems.map((item, index) => (
                    <AdminList
                      key={index}
                      title={item.title}
                      count={item.count}
                      date={item.date}
                      imageUrl={item.imageUrl}
                    />
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>

    </Admin_layout>
  );
}
