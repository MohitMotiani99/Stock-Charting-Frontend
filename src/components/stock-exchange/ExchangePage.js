import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import ExchangeMemo from "./ExchangeMemo";

export default function ExchangePage(props) {


    const state = useLocation()

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <PageHeader></PageHeader>
                <SideMenu></SideMenu>
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={2.5}></Grid>
            <Grid item xs={8}>
                <ExchangeMemo exchange={state.state.exchange} />
            </Grid>
        </Grid>
    )
}