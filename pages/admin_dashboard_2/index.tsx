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
import { AiOutlinePlus } from "react-icons/ai";
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
    { title: 'Checkified - Nyckeln till Framgång', count: 250, date: 'Jan 7, 2023', imageUrl: '/images/../card_list4.png' },
    { title: 'Checkified - Nyckeln till Framgång', count: 250, date: 'Jan 7, 2023', imageUrl: '/images/../card_list4.png' },
    { title: 'Checkified - Nyckeln till Framgång', count: 250, date: 'Jan 7, 2023', imageUrl: '/images/../card_list4.png' },
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
              <div className="p-8 bg-base-100 rounded-[24px] admin2_list_wrap">
                <div className="admin2_content_header flex justify-between items-center  mb-6">
                  <div className="admin2_content_title form-text-color font-bold text-lg"><h2><span>150 </span>Active Courses</h2></div>
                  <div className="admin2_content_nav">
                    <div className="flex gap-3 justify-between items-center">
                      <h3 className="text-sm text-707BA0 font-medium">View by</h3>
                      <div className="form_benner_icon grid grid-cols-2 place-content-center rounded-lg w-fit mx-auto admin2_header_icon">
                          <div className="form_inner_icon_1 bg-primary rounded-lg py-2 px-3">
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.74 17.791L13.94 17.791" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12.791L15.68 12.791" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.74 7.79102L13.94 7.79102" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 15.791L22 9.79101C22 4.79101 20 2.79101 15 2.79102L9 2.79102C4 2.79102 2 4.79102 2 9.79102L2 15.791C2 20.791 4 22.791 9 22.791L15 22.791C20 22.791 22 20.791 22 15.791Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                          </div>
                          <div className="form_inner_icon_2 py-2 px-3">
                          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22.791H15C20 22.791 22 20.791 22 15.791V9.79102C22 4.79102 20 2.79102 15 2.79102H9C4 2.79102 2 4.79102 2 9.79102V15.791C2 20.791 4 22.791 9 22.791Z" stroke="#AFBAD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17.791H14C15.65 17.791 17 16.441 17 14.791V10.791C17 9.14102 15.65 7.79102 14 7.79102H10C8.35 7.79102 7 9.14102 7 10.791V14.791C7 16.441 8.35 17.791 10 17.791Z" stroke="#AFBAD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7.79102V17.791" stroke="#AFBAD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 12.791H17" stroke="#AFBAD2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                          </div>
                      </div>
                      <div className="admin2_add_btn text-sm font-semibold text-white flex items-center">
                        <button className="btn btn-primary text-sm font-semibold shadow-none">
                          <AiOutlinePlus className="text-2xl"/> Add Course
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
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
      </section>

    </Admin_layout>
  );
}
