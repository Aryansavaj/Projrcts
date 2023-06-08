import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
};

const AuthButton = ({
  changeLanguage,
  locale,
  t,
  className,
}: {
  changeLanguage: any;
  locale: any;
  t: any;
  className: string;
}) => (
  <div
    className={`items-center justify-center lg:justify-end gap-2 mt-8 lg:mt-0 ${className}`}
  >
    <div className="relative inline-flex">
      <svg
        className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fillRule="nonzero"
        />
      </svg>
      <select
        onChange={changeLanguage}
        defaultValue={"sv"}
        className="border bg-base-100 border-gray-300 rounded-xl h-10 pl-5 pr-10 font-semibold cursor-pointer hover:border-gray-400 focus:outline-none appearance-none"
      >
        <option className="font-semibold" value="sv">
          SV
        </option>
        <option className="font-semibold" value="en">
          EN
        </option>
      </select>
    </div>

    <Link className="btn btn-link" href="/signin">
      {t.headerData.login}
    </Link>
    <Link className="btn btn-primary btn-shadow" href="/signup">
      {t.headerData.getStarted}
    </Link>
    <Link className="btn btn-primary btn-shadow" href="/dashboard">
      {t.headerData.dashboard}
    </Link>
  </div>
);

export default function Header({ openSidebar, setOpenSidebar }: Props) {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();
  const { locale, pathname } = router;
  const t = locale === "en" ? en : sv;

  const setDefaultLangToSV = () => {
    router.push(router.pathname, router.asPath, { locale: "sv" });
  };

  useEffect(() => {
    return () => {
      setOpenMenu(false);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      setDefaultLangToSV();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (e: { target: { value: any } }) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="bg-base-100 h-header-height fixed top-0 left-0 right-0 z-20 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="" href="/">
          <div className="flex items-center justify-start gap-2">
            <Image
              className="svg-primary object-contain"
              src="/logo.svg"
              alt="checkified"
              height={44}
              width={44}
              priority
            />
            <p className="font-bold font-roboto text-2xl">Checkified</p>
          </div>
        </Link>

        <nav
          className={`bg-base-100 absolute top-header-height ${
            openSidebar ? "left-0" : "left-[150%]"
          } lg:static p-8 pb-10 lg:p-0 text-center w-full lg:w-auto lg:flex flex-col lg:flex-row justify-between items-center shadow-lg lg:shadow-none rounded-b-3xl lg:rounded-none transition-all duration-200 ease-linear max-h-screen`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 h-full">
            <li>
              <label className="btn btn-link rounded-full bg-base-100 h-14 drop-shadow-md">
                <div className="flex items-center justify-start gap-2">
                  <Image
                    className="object-contain"
                    src="/notify_bell.png"
                    alt="checkified"
                    height={28}
                    width={28}
                    priority
                  />
                </div>
              </label>
            </li>

            <li>
              <label
                className="btn btn-link rounded-full bg-base-100 h-14 drop-shadow-md"
                onClick={toggleMenu}
              >
                <div className="flex items-center justify-start gap-2">
                  <Image
                    className="svg-primary object-contain"
                    src="/logo.svg"
                    alt="checkified"
                    height={35}
                    width={35}
                    priority
                  />
                  John Smith
                  <MdOutlineKeyboardArrowDown
                    size={26}
                    className={`ml-1 transform ${
                      openMenu ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>
              </label>
              <div
                className={`lg:absolute lg:w-[20%] ${
                  openMenu
                    ? "lg:top-[100px] lg:opacity-100"
                    : "lg:top-[90px] lg:opacity-0"
                } lg:transform lg:translate-x-[17rem] lg:left-[60rem] shadow-lg lg:p-8 z-10 flex flex-col lg:flex-row lg:h-auto rounded-[28px] gap-6 bg-base-100 overflow-auto transition-all duration-200 ease-in-out ${
                  openMenu
                    ? "h-[400px] p-8 shadow-none border opacity-100"
                    : "h-0 p-0 opacity-0"
                } `}
              >
                <div className="">
                  <Image
                    src="/images/profile-bg.png"
                    alt="Video Placeholder"
                    width={300}
                    height={190}
                    priority
                  />
                  <div className="profile-details relative -mt-8">
                  <div className="profile-pic rounded-full flex justify-center ">
                  <Image
                  className="object-contain border-2 border-white-500/100 rounded-full p-1"
                    src="/images/profilepic.png"
                    alt="Video Placeholder"
                    width={80}
                    height={80}
                    priority
                  />
                  </div>
      
                    <h2 className="font-bold text-xl mt-2">John Smith</h2>
                  </div>
                  <hr className="my-8" />
                  <div className="grid grid-cols-1 lg:grid-cols-1">
                    <Link key="" href="">
                      <div className="mega-menu-list items-center flex gap-3 items-start hover:bg-base-200 p-2 rounded-lg">
                        <div className="list-icon bg-base-100 p-2 rounded-lg">
                          <Image
                            src="/icons/header/profile.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={30}
                            height={30}
                            priority
                          />
                        </div>
                        
                        <div className="menu-content">
                          <h2 className="font-semibold text-left">Konto</h2>
                        </div>
                      </div>
                    </Link>
                    <Link key="" href="">
                      <div className="mega-menu-list items-center flex gap-3 items-start hover:bg-base-200 p-2 rounded-lg">
                        <div className="list-icon bg-base-100 p-2 rounded-lg">
                          <Image
                            src="/icons/header/info-circle.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={30}
                            height={30}
                            priority
                          />
                        </div>
                     
                        <div className="menu-content">
                          <h2 className="font-semibold text-left">Hjälpcenter</h2>
                        </div>
                      </div>
                    </Link>
                    <Link key="" href="">
                      <div className="mega-menu-list items-center flex gap-3 items-start hover:bg-base-200 p-2 rounded-lg">
                        <div className="list-icon bg-base-100 p-2 rounded-lg">
                          <Image
                            src="/icons/header/logout.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={30}
                            height={30}
                            priority
                          />
                        </div>
                        
                        <div className="menu-content">
                          <h2 className="font-semibold text-left">Logga ut</h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <button className="lg:hidden rounded-md text-primary bg-base-200">
          <Hamburger
            size={26}
            onToggle={(toggled) =>
              toggled ? setOpenSidebar(true) : setOpenSidebar(false)
            }
          />
        </button>
      </div>
    </header>
  );
}
