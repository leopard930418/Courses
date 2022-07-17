import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";

export default function AboutMain() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full h-full pt-20 pb-10">
        <CustomImage src={`/images/AboutHeader${isPhoneMode ? "M" : ""}.svg`} />
      </div>
      <div className="flex flex-col sm:flex-row p-2 md:p-20">
        <div className="w-full md:w-1/2">
          <CustomImage src="/images/AboutImage1.svg"></CustomImage>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div className="text-2xl sm:text-4xl pb-4 text-[#030303] text-left font-bold pt-10">
            Achieve Your Goals With BERC
          </div>
          <div className="text-base pb-4 text-[#5E5E5E] text-left ">
            Lorem ipsum spengen nyng att betredes. Pugisk ayna, deng med
            preheten.
          </div>
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
            <button className="rounded-md bg-[#F9AA1B] text-[#030303] py-2 px-4">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row-reverse p-2 md:p-20">
        <div className="w-full md:w-1/2">
          <CustomImage src="/images/AboutImage2.svg"></CustomImage>
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div className="text-2xl sm:text-4xl pb-4 text-[#030303] text-left font-bold pt-10">
            Why we are best?
          </div>
          <div className="text-xl sm:text-2xl pb-4 text-[#5E5E5E] text-left ">
            Everything you can do in a physical classroom you can do with eLearn
          </div>
          <div className="text-base pb-4 text-[#5E5E5E] text-left ">
            Lorem ipsum spengen nyng att betredes. Pugisk ayna, deng med
            preheten.
          </div>

          <div className="py-4">
            <button className="border-b border-black text-[#030303]">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-20">
        <div className="text-xl sm:text-2xl text-[#D1222A] text-center py-4">
          Our Teacher
        </div>
        <div className="text-2xl sm:text-4xl text-[#030303] font-bold text-center pt-4 pb-8">
          Meet Our Teacher
        </div>
        <div>
          <Grid container spacing={6}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TeacherCard
                imgsrc="/images/teacher1.svg"
                teacherName="Jomos Dysan"
                description="Your Title Here"
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TeacherCard
                imgsrc="/images/teacher2.svg"
                teacherName="Jomos Dysan"
                description="Your Title Here"
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TeacherCard
                imgsrc="/images/teacher1.svg"
                teacherName="Jomos Dysan"
                description="Your Title Here"
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TeacherCard
                imgsrc="/images/teacher2.svg"
                teacherName="Jomos Dysan"
                description="Your Title Here"
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TeacherCard
                imgsrc="/images/teacher1.svg"
                teacherName="Jomos Dysan"
                description="Your Title Here"
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <TeacherCard
                imgsrc="/images/teacher2.svg"
                teacherName="Jomos Dysan"
                description="Your Title Here"
              />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="p-2 md:p-20">
        <div className="text-2xl sm:text-4xl text-[#030303] font-bold text-center pt-4 pb-8">
          We Are Proud
        </div>
        <div className="text-base sm:text-xl text-[#5E5E5E] text-center pt-4 pb-8">
          You don't have to struggle alone, you're got our assistance and help.
        </div>
        {isPhoneMode ? (
          <div className="flex flex-col">
            <div className="flex flex-row justify-around">
              <div className="flex flex-col items-center pb-4">
                <CustomImage
                  src="/images/totalEnrolledIcon.svg"
                  className="h-8 pb-2"
                />
                <div className="text-black text-3xl ">345858</div>
                <div className="text-[#5E5E5E] text-base ">
                  Students Enrolled
                </div>
              </div>
              <div className="flex flex-col items-center">
                <CustomImage
                  src="/images/totalCourseIcon.svg"
                  className="h-8 pb-2"
                />
                <div className="text-black text-3xl ">2456</div>
                <div className="text-[#5E5E5E] text-base ">Total Courses</div>
              </div>
            </div>
            <div className="flex flex-row justify-around">
              <div className="flex flex-col items-center">
                <CustomImage
                  src="/images/totalLearnerIcon.svg"
                  className="h-8 pb-2"
                />
                <div className="text-black text-3xl ">24085</div>
                <div className="text-[#5E5E5E] text-base ">Online Learners</div>
              </div>
              <div className="flex flex-col items-center">
                <CustomImage
                  src="/images/totalFollowerIcon.svg"
                  className="h-8 pb-2"
                />
                <div className="text-black text-3xl ">202k</div>
                <div className="text-[#5E5E5E] text-base ">
                  Foreign Followers
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-row justify-between">
            <div className="flex flex-col items-center">
              <CustomImage
                src="/images/totalEnrolledIcon.svg"
                className="h-8 pb-2"
              />
              <div className="text-black text-3xl ">345858</div>
              <div className="text-[#5E5E5E] text-base ">Students Enrolled</div>
            </div>
            <div className="flex flex-col items-center">
              <CustomImage
                src="/images/totalCourseIcon.svg"
                className="h-8 pb-2"
              />
              <div className="text-black text-3xl ">2456</div>
              <div className="text-[#5E5E5E] text-base ">Total Courses</div>
            </div>
            <div className="flex flex-col items-center">
              <CustomImage
                src="/images/totalLearnerIcon.svg"
                className="h-8 pb-2"
              />
              <div className="text-black text-3xl ">24085</div>
              <div className="text-[#5E5E5E] text-base ">Online Learners</div>
            </div>
            <div className="flex flex-col items-center">
              <CustomImage
                src="/images/totalFollowerIcon.svg"
                className="h-8 pb-2"
              />
              <div className="text-black text-3xl ">202k</div>
              <div className="text-[#5E5E5E] text-base ">Foreign Followers</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}