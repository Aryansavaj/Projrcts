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
      title: "Item 1",
      count: 5,
      date: "2023-06-01",
      imageUrl: "/images/../card-1.png",
    },
    {
      title: "Item 2",
      count: 10,
      date: "2023-06-02",
      imageUrl: "/images/../card-1.png",
    },
    {
      title: "Item 3",
      count: 7,
      date: "2023-06-03",
      imageUrl: "/images/../card-1.png",
    },
  ];
  return (
    <Admin_layout headTitle={profile_pop.metaData.title}>
      <section className="admin_section">
        <div className="flex flex-wrap">
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
                  <h2 className="text-[35px] lg:text-[35px] mb-4 font-semibold">
                    Welcome Dominic 👋
                  </h2>

                  <p className="mb-6 font-medium text-sm">
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
                          className="input bg-base-100 w-[18rem]"
                        />
                        <button className="btn bg-primary rounded-full text-white border-2 border-white hover:bg-white hover:text-primary hover:border-primary">
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
                <div className="bg-white h-26 flex items-center gap-2 py-6 px-6 rounded-full text-sm">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <FaBook size={40} />
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
      </section>
    </Admin_layout>
  );
}
