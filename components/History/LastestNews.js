import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";

export default function LastestNews() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="flex flex-col p-2 md:p-20">
        <div className="w-full flex flex-col space-y-4">
          <div className="text-2xl sm:text-4xl pb-4 text-[#030303] text-center  font-bold pt-10">
            Lastest News and Resources
          </div>
          <div className="text-base pb-4 text-[#5E5E5E] text-center  ">
            See the Developments that have occurred to Skilliness in the world
          </div>
          <div>
            <div className="w-5/12 flex flex-col ">
              <div>
                <CustomImage src="/images/HistoryImage5.svg" />
              </div>
              <div className="py-8">
                <button className="rounded-3xl bg-red-700 text-white py-2 px-4">
                  View All
                </button>
              </div>
              <div className="w-full flex flex-col space-y-4">
                <div className="text-2xl sm:text-3xl pb-4 text-[#030303] text-center md:text-left font-bold pt-10">
                  Class adds $30 million to its balance sheet for a
                  Zoom-friendly edtech solution
                </div>
                <div className="text-lg sm:text-xl pb-4 text-[#5E5E5E] text-center md:text-left ">
                  Class, launched less than a year ago by Blackboard co-founder
                  Michale Chaasen, integrates exclusively...{" "}
                </div>

                <div className="py-4 flex justify-center md:justify-start">
                  <button className="border-b border-black text-[#030303]">
                    Read more
                  </button>
                </div>
              </div>
            </div>
            <div className="w-7/12"></div>
          </div>
        </div>
      </div>
    </>
  );
}
