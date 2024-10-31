"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState("ltr");

  const languages = [
    { name: "English", code: "en", dir: "ltr" },
    { name: "العربية", code: "ar", dir: "rtl" },
  ];

  const handleLanguageChange = (lang) => {
    setLanguage(lang.name);
    setDirection(lang.dir);
    setIsOpen(false);
  };
  return (
    <div className="px-6 lg:py-6 py-3 lg:text-sm text-xs">
      <div className="flex items-center  justify-between">
        <div
          className={`inline-flex items-center lg:gap-6 gap-2 ${
            direction === "rtl" ? "flex-row-reverse" : ""
          }`}
        >
          <div className="inline-flex items-center gap-2">
            <IoIosSearch />
            <span className="lg:block hidden">
              {direction === "rtl" ? "بحث" : "Search"}
            </span>
          </div>

          <div className="bg-gray-500 h-4 w-[0.2px]" />

          <div className="relative">
            <div
              className="inline-flex items-center gap-2 border rounded-md p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
            >
              <CiGlobe />
              <span>{language}</span>
              <MdOutlineKeyboardArrowDown />
            </div>

            {isOpen && (
              <div className="absolute top-full mt-1 w-full bg-white border rounded-md shadow-lg z-10">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center lg:gap-6 gap-2 ">
          <Link href="/BookService">Book a Service</Link>
          <div className=" bg-gray-500 h-4 w-[0.2px]" />
          <p className="">Book a Car</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
