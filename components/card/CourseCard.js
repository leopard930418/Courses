import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArticleIcon from "@mui/icons-material/Article";

import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";
import { Divider, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function CourseCard({
  imgsrc = "",
  avatarsrc = "",
  review = 0,
  visitedCount = 0,
  title = "",
  description = "",
  accessTime = "",
  lecturesCount = 0,
  instructorName = "",
  price = 0,
  ...props
}) {
  return (
    <div className="h-full w-full rounded-md bg-white shadow-md">
      <div className="">
        <CustomImage
          src={imgsrc}
          className="w-full px-1 py-1 object-cover"
        ></CustomImage>
        <div className="flex flex-col">
          <div className="w-5/6 flex flex-row items-center pl-4 py-2 space-x-2">
            <StarIcon style={{ color: "#FF7E07" }} />
            <CustomText align="left" color="black" className="w-full" size="lg">
              {review}
            </CustomText>{" "}
            <PermIdentityIcon />
            <CustomText align="left" color="black" className="w-full" size="lg">
              {visitedCount}
            </CustomText>
          </div>
          <div className="w-full pl-4 py-2 text-3xl font-bold text-[#030303] text-left">
            {title}
          </div>
          <div className="w-full px-4 pb-2 text-xl text-[#030303] text-left break-words">
            {description}
          </div>
          <div className="w-5/6 flex flex-row items-center pl-4 py-2 space-x-2">
            <AccessTimeIcon style={{ color: "#F9AA1B" }} />
            <CustomText align="left" color="black" className="w-full" size="lg">
              {accessTime}
            </CustomText>
            <ArticleIcon style={{ color: "#D1222A" }} />
            <CustomText align="left" color="black" className="w-full" size="lg">
              {lecturesCount}Lectures
            </CustomText>
          </div>
        </div>
        <Divider variant="middle" className="bg-[#EEEEEE]" />
        <div className="flex flex-row justify-between p-4">
          <div className="flex flex-row justify-start items-center">
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={avatarsrc} />
            </Stack>
            <div className="text-lg">{instructorName}</div>
          </div>
          <div className="text-2xl text-black font-bold">${price}</div>
        </div>
      </div>
    </div>
  );
}
