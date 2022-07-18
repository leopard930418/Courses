import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArticleIcon from "@mui/icons-material/Article";

import CustomImage from "../base/CustomImage";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function NewsAndResCard({
  imgsrc = "",
  btnstatus = "",
  title = "Class Technologies Inc, Closes $30 Million Series A",
  description = "Class Technologies Inc, the company that created Class",
  ...props
}) {
  return (
    <div className="w-full flex flex-row pb-4">
      <div className="relative w-1/2">
        <div className="absolute w-full bottom-0 right-0 -translate-y-2">
          <div className="flex justify-center">
            <button className="rounded-3xl bg-red-700 text-white text-center px-4 py-2">
              {btnstatus}
            </button>
          </div>
        </div>
        <div className="w-full">
          <CustomImage src={imgsrc} />
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="text-lg md:text-2xl text-[#030303]">{title}</div>
        <div className="text-sm md:text-xl text-[#5E5E5E]">{description}</div>
      </div>
    </div>
  );
}
