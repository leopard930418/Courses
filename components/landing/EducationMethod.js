import { Grid } from "@mui/material";
import React from "react";
import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";
import EducationCard from "../card/EducationCard";
export default function EducationMethod() {
  return (
    <div className="bg-[#2E6D48] h-full px-2 py-10 md:p-20">
      <div className="flex flex-col justify-center items-center pb-10">
        <div className="text-2xl md:text-4xl pb-4 text-white text-center bold">
          We Educate your online in a more interactive way
        </div>
        <div className="text-base md:text-2xl text-white text-center">
          Loem ipsum makcov task vanade Hemiskade mevatuledes
        </div>
      </div>
      <Grid container spacing={4}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <EducationCard
            imgsrc="/images/Icon1.svg"
            title="Expert Teacher"
            description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <EducationCard
            imgsrc="/images/Icon2.svg"
            title="Online Courses"
            description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />{" "}
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <EducationCard
            imgsrc={"/images/Icon3.svg"}
            title="24/7 Support"
            description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          />{" "}
        </Grid>
      </Grid>
    </div>
  );
}
