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

      <section className="">
        <div className="p-8 lg:p-8 bg-base-100 rounded-[3rem] gap-8 ">
            <section className=" bg-primary rounded-[2rem] py-12 lg:py-16 text-white relative mb-16 isolate">
        <div className="w-full lg:w-2/5  p-8 lg:px-16 lg:py-10 rounded-tl-3xl rounded-bl-3xl backdrop-blur-xl lg:mr-auto mt-40 lg:mt-0">

          <ScrollReveal>
            <div className="form_benner_wrap">
                <div className="form_benner_logo">
                    <div className="bg-white p-1 rounded-full w-fit border border-white">
                        <div className="bg-white rounded-full w-fit p-2">
                            <Image
                                className="svg-primary"
                                src="/logo.svg"
                                alt="checkified"
                                height={50}
                                width={50}
                                />
                        </div>
                    </div>
                </div>
                <div className="form_benner_icon"></div>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute w-full h-[300px] lg:w-[520px] lg:h-[520px] xl:w-[460px] xl:h-[380px] -top-10 -right-2 lg:top-[1rem] xl:top-[-3rem] lg:-right-10 xl:right-[1rem] z-[-1]">
          <Image
            src="/images/dashboard/pr_form.png"
            alt="stats"
            fill
            className="absolute object-contain"
          />
        </div>
      </section>
          <ProfileForm profileData={profiledata.profileForm} />
            <div className="text-end">
                <button className="btn btn-primary w-full lg:w-fit mb-6 mt-6">
                    Spara 
                </button>
            </div>
        </div>
      </section>
    </Layout>
  );
}
