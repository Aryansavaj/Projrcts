import React from "react";
import Image from "next/image";
import { HiOutlineClock } from "react-icons/hi";

import { useRouter } from "next/router";

import Title from "@/components/parts/Title";
import Layout from "@/components/DashboardLayout";
import FadeLogo from "@/components/graphic/FadeLogo";
import ScrollReveal from "@/components/transition/ScrollReveal";
import { Progress, Typography } from "@material-tailwind/react";
import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {};

export default function Dashboard({}: Props) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={t.pressData.metaData.title}>
      <section className="mb-8 lg:mb-8"></section>
      <section className="p-8 lg:p-12 bg-base-100 rounded-[3rem] items-center lg:flex-row gap-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 place-content-between ">
            <Title blackText={"Kursplaner"} className="text-left" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
            <div>
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/dashboard/image-1.png"
                  fill
                  alt="blog"
                  className="absolute object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-l mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
            <div>
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/dashboard/image-1.png"
                  fill
                  alt="blog"
                  className="absolute object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-l mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
            <div>
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/dashboard/image-1.png"
                  fill
                  alt="blog"
                  className="absolute object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-l mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
            <div>
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/dashboard/image-1.png"
                  fill
                  alt="blog"
                  className="absolute object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-l mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
            <div>
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/dashboard/image-1.png"
                  fill
                  alt="blog"
                  className="absolute object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-l mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
            <div>
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/dashboard/image-1.png"
                  fill
                  alt="blog"
                  className="absolute object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-l mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
            <div>
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/dashboard/image-1.png"
                  fill
                  alt="blog"
                  className="absolute object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-l mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
          <ScrollReveal className="bg-white grid justify-between rounded-lg p-4 cursor-pointer transition-all duration-150">
            <div>
              <div className="w-full h-[150px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/images/dashboard/image-1.png"
                  fill
                  alt="blog"
                  className="absolute object-cover"
                />
              </div>
              <div className="w-full">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="blue" variant="h6">
                    50%
                  </Typography>
                  <Typography color="blue" variant="h6">
                    Completed
                  </Typography>
                </div>
                <Progress value={50} />
              </div>
              <h1 className="font-bold text-l mb-2 hover:text-primary hover:underline transition-all duration-200">
                Checkified - Nyckeln till Framgång
              </h1>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
