import { Grid } from "@mui/material";
import React from "react";
import DisplayCard from "./DisplayCard";
import company from '../../static/company.jpg'
import stock_exchange from '../../static/stock_exchange.jpg'
import sector from '../../static/sector.png'
import user from '../../static/user.png'


export default function Features(props) {
    return (
        <Grid container spacing={3} sx={{ pt: 20 }}>
            <Grid item md={3}>
                <DisplayCard name="Companies" brief="View All the Registerd Companies and Click on them to explore each of them in
                                        detail" image={company}></DisplayCard>
            </Grid>
            <Grid item md={3}>
                <DisplayCard name="Stock Exchanges" brief="View All the Registerd Stock Exchanges and Click on them to explore each of them in
                                        detail" image={stock_exchange}></DisplayCard>
            </Grid>
            <Grid item md={3}>
                <DisplayCard name="Sectors" brief="View All the Registerd Sectors and Click on them to explore each of them in
                                        detail" image={sector}></DisplayCard>
            </Grid>
            <Grid item md={3}>
                <DisplayCard name="Users" brief="View All the Registerd Users and Click on them to explore each of them in
                                        detail" image={user}></DisplayCard>
            </Grid>
        </Grid>
    )
}