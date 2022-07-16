import React, { useState, useEffect } from "react";
import { Container, Divider, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import Router from "next/router";
export default function Footer({ ...props }) {
  return (
    <>
      <div className="w-full h-full bg-[#F5F5F5] p-4 sm:p-12 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3">
          <div className="flex justify-center sm:justify-start">
            <CustomImage src="/images/logo.svg" className="h-16"></CustomImage>
          </div>
          <div className="text-xl text-[#353535] break-words">
            Lorem ipsum makrov task vnade tasonde. Hemiskade. Lorem ipsum makrov
            task vnade tasonde. Hemiskade.
          </div>
        </div>
        <div className="w-full sm:w-2/3 flex flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-2/3 space-x-8 flex flex-row justify-around">
            <ul>
              <p className="text-2xl text-[#030303] font-bold">Quick Links</p>
              <li className="text-xl text-[#353535] cursor-pointer" onClick={()=>{Router.push('/about_us')}}>About Us</li>
              <li className="text-xl text-[#353535] cursor-pointer">For Business</li>
              <li className="text-xl text-[#353535] cursor-pointer">Affiliates</li>
              <li className="text-xl text-[#353535] cursor-pointer">Careers</li>
              <li className="text-xl text-[#353535] cursor-pointer">News</li>
            </ul>
            <ul>
              <p className="text-2xl text-[#030303] font-bold">Connect</p>
              <li className="text-xl text-[#353535] cursor-pointer">Blog</li>
              <li className="text-xl text-[#353535] cursor-pointer">Contact Us</li>
            </ul>
            <ul>
              <p className="text-2xl text-[#030303] font-bold">Legal</p>
              <li className="text-xl text-[#353535] cursor-pointer">Terms of Service</li>
              <li className="text-xl text-[#353535] cursor-pointer">Privacy Policy</li>
              <li className="text-xl text-[#353535] cursor-pointer">Cookies</li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 space-x-4 flex flex-row justify-center sm:justify-end p-4 sm:p-0">
            <CustomImage
              src="/images/twitter.svg"
              className="h-8"
            ></CustomImage>
            <CustomImage src="/images/github.svg" className="h-8"></CustomImage>
            <CustomImage
              src="/images/website.svg"
              className="h-8"
            ></CustomImage>
            <CustomImage
              src="/images/instagram.svg"
              className="h-8"
            ></CustomImage>
            <CustomImage
              src="/images/linkedin.svg"
              className="h-8"
            ></CustomImage>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-[#F5F5F5] p-4 sm:px-12 text-center sm:text-left">
        @1999-2022 Design Labs
      </div>
    </>
  );
}
