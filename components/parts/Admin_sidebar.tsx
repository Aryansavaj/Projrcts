import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/router";

import en from "@/locales/en";
import sv from "@/locales/sv";

type Props = {};

export default function Admin_sidebar({}: Props) {
  

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : sv;

  

  return (
    <>
      
      <div className="sidebar top-20 bottom-0 lg:left-0 pt-12  overflow-y-auto text-center bg-base-100 pl-8 flex flex-col justify-between w-[270px] h-full">
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
            <span className="text-[14px] ml-4  font-semibold">Home</span>
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
