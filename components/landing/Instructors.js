import { Grid } from "@mui/material";
import React from "react";
import EducationCard from "../card/EducationCard";
import InstructorCard from "../card/InstructorCard";
export default function Instructors() {
  return (
    <div className="bg-[#D1222A] h-full px-2 sm:px-12 pt-12">
      <div className="flex flex-col justify-center items-center pb-10">
        <div className="text-2xl sm:text-4xl pb-4 text-white text-center bold">
          Instructors that are Most Popular{" "}
        </div>
        <div className="text-base sm:text-2xl text-white text-center">
          Loem ipsum makcov task vanade Hemiskade mevatuledes
        </div>
      </div>
      <Grid container spacing={2}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <InstructorCard
            avatarsrc="/images/avatar1.png"
            instructorName="Julie Blees"
            role="Design and Development"
            visitedCount={152232}
            courseCount={22}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <InstructorCard
            avatarsrc="/images/avatar1.png"
            instructorName="Julie Blees"
            role="Design and Development"
            visitedCount={152232}
            courseCount={22}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <InstructorCard
            avatarsrc="/images/avatar1.png"
            instructorName="Julie Blees"
            role="Design and Development"
            visitedCount={152232}
            courseCount={22}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <InstructorCard
            avatarsrc="/images/avatar1.png"
            instructorName="Julie Blees"
            role="Design and Development"
            visitedCount={152232}
            courseCount={22}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <InstructorCard
            avatarsrc="/images/avatar1.png"
            instructorName="Julie Blees"
            role="Design and Development"
            visitedCount={152232}
            courseCount={22}
          />
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <InstructorCard
            avatarsrc="/images/avatar1.png"
            instructorName="Julie Blees"
            role="Design and Development"
            visitedCount={152232}
            courseCount={22}
          />
        </Grid>
      </Grid>
      <div className="py-8 flex justify-center">
        <button className="rounded-3xl bg-black text-white py-2 px-4">
          View All
        </button>
      </div>
    </div>
  );
}
