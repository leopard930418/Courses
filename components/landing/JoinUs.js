import { Grid } from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
// import CircleChecked from "@material-ui/icons/CheckCircleOutline";
// import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
// import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CustomImage from "../base/CustomImage";

export default function JoinUs() {
  return (
    <div className="bg-[#F5F5F5] h-full p-2 md:p-12">
      <div className="bg-[#2E6D48] w-full px-12 pt-12 rounded-md flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div className="text-2xl md:text-4xl pb-4 text-white text-left font-bold">
            Change your Learning
          </div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Loremm ipsum is simply dummy text of the planting and pye setting industry"
              className="text-white"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Loremm ipsum is simply dummy text of the planting and pye setting industry"
              className="text-white"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Loremm ipsum is simply dummy text of the planting and pye setting industry"
              className="text-white"
            />
          </FormGroup>

          <div className="py-8">
            <button className="rounded-3xl bg-black text-white py-2 px-4">
              Join Us Today
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <CustomImage src={"/images/JoinUsImage.svg"}></CustomImage>
        </div>
      </div>
    </div>
  );
}
