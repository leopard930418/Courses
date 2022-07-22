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

export default function TeacherCard({
  imgsrc = "",
  teacherName = "",
  description = "",
  ...props
}) {
  return (
    <div className="h-full w-full rounded-md border border-[#E7E7E7] bg-white shadow-md p-2">
      <div className="w-full">
        <CustomImage src={imgsrc} className="w-full"></CustomImage>
      </div>
      <div className="text-3xl text-[#030303] text-center font-bold pt-8">
        {teacherName}
      </div>
      <div className="text-xl text-[#5E5E5E] text-center pt-8">
        {description}
      </div>
      <div className="flex flex-row justify-center space-x-2 p-8">
        <FacebookIcon style={{ color: "#F9AA1B" }} />
        <TwitterIcon style={{ color: "#F9AA1B" }} />
        <InstagramIcon style={{ color: "#F9AA1B" }} />
        <LinkedInIcon style={{ color: "#F9AA1B" }} />
      </div>
    </div>
  );
}
