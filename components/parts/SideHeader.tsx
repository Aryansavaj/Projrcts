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
    <>
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onclick="openSidebar()"
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md" />
      </span>
      <div className="sidebar fixed top-20 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-base-100 pl-8">
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle hover:text-primary side_hover">
          <i className="bi bi-house-door-fill" />
          {/* <div className="p-2">
              <Image
                src="/icons/home/home.svg"
                alt="people"
                height={20}
                width={20}
              />
        </div> */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.02 1.84016L2.63 6.04016C1.73 6.74016 1 8.23016 1 9.36016V16.7702C1 19.0902 2.89 20.9902 5.21 20.9902H16.79C19.11 20.9902 21 19.0902 21 16.7802V9.50016C21 8.29016 20.19 6.74016 19.2 6.05016L13.02 1.72016C11.62 0.740163 9.37 0.790163 8.02 1.84016Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 16.9902V13.9902"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="text-[15px] ml-4  font-bold">Hem</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle hover:text-primary side_hover">
          <i className="bi bi-bookmark-fill" />
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 11.05C11.03 11.7 12.97 11.7 14.75 11.05"
              stroke="#0083FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.82 4H7.18C5.05 4 3.32 5.74 3.32 7.86V21.95C3.32 23.75 4.61 24.51 6.19 23.64L11.07 20.93C11.59 20.64 12.43 20.64 12.94 20.93L17.82 23.64C19.4 24.52 20.69 23.76 20.69 21.95V7.86C20.68 5.74 18.95 4 16.82 4Z"
              stroke="#0083FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.82 4H7.18C5.05 4 3.32 5.74 3.32 7.86V21.95C3.32 23.75 4.61 24.51 6.19 23.64L11.07 20.93C11.59 20.64 12.43 20.64 12.94 20.93L17.82 23.64C19.4 24.52 20.69 23.76 20.69 21.95V7.86C20.68 5.74 18.95 4 16.82 4Z"
              stroke="#0083FF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="20.6902"
              cy="5.28323"
              r="4.00015"
              fill="#0083FF"
              stroke="white"
            />
          </svg>

          <span className="text-[15px] ml-4  font-bold">Kurser</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle hover:text-primary side_hover">
          <i className="bi bi-bookmark-fill" />
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.595 7.16C18.5331 7.15 18.4607 7.15 18.3988 7.16C16.9731 7.11 15.8368 5.98 15.8368 4.58C15.8368 3.15 17.0248 2 18.5021 2C19.9793 2 21.1674 3.16 21.1674 4.58C21.157 5.98 20.0207 7.11 18.595 7.16Z"
              stroke="#707BA0"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.531 14.44C18.9463 14.67 20.5062 14.43 21.6012 13.72C23.0579 12.78 23.0579 11.24 21.6012 10.3C20.4959 9.59001 18.9153 9.35 17.5 9.59"
              stroke="#707BA0"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.16736 7.16C6.22934 7.15 6.30165 7.15 6.36364 7.16C7.78926 7.11 8.92562 5.98 8.92562 4.58C8.92562 3.15 7.7376 2 6.26033 2C4.78306 2 3.59504 3.16 3.59504 4.58C3.60537 5.98 4.74174 7.11 6.16736 7.16Z"
              stroke="#707BA0"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.23141 14.44C5.81612 14.67 4.2562 14.43 3.16116 13.72C1.70455 12.78 1.70455 11.24 3.16116 10.3C4.26653 9.59001 5.84711 9.35 7.2624 9.59"
              stroke="#707BA0"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.3967 14.63C12.3347 14.62 12.2624 14.62 12.2004 14.63C10.7748 14.58 9.63843 13.45 9.63843 12.05C9.63843 10.62 10.8264 9.47 12.3037 9.47C13.781 9.47 14.969 10.63 14.969 12.05C14.9587 13.45 13.8223 14.59 12.3967 14.63Z"
              stroke="#707BA0"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.3905 17.78C7.93389 18.72 7.93389 20.26 9.3905 21.2C11.0434 22.27 13.75 22.27 15.4029 21.2C16.8595 20.26 16.8595 18.72 15.4029 17.78C13.7603 16.72 11.0434 16.72 9.3905 17.78Z"
              stroke="#707BA0"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-[15px] ml-4  font-bold">Community</span>
        </div>
      </div>
    </>
  );
}
