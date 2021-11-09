import { Grid, Typography } from "@mui/material";
import React from "react";
import Paper from '@mui/material/Paper';


export default function Brief(props) {

    console.log(props.brief)

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h6'>
                    About Us
                </Typography>
            </Grid>
            <Grid item xs={12} container>
                <Paper
                    sx={{
                        bgcolor: 'gray',
                        textAlign: 'left',
                        color: 'white',

                    }}
                    elevation={4}
                >

                    <Grid item xs={12}>
                        <Typography variant='body2' component='div'>
                            {props.brief}
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid >
    );
}