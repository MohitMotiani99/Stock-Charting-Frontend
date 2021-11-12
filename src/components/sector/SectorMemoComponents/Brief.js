import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';

export default function Brief(props) {

    console.log(props.brief)

    return (
        <Grid container>
            <Grid item xs={12} container>
                <Grid item xs={1}>
                    <IconButton color='primary'>
                        <InfoIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={11}>
                    <Typography variant='h4' color='blue'>
                        About Us
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} container sx={{ pt: 1 }}>
                <Paper
                    sx={{
                        bgcolor: 'gray',
                        textAlign: 'left',
                        color: 'white',
                        width: '100%'
                    }}
                    elevation={4}
                >

                    <Grid item xs={12}>
                        <Typography variant='h6' component='div' width='100%'>
                            {props.brief}
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid >
    );
}