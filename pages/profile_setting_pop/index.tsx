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
          <ProfileForm profileData={profiledata.profileForm} />
        </div>
      </section>
    </Layout>
  );
}
