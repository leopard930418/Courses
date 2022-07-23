import React from "react";
import CourseCard from "../card/CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FeaturedCourse() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: isPhoneMode ? 1 : 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="bg-[#F5F5F5] h-full px-2 py-10 md:p-20">
      <div className=" pt-10">
        <div className="text-2xl md:text-4xl pb-10 text-black text-center md:text-left font-bold">
          Featured Courses
        </div>
      </div>
      <div className="">
        {isPhoneMode ? (
          <div className="space-y-4">
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
            <CourseCard
              imgsrc="/images/WorkCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Programming"
              description="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar2.png"
              instructorName="Julie Blees"
              price={6.48}
            />
            <CourseCard
              imgsrc="/images/SystemsCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Relational Database"
              description="cccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar3.png"
              instructorName="Julie Blees"
              price={6.48}
            />
            <div className="flex justify-center">
              <button className="rounded-3xl bg-red-700 text-white py-2 px-4">
                View All
              </button>
            </div>
          </div>
        ) : (
          <Slider {...settings}>
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
            <CourseCard
              imgsrc="/images/WorkCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Programming"
              description="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar2.png"
              instructorName="Julie Blees"
              price={6.48}
            />
            <CourseCard
              imgsrc="/images/SystemsCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Relational Database"
              description="cccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar3.png"
              instructorName="Julie Blees"
              price={6.48}
            />
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
            <CourseCard
              imgsrc="/images/WorkCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Programming"
              description="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar2.png"
              instructorName="Julie Blees"
              price={6.48}
            />
            <CourseCard
              imgsrc="/images/SystemsCourse.svg"
              chipsrc="/images/Designchip.svg"
              review={5}
              title="Relational Database"
              description="cccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
              accessTime="12hr 42mins"
              lecturesCount={43}
              avatarsrc="/images/avatar3.png"
              instructorName="Julie Blees"
              price={6.48}
            />
          </Slider>
        )}
      </div>
    </div>
  );
}
