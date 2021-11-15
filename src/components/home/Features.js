import { Grid } from "@mui/material";
import React from "react";
import DisplayCard from "./DisplayCard";
import company from '../../static/company.jpg'
import stock_exchange from '../../static/stock_exchange.jpg'
import sector from '../../static/sector.png'
import user from '../../static/user.png'
import ipo from '../../static/ipo.jpg'
import upload from '../../static/upload.jpg'
import about from '../../static/about.jpg'
import creator from '../../static/creator.png'


export default function Features(props) {
    return (
        <Grid container spacing={3} sx={{ pt: 20 }}>
            <Grid item md={3}>
                <DisplayCard name="Companies" brief="View All the Registerd Companies and Click on them to explore each of them in
                                        detail" image={company} next="/companies"></DisplayCard>
            </Grid>
            <Grid item md={3}>
                <DisplayCard name="Stock Exchanges" brief="View All the Registerd Stock Exchanges and Click on them to explore each of them in
                                        detail" image={stock_exchange} next='/exchanges'></DisplayCard>
            </Grid>
            <Grid item md={3}>
                <DisplayCard name="Sectors" brief="View All the Registerd Sectors and Click on them to explore each of them in
                                        detail" image={sector} next='/sectors'></DisplayCard>
            </Grid>
            <Grid item md={3}>
                <DisplayCard name="Users" brief="View All the Registerd Users and Click on them to explore each of them in
                                        detail" image={user} next='/users'></DisplayCard>
            </Grid>
            <Grid item md={3}>
                <DisplayCard name="IPOs" brief="View All the Planned IPOs and dilter them according to Stock Exchange & Company Name"
                    image={ipo} next='/ipos'></DisplayCard>
            </Grid>
            <Grid item md={3.5}>
                <DisplayCard name="Upload Stock Sheets" brief="Upload Multiple stock price sheets of companies in specific exchanges to help to help plot them"
                    image={upload} next='/upload'></DisplayCard>
            </Grid>
            <Grid item md={3}>
                <DisplayCard name="About Stonks!" brief="A bit of development aspect of the website"
                    image={about} next='/about'></DisplayCard>
            </Grid>
            <Grid item md={2.5}>
                <DisplayCard name="Creators" brief="( ᴜ ω ᴜ )"
                    image={creator} next='/creators'></DisplayCard>
            </Grid>

        </Grid>
    )
}