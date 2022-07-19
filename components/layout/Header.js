import { Container, Drawer, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";
import ReactSearchBox from "react-search-box";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Router from "next/router";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";

export default function Header({ color = false, ...props }) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    border: "solid 1px white",
    backgroundColor: alpha("#F7F7F7", 1),
    "&:hover": {
      backgroundColor: alpha("#F7F7F7", 1),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  return (
    <div
      className={`fixed w-full ${
        color ? "bg-white" : "bg-white md:bg-red-700"
      } z-50 py-2`}
    >
      {/* <Container sx={{ maxWidth: 1440 }}> */}
      <Grid container className="items-center">
        <Grid item lg={2} md={2} sm={2} xs={2}>
          <div className="ml-0 md:ml-10">
            <CustomImage
              src={"/images/logo.svg"}
              className="h-16 cursor-pointer"
              onClick={() => {
                Router.push("/");
              }}
            ></CustomImage>
          </div>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={6}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for Courses"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          // sm={0}
          // xs={0}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Grid container spacing={3} justifyContent="space-around">
            <Grid item>
              <div
                onClick={() => {
                  Router.push("/courses");
                }}
                className={`cursor-pointer ${
                  color ? "text-black" : "text-white"
                }`}
              >
                Courses
              </div>
            </Grid>
            <Grid item>
              <div
                onClick={() => {
                  Router.push("/programs");
                }}
                className={`cursor-pointer ${
                  color ? "text-black" : "text-white"
                }`}
              >
                Programs
              </div>
            </Grid>
            <Grid item>
              <div
                onClick={() => {
                  Router.push("/partnership");
                }}
                className={`cursor-pointer ${
                  color ? "text-black" : "text-white"
                }`}
              >
                Partnership
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          lg={2}
          md={2}
          sm={4}
          xs={4}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <div className=" mr-0 md:mr-10 flex justify-end">
            <button
              className="rounded-3xl bg-black text-white py-2 px-4"
              onClick={() => {
                Router.push("/register");
              }}
            >
              Register Now
            </button>
          </div>
        </Grid>
        <Grid
          item
          lg={0}
          md={0}
          sm={4}
          xs={4}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <div className=" pr-2 flex justify-end">
            <MenuIcon />
          </div>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
}
