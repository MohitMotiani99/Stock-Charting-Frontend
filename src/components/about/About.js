import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import AboutThis from "./AboutThis";


export default function About(props) {


    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <AboutThis />
            </Grid>
        </Grid>

    );
}

