import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';
import RateReviewIcon from '@mui/icons-material/RateReview';

export default function Remarks(props) {

    console.log(props.remarks)

    return (
        <Grid container sx={{
            pt: 5
        }}>
            <Grid item xs={12} container>
                <Grid item xs={2}>
                    <IconButton color='primary'>
                        <RateReviewIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant='h4' color='blue'>
                        Remarks
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} container sx={{ pt: 1 }}>
                <Paper
                    sx={{
                        bgcolor: 'yellow',
                        textAlign: 'left',
                        color: 'black',

                    }}
                    elevation={4}
                >

                    <Grid item xs={12}>
                        <Typography variant='h6' component='div'>
                            {props.remarks}
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid >
    );
}