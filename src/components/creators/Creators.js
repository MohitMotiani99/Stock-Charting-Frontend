import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import CreatorThis from "./CreatorThis";


export default function Creators(props) {


    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <CreatorThis />
            </Grid>
        </Grid>

    );
}

