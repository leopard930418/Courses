import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";
import NewsAndResCard from "../card/NewsAndResCard";

export default function BercDemo() {
  return (
    <>
      <div className="flex flex-col md:flex-row p-2 md:p-20">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="w-full md:w-5/6">
            <div className="text=[#030303] text-3xl md:text-5xl text-center font-bold py-4">
              Want to Know How BERC Works
            </div>
            <div className="text-[#5E5E5E] text-xl text-center py-4">
              Non-disclosure agreement seed round seed money accelerator
              infulencer.
            </div>
            <div className="flex flex-row justify-around py4">
              <div className="">
                <input
                  placeholder="Enter email"
                  className="border border-[#E9E9E9] rounded-md py-2 px-4"
                ></input>
              </div>
              <div className="flex justify-center">
                <button className="rounded-md bg-red-700 text-white py-2 px-4">
                  Get Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <CustomImage src="/images/BercDemoImage.svg"></CustomImage>
        </div>
      </div>
    </>
  );
}
