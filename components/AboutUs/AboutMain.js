import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CustomImage from "../base/CustomImage";

export default function AboutMain() {
  return (
    <>
      <div className="w-full h-full pt-20">
        <CustomImage src="/images/AboutHeader.svg" />
      </div>
      <div className="flex flex-col sm:flex-row p-2 md:p-10">
        <div className="w-full md:w-1/2">
          <CustomImage src="/images/AboutImage1.svg"></CustomImage>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div className="text-2xl sm:text-4xl pb-4 text-[#030303] text-left font-bold">
            Achieve Your Goals With BERC
          </div>
          <div className="text-base pb-4 text-[#5E5E5E] text-left ">Lorem ipsum spengen nyng att betredes. Pugisk ayna, deng med preheten.</div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Upskill your organization"
              className="text-[#5E5E5E]"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Access more then 100K online courses"
              className="text-[#5E5E5E]"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Learn the latest skills"
              className="text-[#5E5E5E]"
            />
          </FormGroup>

          <div className="py-8">
            <button className="rounded-sm bg-[#F9AA1B] text-[#030303] py-2 px-4">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
