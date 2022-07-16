import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";
export default function JoinUs() {
  return (
    <div className="bg-[#D1222A] h-full">
      <div className="flex flex-col-reverse sm:flex-row">
        <div className="w-full sm:w-1/3">
          <CustomImage src="/images/CoursesJonUs.svg" />
        </div>
        <div className="w-full sm:w-2/3 flex items-center">
          <div className="flex flex-col items-center sm:items-start pt-10 sm:pt-0">
            <div className="text-2xl sm:text-4xl pb-4 text-white text-left bold">
              Want to Control your Future?
            </div>
            <div className="text-base sm:text-2xl text-white text-center sm:text-left">
              Loem ipsum makcov task vanade Hemiskade mevatuledes
            </div>
            <div className="py-8 flex justify-start">
              <button className="rounded-3xl bg-black text-white py-2 px-4">
                Join Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
