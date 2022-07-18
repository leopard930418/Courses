import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import CustomImage from "../base/CustomImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import TeacherCard from "../card/TeacherCard";

export default function EventMain() {
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  return (
    <>
      <div className="w-full h-full pt-20 pb-10">
        <CustomImage
          src={`/images/HistoryHeader${isPhoneMode ? "M" : ""}.svg`}
        />
      </div>
      <div className="w-full h-full p-4 sm:p-12 flex flex-col-reverse sm:flex-row">
        <div></div>
      </div>
      
    </>
  );
}
