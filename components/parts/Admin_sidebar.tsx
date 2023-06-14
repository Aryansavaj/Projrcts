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

export default function Admin_sidebar({ openSidebar, setOpenSidebar }: Props) {
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
        onClick="openSidebar()"
      >
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md" />
      </span>
      <div className="sidebar fixed top-20 bottom-0 lg:left-0 pt-12 w-[270px] overflow-y-auto text-center bg-base-100 pl-8 flex flex-col justify-between">
        <div className="sidebar_menu">
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle side_hover"
            id="side_hover_div"
          >
            <svg
              width="22"
              height="22"
              id="side_hover_div_svg"
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
            <span className="text-[14px] ml-4  font-semibold">Hem</span>
          </div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer text-subtitle"
            id="side_hover_div"
          >
            <svg
              width="26"
              height="26"
              id="side_hover_div_svg"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 11.0498C11.03 11.6998 12.97 11.6998 14.75 11.0498"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.8201 4H7.18007C5.05007 4 3.32007 5.74 3.32007 7.86V21.95C3.32007 23.75 4.61007 24.51 6.19007 23.64L11.0701 20.93C11.5901 20.64 12.4301 20.64 12.9401 20.93L17.8201 23.64C19.4001 24.52 20.6901 23.76 20.6901 21.95V7.86C20.6801 5.74 18.9501 4 16.8201 4Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.8201 4H7.18007C5.05007 4 3.32007 5.74 3.32007 7.86V21.95C3.32007 23.75 4.61007 24.51 6.19007 23.64L11.0701 20.93C11.5901 20.64 12.4301 20.64 12.9401 20.93L17.8201 23.64C19.4001 24.52 20.6901 23.76 20.6901 21.95V7.86C20.6801 5.74 18.9501 4 16.8201 4Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="20.6901"
                cy="5.28335"
                r="4.00015"
                fill="#0083FF"
                stroke="white"
              />
            </svg>

            <span className="text-[14px] ml-4  font-semibold">Courses</span>
          </div>
        </div>
      </div>
    </>
  );
}
