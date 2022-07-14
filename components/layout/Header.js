import { Container, Drawer, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomImage from "../base/CustomImage";
import ReactSearchBox from "react-search-box";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import Link from "next/link";

export default function Header({ ...props }) {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "30px",
    border: "solid 1px white",
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    <div className="bg-red-700">
      <Container sx={{ maxWidth: 1440 }}>
        <Grid container className="items-center">
          <Grid
            item
            lg={2}
            md={2}
            sm={4}
            xs={4}
          >
            <div className="flex justify-center">
              
            <CustomImage
              src={"/images/logo.svg"}
              className="h-16"
            ></CustomImage>
            </div>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
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
          ></Grid>

          <Grid item lg={2} md={2} sm={4} xs={4}>
            <button className="rounded-3xl bg-black text-white py-2 px-4">
              Register Now
            </button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
