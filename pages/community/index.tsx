import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
// import { useRouter } from "next/router";
import Title from "@/components/parts/Title";
import Layout from "@/components/DashboardLayout";
import CacingOne from "@/components/graphic/CacingOne";
import ScrollReveal from "@/components/transition/ScrollReveal";
import ProfilePayForm from "@/components/parts/ProfilePayment";
// import en from "@/locales/en";
// import sv from "@/locales/sv";
import { profilepaymentdata } from "@/locales/sv/profilepayment";

type Props = {};

export default function Profilepayment({}: Props) {
  // const router = useRouter();
  // const { locale } = router;
  // const t = locale === "en" ? en : sv;

  return (
    <Layout headTitle={profilepaymentdata.metaData.title}>
      <section className="mb-8 lg:mb-8"></section>

      <section className="grid grid-cols-1 gap-6">
        <div className="p-8 lg:p-8 bg-base-100 rounded-[3rem] gap-8 col-span-2">
          <ScrollReveal>
            <Title
              blackText="Skapa"
              blueText="Inlägg"
              className="mx-auto text-26"
            />
          </ScrollReveal>

          <div className="grid grid-cols-6 gap-4">
            <div className="col-start-1 col-span-1 col-end-7">
              <div className="mb-4 lg:mb-10 flex">
                <Image
                  src="/icons/community/checkicon.png"
                  alt="Mega menu icon"
                  className="object-contain drop-shadow-xl"
                  width={60}
                  height={60}
                  priority
                />
                <input
                  type="text"
                  placeholder="Skriv något..."
                  className="px-4 py-3 rounded-lg ml-6 bg-base-200 text-subtitle-dark focus:outline-primary w-full"
                />
              </div>
            </div>

            <div className="col-start-1 col-span-2">
              <button className="btn hover:bg-white hover:text-primary hover:border-primary bg-rose-100 text-red-500 border-rose-100">
                <Image
                  src="/icons/community/video.png"
                  alt="Mega menu icon"
                  className="object-contain mr-1"
                  width={25}
                  height={25}
                  priority
                />
                Video
              </button>

              <button className="btn hover:bg-white ml-4 hover:text-primary hover:border-primary text-violet-700 bg-violet-100 border-violet-100">
                <Image
                  src="/icons/community/gallery.png"
                  alt="Mega menu icon"
                  className="object-contain mr-1"
                  width={25}
                  height={25}
                  priority
                />
                Bilder
              </button>
            </div>
            <div className="col-span col-end-7 flex justify-end">
              <button className="btn bg-primary btn-shadow text-white border-2 border-white hover:bg-white hover:text-primary hover:border-primary">
                Publicera
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 mt-5">
        <div className="p-8 lg:p-8 bg-base-100 rounded-[3rem] gap-8 col-span-2">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div key="" className="flex text-center items-center">
                <div className="avatar mb-6">
                  <div className="w-24 rounded-full overflow-hidden relative">
                    <Image
                      fill
                      alt="avatar"
                      src="/images/community/userimg.png"
                    />
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold mb-1">Paityn Curtis</h3>
                  <p className="mb-6 flex justify-center items-center gap-1">
                    12 minuter sen
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
            <ScrollReveal className="bg-white grid justify-between p-4 cursor-pointer transition-all duration-150">
              <div>
                <p className="text-subtitle mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
                  purus at laoreet in. Vel varius sit ante consectetur tincidunt
                  sed nunc. Mauris interdum fames dui ut pretium sed. Nullam
                  enim quisque facilisis nunc.
                </p>
                <div className="w-full h-[400px] relative rounded-lg overflow-hidden mb-6 shadow-lg">
                  <Image
                    src="/images/community/article.png"
                    fill
                    alt="blog"
                    className="absolute object-cover"
                  />
                </div>
                <ScrollReveal>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div key="" className="flex text-center items-center">
                      <div className="avatar mb-6">
                        <div className="w-24 rounded-full overflow-hidden relative">
                          <Image
                            fill
                            alt="avatar"
                            src="/images/community/userimg.png"
                          />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-bold mb-1">
                          Paityn Curtis
                        </h3>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
