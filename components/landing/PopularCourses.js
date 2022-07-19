import { Grid } from "@mui/material";
import React from "react";
import CourseCard from "../card/CourseCard";

export default function PopularCourses() {
  return (
    <div className="bg-[#F5F5F5] h-full p-2 md:p-12">
      <div className=" pt-10">
        <div className="text-2xl md:text-4xl pb-10 text-black text-center font-bold">
          Most PoPular Courses
        </div>
      </div>
      <div className="">
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CourseCard
              imgsrc="/images/DesignCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Mathematics"
              description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar1.png"
              instructorName="Julie Blees"
              price={6.48}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CourseCard
              imgsrc="/images/WorkCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Programming"
              description="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar2.png"
              instructorName="Julie Blees"
              price={6.48}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CourseCard
              imgsrc="/images/SystemsCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Relational Database"
              description="ccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar3.png"
              instructorName="Julie Blees"
              price={6.48}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CourseCard
              imgsrc="/images/DesignCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Mathematics"
              description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar1.png"
              instructorName="Julie Blees"
              price={6.48}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CourseCard
              imgsrc="/images/WorkCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Programming"
              description="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar2.png"
              instructorName="Julie Blees"
              price={6.48}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <CourseCard
              imgsrc="/images/SystemsCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Relational Database"
              description="cccccccccccccccccccccccccccccccccccccccccccccccccc"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar3.png"
              instructorName="Julie Blees"
              price={6.48}
            />
          </Grid>
        </Grid>
      </div>
      <div className="py-8 flex justify-center">
        <button className="rounded-3xl bg-red-700 md:bg-black text-white py-2 px-4">
          View All
        </button>
      </div>
    </div>
  );
}
