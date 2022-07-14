import { Container, Drawer, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import CustomImage from "../base/CustomImage";
import Link from "next/link"

export default function Header({ ...props }) {
  return (
    <>
      <Container sx={{ maxWidth: 1440 }}>
        <Grid container className="items-center">
          <Grid item lg={3} md={3} sm={4} xs={4}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <CustomImage src={"/images/logo.svg"} className="h-8"></CustomImage>
            </Grid>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            // sm={0}
            // xs={0}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <Grid container spacing={3} justifyContent="end">
              
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
