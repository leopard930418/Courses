import React, { useState } from "react";
import CustomImage from "../base/CustomImage";

export default function ProgramsCard({
  imgsrc = "",
  btnstatus = "",
  title = "Lorem ipsum dolor sitamet, consectetur",
  description = "The Basketball Home Gym for both basketball strength and basketball conditioning...",
  ...props
}) {
  return (
    <div className="w-full flex flex-row pb-4">
      <div className="w-1/3">
        <div className="w-full">
          <CustomImage src={imgsrc} />
        </div>
      </div>
      <div className="w-2/3 pl-10">
        <div className="text-lg md:text-2xl text-[#030303]">{title}</div>
        <div className="text-sm md:text-xl text-[#5E5E5E]">{description}</div>
      </div>
    </div>
  );
}
