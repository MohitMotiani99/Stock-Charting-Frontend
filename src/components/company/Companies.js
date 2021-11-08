import { Grid } from "@mui/material";
import React from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import CompanyList from "./CompanyList";
import CompanySearch from "./CompanySearch";


export default function Companies(props) {
    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <CompanySearch />
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={8}>
                <CompanyList></CompanyList>
            </Grid>


        </Grid>
    );
}