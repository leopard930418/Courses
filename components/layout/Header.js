import { Container, Drawer, Grid, Menu, MenuItem, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomImage from "../base/CustomImage";
import CustomText from "../base/CustomText";
import ReactSearchBox from "react-search-box";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Router from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { Dropdown } from "rsuite";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      className={`fixed w-full ${
        color ? "bg-white" : "bg-white md:bg-red-700"
      } z-50 py-2 px-0 md:px-20`}
    >
      {/* <Container sx={{ maxWidth: 1440 }}> */}
      <Grid container className="items-center">
        <Grid item lg={1} md={1} sm={2} xs={2}>
          <div className="">
            <CustomImage
              src={"/images/logo.svg"}
              className="h-20 cursor-pointer"
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
          lg={5}
          md={5}
          // sm={0}
          // xs={0}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Grid container spacing={3} justifyContent="space-around">
            <Grid item>
              <div
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className={`cursor-pointer ${
                  color ? "text-black" : "text-white"
                }`}
              >
                Courses
                <KeyboardArrowDownIcon style={{color:"white"}}/>
              </div>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                disableScrollLock={true}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleClose, Router.push("/event");
                  }}
                >
                  event
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose, Router.push("/history");
                  }}
                >
                  history
                </MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
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
          <div className="flex justify-end">
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
