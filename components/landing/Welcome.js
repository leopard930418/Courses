import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";
import Router from "next/router"

export default function Welcome() {
  return (
    <>
      <div className="bg-red-700 h-90vh sm:h-screen px-2 sm:px-10">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Grid
              container
              spacing={4}
              className="mt-20 sm:mt-0 flex flex-col justify-center sm:justify-start items-center sm:items-start"
            >
              <Grid item>
                <div className="text-3xl sm:text-5xl text-white font-bold text-center sm:text-left pt-10 sm:pt-0">
                  LEARN COURSES AT YOUR FINGERTIPS
                </div>
              </Grid>
              <Grid item>
                <div className="text-base sm:text-2xl text-white text-center sm:text-left">
                  A learning system based on formalised <br />
                  teaching with the help of resources.
                </div>
              </Grid>
              <Grid item>
                <div className="">
                  <button
                    className="rounded-3xl bg-black text-white py-2 px-4"
                    onClick={() => {
                      Router.push('/login');
                    }}
                  >
                    Try Design Labs For Free
                  </button>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <div className="flex justify-center">
              <CustomImage src={"/images/intro.svg"}></CustomImage>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="bg-white h-20">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <CustomImage
              src={"/images/company1.svg"}
              className="h-8 sm:h-16"
            ></CustomImage>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <CustomImage
              src={"/images/company2.svg"}
              className="h-8 sm:h-16"
            ></CustomImage>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <CustomImage
              src={"/images/company3.svg"}
              className="h-8 sm:h-16"
            ></CustomImage>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <CustomImage
              src={"/images/company4.svg"}
              className="h-8 sm:h-16"
            ></CustomImage>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <CustomImage
              src={"/images/company5.svg"}
              className="h-8 sm:h-16"
            ></CustomImage>
          </Grid>
          <Grid item lg={2} md={2} sm={4} xs={4}>
            <CustomImage
              src={"/images/company6.svg"}
              className="h-8 sm:h-16"
            ></CustomImage>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
