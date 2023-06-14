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
    <Admin_layout headTitle={profile_pop.metaData.title}>
      <section className="">
        <div className="bg-base-100 gap-8 col-span-3">
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
            <div className="p-8 lg:p-8 bg-base-100 rounded-[24px] gap-8 row-end-3 row-span-2">
              <h1>sefish</h1>
            </div>
        </div>
      </section>

    </Admin_layout>
  );
}
