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
    <header className="bg-base-100 h-header-100 fixed top-0 left-0 right-0 z-20 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="" href="/">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-primary rounded-full w-[50px] h-[50px] flex item-center justify-center">
              <Image
                className="svg-white object-contain p-2"
                src="/logo.svg"
                alt="checkified"
                height={44}
                width={44}
                priority
              />
            </div>

            <p className="font-bold text-1xl">Checkified</p>
          </div>
        </Link>

        <nav
          className={`bg-base-100 absolute top-header-height lg:static p-8 pb-10 lg:p-0 text-left w-full lg:w-auto lg:flex flex-col lg:flex-row justify-between items-center shadow-lg lg:shadow-none rounded-b-3xl lg:rounded-none transition-all duration-200 ease-linear max-h-screen`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 h-full relative">
            <li className="absolute left-[-26rem] top-[-1.5rem]">
              <label className="btn btn-link bg-base-100 h-14">
                <div className="flex items-center justify-start gap-2">
                  <h2 className="font-extrabold text-primary text-26-xl">
                    Översikt
                  </h2>
                </div>
              </label>
            </li>
          </ul>
        </nav>

        <nav
          className={`bg-base-100 absolute top-header-height ${
            openSidebar ? "left-0" : "left-[150%]"
          } lg:static p-8 pb-10 lg:p-0 text-center w-full lg:w-auto lg:flex flex-col lg:flex-row justify-between items-center shadow-lg lg:shadow-none rounded-b-3xl lg:rounded-none transition-all duration-200 ease-linear max-h-screen`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 lg:gap-8 h-full">
            <li>
              <label className="btn btn-link rounded-full bg-base-100 h-14 cricle-shadow">
                <div className="flex items-center justify-start gap-2">
                  <Image
                    className="object-contain"
                    src="/icons/header/notification-bing.svg"
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
                className="btn btn-link rounded-full bg-base-100 h-14 prfoilebtn-shadow"
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
                className={`lg:absolute lg:w-[18%] ${
                  openMenu
                    ? "lg:top-[90px] lg:opacity-100"
                    : "lg:top-[90px] lg:opacity-0"
                } lg:transform lg:translate-x-[17rem] lg:left-[61rem] shadow-lg lg:p-7 z-10 flex flex-col lg:flex-row lg:h-auto rounded-[28px] gap-6 bg-base-100 overflow-auto transition-all duration-200 ease-in-out ${
                  openMenu
                    ? "h-[400px] p-8 shadow-none border opacity-100"
                    : "h-0 p-0 opacity-0"
                } `}
              >
                <div className="">
                  <Image
                    src="/images/profile-bg.png"
                    alt="Video Placeholder"
                    width={230}
                    height={150}
                    priority
                  />
                  <div className="profile-details relative -mt-8">
                    <div className="profile-pic rounded-full flex justify-center ">
                      <Image
                        className="object-contain border-2 border-white-500/100 rounded-full profile-dropdown-icon"
                        src="/images/profilepic.png"
                        alt="Video Placeholder"
                        width={70}
                        height={70}
                        priority
                      />
                    </div>

                    <h2 className="font-semibold text-base mt-4">John Smith</h2>
                  </div>
                  <hr className="my-5 hr-height" />
                  <input type="checkbox" id="switch" />
                  <div className="grid grid-cols-1 lg:grid-cols-1 toggle_switch">
                    <div className="content-switch">
                      <label htmlFor="switch">
                        <div className="toggle" />
                        <div className="names">
                          <p className="light">
                            <svg
                              width="22"
                              height="21"
                              className="toggle_svg_light"
                              viewBox="0 0 22 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.0126 15.7242C14.012 15.7242 16.4434 13.3141 16.4434 10.3411C16.4434 7.3681 14.012 4.95801 11.0126 4.95801C8.01325 4.95801 5.58179 7.3681 5.58179 10.3411C5.58179 13.3141 8.01325 15.7242 11.0126 15.7242Z"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M16.9784 16.2544L16.8698 16.1467M16.8698 4.53579L16.9784 4.42813L16.8698 4.53579ZM5.04728 16.2544L5.1559 16.1467L5.04728 16.2544ZM11.0128 2.12582V2.05957V2.12582ZM11.0128 18.6229V18.5567V18.6229ZM2.72456 10.3412H2.65771H2.72456ZM19.368 10.3412H19.3011H19.368ZM5.1559 4.53579L5.04728 4.42813L5.1559 4.53579Z"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            Ljust
                          </p>
                          <p className="dark">
                            <svg
                              width="21"
                              height="21"
                              className="toggle_svg"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.69875 10.85C2.00002 15.1416 5.65706 18.6333 10.0338 18.825C13.1218 18.9583 15.8834 17.525 17.5403 15.2666C18.2266 14.3416 17.8584 13.725 16.7119 13.9333C16.1512 14.0333 15.5737 14.075 14.9712 14.05C10.879 13.8833 7.53161 10.475 7.51487 6.44997C7.5065 5.36663 7.73245 4.34163 8.14251 3.4083C8.59441 2.37497 8.05046 1.8833 7.00439 2.32497C3.69046 3.71663 1.42259 7.04163 1.69875 10.85Z"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            Mörkt
                          </p>
                        </div>
                      </label>
                    </div>

                    <Link key="" href="">
                      <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                        <div className="list-icon bg-base-100 p-1 rounded-lg">
                          <Image
                            src="/icons/header/profile.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={25}
                            height={25}
                            priority
                          />
                        </div>

                        <div className="menu-content">
                          <h2 className="font-medium text-xs text-707BA0 text-left">
                            Konto
                          </h2>
                        </div>
                      </div>
                    </Link>
                    <Link key="" href="">
                      <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                        <div className="list-icon bg-base-100 p-1 rounded-lg">
                          <Image
                            src="/icons/header/info-circle.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={25}
                            height={25}
                            priority
                          />
                        </div>

                        <div className="menu-content">
                          <h2 className="font-medium text-xs text-707BA0 text-left">
                            Hjälpcenter
                          </h2>
                        </div>
                      </div>
                    </Link>
                    <Link key="" href="">
                      <div className="mega-menu-list items-center flex gap-3 items-start rounded-lg">
                        <div className="list-icon bg-base-100 p-1 rounded-lg">
                          <Image
                            src="/icons/header/logout.png"
                            alt="Mega menu icon"
                            className="object-contain"
                            width={25}
                            height={25}
                            priority
                          />
                        </div>

                        <div className="menu-content">
                          <h2 className="font-medium text-xs text-left text-red-600">
                            Logga ut
                          </h2>
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
