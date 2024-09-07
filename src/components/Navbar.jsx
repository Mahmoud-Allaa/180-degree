"use client";
import React, { useState } from "react";
import logo from "@/assets/logos/logo-ai.png";
import Image from "next/image";
import Link from "next/link";
import { FaClock } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { Stack } from "@chakra-ui/react";
import { GrLanguage } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";

import Button from "@mui/material/Button";

function Navbar() {
  const navList = [
    { title: "HOME", link: "/" },
    { title: "ABOUT", link: "/about" },
    { title: "SERVICES", link: "/services" },
    { title: "BLOG", link: "/blog" },
  ];

  const info = [
    {
      icon: <FaClock size={20} />,
      title: "Sunday - Thursday 08:00 - 20:00",
      subTitle: "Friday and Saturday - CLOSED",
    },
    {
      icon: <BiSupport size={20} />,
      title: "+ 0800 2466 7921",
      subTitle: "Dr.Ahmed@example.com",
    },
    {
      icon: <MdLocationPin size={20} />,
      title: "34th Avenue",
      subTitle: "New York, W2 3XE",
    },
  ];
  const [toggle, setToggle] = useState(false);

  return (
    <main className="drop-shadow bg-white absolute top-0 left-0 right-0">
      {/* Desktop Nav */}
      <Stack className="">
        <nav>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            className="px-[24px] xl:px-[70px] py-[10px]"
          >
            <Link href={"/"} className="logo w-[60px] md:w-[80px]">
              <Image src={logo} alt="180 degree logo" />
            </Link>

            <div className="md:hidden">
              <IoMdMenu onClick={() => setToggle(!toggle)} size={32} />
            </div>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              spacing={24}
              className="hidden md:flex"
            >
              {info.map((info, i) => (
                <Stack
                  direction={"row"}
                  alignItems={"start"}
                  justifyContent={"space-between"}
                  spacing={10}
                  key={i}
                >
                  <span className="mt-[2px]">{info.icon}</span>
                  <Stack className="text-[12px]">
                    <p className="font-bold">{info.title}</p>
                    <p className="text-[#697565]">{info.subTitle}</p>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <hr />

          <Stack
            direction="row"
            justifyContent="space-between"
            className="px-[24px] xl:px-[70px] py-3 hidden md:flex"
          >
            <Stack direction={"row"} spacing={18}>
              {navList.map((listItem, i) => (
                <Link key={i} href={listItem.link}>
                  {listItem.title}
                </Link>
              ))}
            </Stack>
            <Stack direction="row" spacing={24} align="center">
              <Button startIcon={<GrLanguage />} color={"#697565"}>
                English
              </Button>
              <Button
                href="/appointments"
                variant="text"
                sx={{
                  borderColor: "#697565", // Custom border color
                  color: "#697565", // Optional: Match text color with border
                  "&:hover": {
                    backgroundColor: "rgba(105, 117, 101, 0.1)", // Optional: change hover background
                  },
                  fontFamily: "Cairo, sans-serif",
                  textDecoration: "underline",
                }}
              >
                Book an Appointment
              </Button>
            </Stack>
          </Stack>
          {toggle && (
            <Stack px={20}>
              {navList.map((listItem, i) => (
                <Link
                  onClick={() => setToggle(false)}
                  className="border-b py-2"
                  key={i}
                  href={listItem.link}
                >
                  {listItem.title}
                </Link>
              ))}
            </Stack>
          )}
        </nav>
      </Stack>
    </main>
  );
}

export default Navbar;
