import { Grid, Typography } from "@mui/material";
import React from "react";

export default function CreatorThis(props) {

    return (
        <Grid conatiner sx={{ pt: 10 }}>
            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom>
                    Mohit Motiani
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h4' gutterBottom>
                    Source
                </Typography>
                <Typography variant='body2' gutterBottom>
                    <a href="https://github.com/MohitMotiani99/Stock-Charting-Frontend">Frontend</a>
                    <br />
                    <a href="https://github.com/MohitMotiani99/Stock-Charting-Backend">Backend</a>
                </Typography>
            </Grid>
        </Grid >
    )
}