import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"

import Layout from "@/components/Layout"
import Title from "@/components/parts/Title"
import ButtonArrow from "@/components/parts/ButtonArrow"
import ShieldBadge from "@/components/graphic/ShieldBadge"
import UserBadge from "@/components/graphic/UserBadge"
import BlurCircle from "@/components/graphic/BlurCircle"
import LineGraphic from "@/components/graphic/LineGraphic"
import CacingOne from "@/components/graphic/CacingOne"
import CacingTwo from "@/components/graphic/CacingTwo"
import FadeLogo from "@/components/graphic/FadeLogo"
import ScrollReveal from "@/components/transition/ScrollReveal"

import en from "@/locales/en"
import sv from "@/locales/sv"
import Link from "next/link"

type Props = {}

export default function University({}: Props) {
  const router = useRouter()
  const { locale } = router
  const t = locale === "en" ? en : sv

  return (
    <Layout headTitle={t.universityData.metaData.title}>
      <section className="relative py-6 lg:py-12 mb-16">
        <BlurCircle positionClassName="left-[-12rem] top-20" size="lg" />
        <LineGraphic
          positionClassname="right-[-12rem] 2xl:right-[-10rem] top-[-30px]"
          className="svg-white"
        />
        <ShieldBadge positionClassName="top-[1rem] left-[-1rem] lg:left-[8rem]" />
        <UserBadge
          positionClassName="top-0 lg:top-[1rem] right-[-1rem] lg:right-[12rem]"
          colorClassName="bg-white text-primary"
        />
        <CacingOne
          positionClassName="left-[-16rem] 2xl:left-[-12rem] rotate-[-40deg] top-[20rem] lg:top-[14rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.universityData.superiorBlackTitle}
            blueText={t.universityData.superiorBlueTitle}
            isBlock
            className="mx-auto text-center"
          />
          <p className="text-subtitle text-center max-w-xl mx-auto">
            {t.universityData.superiorSubtitle}
          </p>
        </ScrollReveal>
        <div className="relative mt-[260px] lg:mt-[400px] mastery-ecommerce-container">
          <Image
            src="/images/university/flying-men.png"
            alt="flying men"
            height={520}
            width={520}
            className="absolute object-contain mx-auto top-[-16rem] md:top-[-18rem] lg:-top-[20rem] md:scale-[0.7] lg:scale-100 left-1/2 transform -translate-x-1/2 z-[1]"
          />
          <div className="bg-primary flex flex-col gap-2 md:gap-10 lg:flex-row text-white p-8 lg:pt-20 lg:pb-10 lg:px-10 rounded-3xl lg:rounded-[3rem] isolate">
            <ScrollReveal className="w-full lg:w-3/5">
              <Title
                blackText={t.universityData.masteringTitle}
                className="text-left"
              />
              <p className="text-left mb-4">
                {t.universityData.masteringSubtitleFirst}
              </p>
              <p className="text-left">
                {t.universityData.masteringSubtitleSecond}
              </p>
              <ButtonArrow href="/register" isReverse className="mt-10 z-10">
                {t.universityData.masteringButton}
              </ButtonArrow>
            </ScrollReveal>

            <div className="h-[300px] lg:mt-0 w-full lg:w-2/5 relative">
              <Image
                src="/images/university/whatever-men.png"
                alt="checkified university"
                width={500}
                height={600}
                className="absolute max-h-full object-contain left-1/2 transform -translate-x-1/2 bottom-0 md:-bottom-2 lg:-bottom-10 xl:bottom-0 scale-[1.5] lg:scale-[1.5]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-6 lg:py-12 mb-16">
        <CacingTwo
          positionClassName="right-[-16rem] rotate-[10deg] top-[18rem]"
          sizeClassName="w-[24rem] h-[24rem]"
          className="z-[1] hidden lg:block"
        />

        <ScrollReveal className="bg-base-200 p-8 lg:p-10 mb-16 rounded-[3rem]">
          <Title
            blackText={t.universityData.joinBlackTitle}
            blueText={t.universityData.joinBlueTitle}
            isBlock
            className="text-left"
          />

          <p className="mb-6 text-subtitle">
            {t.universityData.joinSubtitleFirst}
          </p>
          <p className="text-subtitle">{t.universityData.joinSubtitleSecond}</p>
          <Link
            href="/register"
            className="mt-10 btn btn-primary w-full lg:w-auto"
          >
            {t.universityData.joinButton}
          </Link>
        </ScrollReveal>
      </section>

      <section className="our-culture-container bg-primary rounded-[2rem] p-6 lg:p-12 text-white relative mb-16 lg:mb-20">
        <div className="absolute w-full inset-0 h-[300px] lg:w-[500px] lg:h-[500px] -top-16 lg:-top-6 xl:-top-20">
          <Image
            src="/images/university/glass-men.png"
            alt="stats"
            fill
            className="absolute object-contain"
          />
        </div>

        <ScrollReveal className="w-full lg:w-3/5 bg-white/10 p-8 lg:px-16 lg:py-10 rounded-tl-3xl rounded-bl-3xl backdrop-blur-xl lg:ml-auto mt-52 lg:mt-0">
          <h2 className="text-[32px] leading-[1.1] lg:text-[40px] mb-4 font-bold">
            {t.universityData.cultureTitle}
          </h2>
          <p className="mb-6">{t.universityData.cultureSubtitleFirst}</p>
          <p>{t.universityData.cultureSubtitleSecond}</p>
        </ScrollReveal>
      </section>

      <section className="flex flex-col lg:flex-row items-center bg-base-200 rounded-3xl p-6 lg:p-10 mb-16 lg:mb-20">
        <ScrollReveal className="w-full lg:w-2/3">
          <Title
            blackText={t.universityData.modernBlackTitle}
            blueText={t.universityData.modernBlueTitle}
            className="mx-auto"
          />

          <p className="text-subtitle">
            {t.universityData.modernSubtitleFirst}
          </p>
          <p className="text-subtitle mt-4 mb-10">
            {t.universityData.modernSubtitleSecond}
          </p>
          {/* <ButtonArrow> {t.universityData.modernButton}</ButtonArrow> */}
        </ScrollReveal>
        <div className="h-[340px] w-full lg:w-2/5 relative">
          <div className="w-[280px] h-[280px] lg:w-[500px] lg:h-full absolute bottom-10 lg:bottom-[5%] left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/university/thinking-men.png"
              alt="stats"
              fill
              className="object-contain mx-auto mt-4"
            />
          </div>
        </div>
      </section>

      <section className="relative isolate bg-primary text-white p-6 lg:px-10 lg:py-20 mb-16 lg:mb-20 rounded-[3rem] text-center lg:text-left">
        <LineGraphic
          positionClassname="right-[-12rem] lg:right-[-8rem] 2xl:right-[-10rem] bottom-[-4rem]"
          className="svg-white"
        />
        <FadeLogo
          positionClassName="left-[-2rem] bottom-[-2rem]"
          svgClassname="svg-white-opacity"
          sizeClassName="w-[20rem] h-[20rem]"
          className="z-[-1]"
        />

        <ScrollReveal>
          <Title
            blackText={t.universityData.takeYourTitle}
            isBlock
            className="text-[24px]"
          />
          <ButtonArrow href="/register" isReverse className="mt-0 lg:mt-4">
            {t.universityData.takeYourButton}
          </ButtonArrow>
        </ScrollReveal>
      </section>
    </Layout>
  )
}
