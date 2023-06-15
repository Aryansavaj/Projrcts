import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Admin_layout from "@/components/AdminLayout";
import FadeLogo from "@/components/graphic/FadeLogo";
import { FaBook, FaClipboardList } from "react-icons/fa";
import HalfCircle from "@/components/graphic/HalfCircle";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import AdminList from "@/components/parts/Admin_list";
import { AiOutlinePlus } from "react-icons/ai";

// import en from "@/locales/en";
// import sv from "@/locales/sv";
import { profile_pop } from "@/locales/sv/profile_setting_pop";

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
    {
      title: "Checkified - Key To Success",
      count: 250,
      date: "Jan 7, 2023",
      imageUrl: "/images/../card_list4.png",
    },
    {
      title: "Checkified - Nyckeln till Framgång",
      count: 250,
      date: "Jan 7, 2023",
      imageUrl: "/images/../card_list4.png",
    },
    {
      title: "Checkified - Key To Success",
      count: 250,
      date: "Jan 7, 2023",
      imageUrl: "/images/../card_list4.png",
    },
    {
      title: "Checkified - Nyckeln till Framgång",
      count: 250,
      date: "Jan 7, 2023",
      imageUrl: "/images/../card_list4.png",
    },
    {
      title: "Checkified - Key To Success",
      count: 250,
      date: "Jan 7, 2023",
      imageUrl: "/images/../card_list4.png",
    },
  ];
  return (
    <Admin_layout headTitle={profile_pop.metaData.title}>
      <section className="admin_section mb-14">
        <div className="flex flex-wrap pl-8 pr-8 mt-14">
          <div className="w-full max-w-full flex flex-0">
            <section className="bg-primary rounded-[28px] py-12 lg:py-5 text-white relative mb-10 isolate lg:w-8/12 z-10">
              <div className="w-full lg:w-7/12  p-8 lg:px-8 lg:py-[29px] lg:mr-auto mt-40 lg:mt-0">
                <FadeLogo
                  positionClassName="left-[-2rem] bottom-[-2rem] absolute"
                  svgClassname="svg-white-opacity"
                  sizeClassName="w-[12rem] h-[12rem]"
                  className="z-[-1]"
                />

                <ScrollReveal>
                  <h2 className="text-[35px] lg:text-[35px] mb-2 font-medium">
                    Welcome Dominic 👋
                  </h2>

                  <p className="mb-8 font-normal text-sm">
                    Checkified University
                  </p>

                  <div className="form-control">
                    <div className="relative">
                      <div className="bg-base-100 w-full flex items-center rounded-corner">
                        <div className="search_svg rounded-full flex item-center justify-center ml-2.5">
                          <Image
                            src="/images/Adminimg/search-normal.svg"
                            width={20}
                            height={20}
                            alt="avatar"
                            className="rounded-corner"
                          />
                        </div>

                        <input
                          type="text"
                          placeholder="Try to find..."
                          className="input bg-base-100 w-[17.5rem]"
                        />
                        <button className="btn hover-none bg-primary rounded-full text-white border-2 border-white px-6">
                          <Image
                            src="/images/Adminimg/arrow-right.svg"
                            width={25}
                            height={25}
                            alt="avatar"
                            className="rounded-corner"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="absolute bottom-14 -right-16 bg-glass p-3 rounded-full circle-shadow">
                <div className="bg-white h-26 flex items-center gap-2 py-6 px-6 rounded-full text-sm p-5">
                  <div className="bg-primary text-white p-3 rounded-full">
                  <Image
                            src="/images/Adminimg/Group.svg"
                            width={50}
                            height={50}
                            alt="avatar"
                            className="rounded-corner"
                          />
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-base-100 rounded-r-[28px] py-12 lg:py-5 text-white relative mb-10 isolate z-0 ml-[-3rem]">
              <div className="w-[470px] p-8 lg:px-8 lg:py-[29px] lg:mr-auto mt-40 lg:mt-0">
                <Image
                  src="/images/Adminimg/admin_calender.svg"
                  fill
                  alt="avatar"
                  className="calender-img"
                />
              </div>
            </section>
          </div>
        </div>

        <div className="pl-8 pr-8">
          <div className="flex flex-wrap p-8 bg-base-100 rounded-[24px]">
            <div className="w-full max-w-full flex flex-0">
              <section className="text-white relative mb-10 isolate lg:w-5/12 z-10">
                <div className="w-full  lg:mr-auto mt-40 lg:mt-0">
                  <ScrollReveal>
                    <h2 className="text-[35px] lg:text-[35px] mb-2 font-semibold text-151E3A">
                      Latest Course
                    </h2>

                    <p className="mb-6 font-medium text-sm text-707BA0">
                      Upload Your Course
                    </p>
                  </ScrollReveal>
                </div>
                <div>
                  <div className="bg-EDF5FE rounded-[25px]">
                    <div className="border-dashed border-[1.5px] rounded-[25px]">
                      <div className="flex flex-col gap-8">
                        <div>
                          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8471 25.7373C16.1905 25.8172 16.222 26.267 15.8875 26.3785V26.3785L13.9125 27.0285C8.95 28.6285 6.3375 27.291 4.725 22.3285L3.125 17.391C1.525 12.4285 2.85 9.80351 7.8125 8.20351L8.7215 7.90248C9.12436 7.76906 9.51292 8.17178 9.39223 8.57864C9.29432 8.90866 9.20199 9.25862 9.1125 9.62851L7.8875 14.866C6.5125 20.7535 8.525 24.0035 14.4125 25.4035L15.8471 25.7373Z" fill="#0083FF"/>
                            <path d="M21.4625 4.80351L19.375 4.31601C15.2 3.32851 12.7125 4.14101 11.25 7.16601C10.875 7.92851 10.575 8.85351 10.325 9.91601L9.1 15.1535C7.875 20.3785 9.4875 22.9535 14.7 24.191L16.8 24.691C17.525 24.866 18.2 24.9785 18.825 25.0285C22.725 25.4035 24.8 23.5785 25.85 19.066L27.075 13.841C28.3 8.61601 26.7 6.02851 21.4625 4.80351ZM19.1125 17.4535C19 17.8785 18.625 18.1535 18.2 18.1535C18.125 18.1535 18.05 18.141 17.9625 18.1285L14.325 17.2035C13.825 17.0785 13.525 16.566 13.65 16.066C13.775 15.566 14.2875 15.266 14.7875 15.391L18.425 16.316C18.9375 16.441 19.2375 16.9535 19.1125 17.4535ZM22.775 13.2285C22.6625 13.6535 22.2875 13.9285 21.8625 13.9285C21.7875 13.9285 21.7125 13.916 21.625 13.9035L15.5625 12.366C15.0625 12.241 14.7625 11.7285 14.8875 11.2285C15.0125 10.7285 15.525 10.4285 16.025 10.5535L22.0875 12.091C22.6 12.2035 22.9 12.716 22.775 13.2285Z" fill="#0083FF"/>
                          </svg>
                        </div>
                        <div><h4 className="form-text-color text-[18px] font-semibold">Get Started</h4></div>
                          <div>
                            <button className="btn btn-primary text-sm font-semibold shadow-none">
                                  <AiOutlinePlus className="text-2xl"/> Add Course
                            </button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="w-full">
                <div className="bg-base-200 p-1 px-4 rounded-[24px]">
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
        </div>
      </section>
    </Admin_layout>
  );
}
