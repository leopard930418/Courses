import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";
import NewsAndResCard from "../card/NewsAndResCard";

export default function Teams() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full p-2 md:p-20 flex justify-center">
        <div className="w-full md:w-1/2">
          <div className="text-[#D1222A] text-center text-base">OUR TEAM</div>
          <div className="text=[#030303] text-5xl text-center font-bold py-4">
            Subxcribe Our Newsletter
          </div>
          <div className="text-[#5E5E5E] text-xl text-center py-4">
            Our goal is top at the heart of creative services industry as a
            digital creator. In has a after comment.
          </div>
          <div className="flex flex-row justify-between py4">
            <div className="">
              <input placeholder="Enter your email address" className="border border-[#E9E9E9] rounded-md py-2 px-4"></input>
            </div>
            <div className="flex justify-center">
              <button className="rounded-md bg-red-700 text-white py-2 px-4">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
