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
                  <div>
                    
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
