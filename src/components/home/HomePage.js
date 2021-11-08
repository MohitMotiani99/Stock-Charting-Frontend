import React from "react";
import { Grid } from '@mui/material';
import SideMenu from './SideMenu';
import Features from './Features';
import PageHeader from './PageHeader';

export default function HomePage(props) {
    return (
        <Grid container spacing={10}>
            <Grid item xs={3}>
                <PageHeader></PageHeader>
                <SideMenu></SideMenu>
            </Grid>

            <Grid item xs={8}>

                <Features></Features>
            </Grid>


        </Grid>
    )
}