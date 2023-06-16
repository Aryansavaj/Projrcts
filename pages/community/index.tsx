import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MdKeyboardArrowRight } from "react-icons/md";
// import { useRouter } from "next/router";
import Titleh6 from "@/components/parts/Titleh6";
import { FaBook, FaClipboardList } from "react-icons/fa";
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
      <div className="flex flex-wrap">
        <div className="w-full max-w-full flex-0 lg:w-9/12">
          <section className="grid grid-cols-1 gap-6">
            <div className="p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 col-span-2">
              <ScrollReveal>
                <Titleh6
                  blackText="Skapa"
                  blueText="Inlägg"
                  className="text-left text-lg font-bold mb-4"
                />
              </ScrollReveal>

              <div className="grid grid-cols-6 gap-4">
                <div className="col-start-1 col-span-1 col-end-7">
                  <div className="mb-4 lg:mb-8 flex">
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
                  <button className="btn text-redlight-500 border-redlight bg-redlight text-sm pr-6 pl-6 font-medium">
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

                  <button className="btn ml-4 text-violet-500 border-violet bg-violet text-sm pr-6 pl-6 font-medium">
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
                  <button className="btn pr-6 pl-6 bg-primary text-sm font-medium btn-shadow text-white border-2 border-primary hover:bg-white hover:text-primary hover:border-primary">
                    Publicera
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="flex justify-end my-5">
            <div className="bg-white p-2 rounded-[8px]">
              <div className="bg-white h-10 flex items-center gap-2 py-4 px-4 rounded-[8px] text-xs border-filter text-151E3A">
                <div className="text-white">
                  <Image
                    src="/icons/community/filter-circle.svg"
                    alt="Mega menu icon"
                    className="object-cover"
                    width={22}
                    height={22}
                    priority
                  />
                </div>
                Sortera
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 mt-5">
            <div className="p-8 lg:p-8 bg-base-100 rounded-[28px] gap-8 col-span-2">
              <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div key="" className="flex text-center items-center">
                    <div className="avatar mb-6">
                      <div className="w-16 rounded-full overflow-hidden relative drop-shadow">
                        <Image
                          fill
                          alt="avatar"
                          className=""
                          src="/images/community/userimg.png"
                        />
                      </div>
                    </div>
                    <div className="ml-5">
                      <h3 className="text-base font-bold mb-1">
                        Paityn Curtis
                      </h3>
                      <p className="mb-6 flex text-xs font-medium justify-start items-center gap-1">
                        12 minuter sen
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-10">
                <ScrollReveal className="bg-white grid justify-between p-4 cursor-pointer transition-all duration-150">
                  <p className="text-subtitle mb-6 text-sm font-normal text-151E3A">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus purus at laoreet in. Vel varius sit ante consectetur
                    tincidunt sed nunc. Mauris interdum fames dui ut pretium
                    sed. Nullam enim quisque facilisis nunc.
                  </p>
                  <div className="w-full h-[200px] relative rounded-[20px] overflow-hidden mb-6 shadow-lg">
                    <Image
                      src="/images/community/article.png"
                      fill
                      alt="blog"
                      className="absolute object-cover"
                    />
                  </div>
                  <ScrollReveal>
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div key="" className="flex text-center items-center">
                        <div className="relative">
                          <Image
                            alt="avatar"
                            className="object-cover"
                            width={25}
                            height={25}
                            src="/icons/community/heart-svg.svg"
                          />
                        </div>

                        <div className="ml-3">
                          <h3 className="text-xs font-medium text-707BA0">
                            1000 Gillningar
                          </h3>
                        </div>
                      </div>

                      <div key="" className="flex text-center items-center">
                        <div className="relative">
                          <Image
                            alt="avatar"
                            className="object-cover"
                            width={25}
                            height={25}
                            src="/icons/community/message.svg"
                          />
                        </div>

                        <div className="ml-2">
                          <h3 className="text-xs font-medium text-707BA0">
                            100 Kommentarer
                          </h3>
                        </div>
                      </div>

                      <div key="" className="flex text-center items-center">
                        <div className="relative">
                          <Image
                            alt="avatar"
                            className="object-cover"
                            width={25}
                            height={25}
                            src="/icons/community/share.svg"
                          />
                        </div>

                        <div className="ml-3">
                          <h3 className="text-xs font-medium text-707BA0">
                            Dela
                          </h3>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  <hr className="my-8 hr-height" />

                  <div className="mb-4 lg:mb-8 flex">
                    <Image
                      src="/icons/community/userimg.png"
                      alt="Mega menu icon"
                      className="object-cover drop-shadow-xl"
                      width={60}
                      height={60}
                      priority
                    />
                    <input
                      type="text"
                      placeholder="Skriv din kommentar"
                      className="px-4 py-3 rounded-lg ml-6 bg-base-200 text-subtitle-dark focus:outline-primary w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-1">
                    <div
                      key=""
                      className="flex text-center items-start relative"
                    >
                      <div className="avatar mb-6">
                        <div className="w-16 rounded-full overflow-hidden relative drop-shadow">
                          <Image
                            fill
                            alt="avatar"
                            className=""
                            src="/images/community/userimg.png"
                          />
                        </div>
                      </div>
                      <div className="vertical-line"></div>
                      <div className="ml-5">
                        <h3 className="text-base text-left font-bold mb-1">
                          Paityn Curtis
                        </h3>
                        <p className="mb-6 flex text-xs font-medium justify-start items-center gap-1">
                          Jan 7, 2023
                        </p>
                        <p className="text-subtitle text-left mb-6 text-sm font-normal text-151E3A">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Risus purus at laoreet in. Vel varius sit ante
                          consectetur tincidunt sed nunc. Mauris interdum fames
                          dui ut pretium sed. Nullam enim quisque facilisis
                          nunc.
                        </p>
                        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4">
                          <div key="" className="flex text-center items-center">
                            <div className="relative">
                              <Image
                                alt="avatar"
                                className="object-cover"
                                width={25}
                                height={25}
                                src="/icons/community/heart-svg.svg"
                              />
                            </div>

                            <div className="ml-3">
                              <h3 className="text-xs font-medium text-707BA0">
                                1000 Gillningar
                              </h3>
                            </div>
                          </div>

                          <div key="" className="flex text-center items-center">
                            <div className="relative">
                              <Image
                                alt="avatar"
                                className="object-cover"
                                width={25}
                                height={25}
                                src="/icons/community/message.svg"
                              />
                            </div>

                            <div className="ml-2">
                              <h3 className="text-xs font-medium text-707BA0">
                                100 Kommentarer
                              </h3>
                            </div>
                          </div>

                          <div key="" className="flex text-center items-center">
                            <div className="ml-3">
                              <h3 className="text-sm font-medium text-primary">
                                Svara kommentar
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <div key="" className="flex text-center items-start">
                            <div className="avatar mb-6">
                              <div className="w-16"></div>
                            </div>
                            <div className="ml-5">
                              <h3 className="text-base text-left font-bold mb-1">
                                Paityn Curtis
                              </h3>
                              <p className="mb-6 flex text-xs font-medium justify-start items-center gap-1">
                                Jan 7, 2023
                              </p>
                              <p className="text-subtitle text-left mb-6 text-sm font-normal text-151E3A">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Risus purus at laoreet in. Vel
                                varius sit ante consectetur tincidunt sed nunc.
                                Mauris interdum fames dui ut pretium sed. Nullam
                                enim quisque facilisis nunc.
                              </p>
                              <div className="grid grid-cols-1 lg:grid-cols-3">
                                <div
                                  key=""
                                  className="flex text-center items-center"
                                >
                                  <div className="relative">
                                    <Image
                                      alt="avatar"
                                      className="object-cover"
                                      width={25}
                                      height={25}
                                      src="/icons/community/heart-filled.png"
                                    />
                                  </div>

                                  <div className="ml-3">
                                    <h3 className="text-xs font-medium text-707BA0">
                                      30 Gillningar
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
