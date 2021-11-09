import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";

export default function CompanyPage(props) {


    const state = useLocation()

    return (
        <Grid container>
            <Grid item xs={3}>
                <PageHeader></PageHeader>
                <SideMenu></SideMenu>
            </Grid>
            <Grid item xs={9}></Grid>
            <Grid item xs={2}>
                <Typography variant='h4' component='div'>
                    {state.state.company.companyName}
                </Typography>
            </Grid>
        </Grid>
    )
}