import { useState } from "react";
import { Avatar, Stack } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function EventMain() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full h-full pt-20 pb-10">
        <CustomImage
          src={`/images/HistoryHeader${isPhoneMode ? "M" : ""}.svg`}
          className="w-full"
        />
      </div>
      <div className="w-full h-full p-4 sm:p-12 flex flex-col sm:flex-row">
        <div className="w-full md:w-2/3 flex flex-col px-0 md:px-8">
          <div className="text-3xl md:text-5xl font-bold text-black pb-4">
            Become a product manager learn the Skills & job.
          </div>
          <div className="flex flex-row items-center">
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/images/avatar1.png" />
              </Stack>
            </div>
            <div className="flex flex-col px-2 md:px-4">
              <div className="text-[#5E5E5E] text-xs">Teacher</div>
              <div className="text-[#030303] text-sm font-bold">Elon Gated</div>
            </div>
            <div className="flex flex-col px-2 md:px-4">
              <div className="text-[#5E5E5E] text-xs">Last Update:</div>
              <div className="text-[#030303] text-sm font-bold">
                July 24, 2022
              </div>
            </div>
            <div className="flex flex-col px-2 md:px-4">
              <div className="text-[#5E5E5E] text-xs">Location:</div>
              <div className="text-[#030303] text-sm font-bold">
                New York, TX 82760, US:
              </div>
            </div>
          </div>
          <div className="py-4">
            <CustomImage src="/images/EventImage.svg" className="w-full" />
          </div>
          <div className="text-2xl md:text-3xl text-black font-bold py-4">
            Description
          </div>
          <div className="text-base text-[#5E5E5E] py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </div>
        </div>
        <div className="w-full md:w-1/3 px-8">
          <div className="border border-[#E7E7E7] rounded-md shadow-md">
            <div className="p-8 flex flex-col">
              <div className="flex flex-row justify-between items-center pb-8">
                <div className="text-xl font-bold text-black">
                  $75.<span className="text-sm">00</span>
                </div>
                <div className="text-lg text-[#5E5E5E]">$142.00</div>
                <div className="flex justify-center">
                  <button className="rounded-md bg-[#D1222A] text-[#D1222A] bg-opacity-20 py-2 px-4">
                    68% OFF
                  </button>
                </div>
              </div>
              <div className="text-[#030303] text-base pb-4">
                End:
                <span className="text-[#5E5E5E]">July 26, 2022 12:30 am</span>
              </div>
              <div className="text-[#030303] text-base pb-4">
                Time:<span className="text-[#5E5E5E]">10:45 AM-01:30 PM</span>
              </div>
              <div className="text-[#030303] text-base pb-4">
                Venue:
                <span className="text-[#5E5E5E]">New York, TX 82760, US</span>
              </div>
              <div className="">
                <button className="w-full rounded-md bg-[#D1222A] text-white py-2 px-4">
                  Enroll
                  <ArrowForwardIcon style={{ color: "white" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-4 sm:p-20 flex flex-col-reverse sm:flex-row ">
        <div className="w-full md:w-1/2">
          <div className="text-2xl md:text-4xl text-[#030303] font-bold">
            RESEARCH-PRACTICE PARTNERSHIPS
          </div>
          <div className="text-xl md:text-2xl text-[#1F1F1F] font-bold py-4">
            Developing a Black Studies Curriculum for New York City Schools
          </div>
          <div className="text-sm md:text-base text-[#5E5E5E] pb-8">
            In partnership with the United Way of New York City, Eagle Academy
            Foundation, Black Edfluencers-United, and Association of Black
            Educators of New York, BERC is leading the development of an
            interdisciplinary PK-12 Black studies curriculum and professional
            learning plan for the New York City schools and assessing
            educational equity in NYC with a focus on the implications for Black
            students, families, educators, and communities.
          </div>
          <div className="py-4 flex justify-start">
            <button className="rounded-md text-[#030303] bg-[#F9AA1B] font-bold py-2 px-4">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 md:px-8 flex justify-end">
          <CustomImage src="/images/EventImage1.svg" />
        </div>
      </div>
      <div className="w-full h-full p-4 sm:p-20 flex flex-col-reverse sm:flex-row-reverse ">
        <div className="w-full md:w-1/2">
          <div className="text-2xl md:text-4xl text-[#030303] font-bold">
            REPORTS & BRIEFS
          </div>
          <div className="text-xl md:text-2xl text-[#1F1F1F] font-bold py-4">
            Black Education in the Wake of COVID-19 & Systemic Racism
          </div>
          <div className="text-sm md:text-base text-[#5E5E5E] pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="py-4 flex justify-start">
            <button className="rounded-md text-[#030303] bg-[#F9AA1B] font-bold py-2 px-4">
              Learn more
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 md:px-8 flex justify-start">
          <CustomImage src="/images/EventImage1.svg" />
        </div>
      </div>
    </>
  );
}
