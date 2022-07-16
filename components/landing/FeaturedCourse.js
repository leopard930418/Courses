import React from "react";
import CourseCard from "../card/CourseCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function FeaturedCourse() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
 
  return (
    <div className="bg-[#F5F5F5] h-full p-2 sm:p-12">
      <div className=" pt-10">
        <div className="text-2xl sm:text-4xl pb-10 text-black text-left font-bold">
          Featured Courses
        </div>
      </div>
      <div className="">
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
            description="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
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
            description="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
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
            description="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
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
            description="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
            accessTime="12hr 42mins"
            lecturesCount={43}
            avatarsrc="/images/avatar3.png"
            instructorName="Julie Blees"
            price={6.48}
          />
        </Slider>
      </div>
    </div>
  );
}
