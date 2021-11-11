import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Paper from '@mui/material/Paper';
import InfoIcon from '@mui/icons-material/Info';
import BusinessIcon from '@mui/icons-material/Business';

export default function ContactAddress(props) {

    console.log(props.contactAddress)

    return (
        <Grid container sx={{ pl: 10 }}>
            <Grid item xs={12} container>
                <Grid item xs={2}>
                    <IconButton color='primary'>
                        <BusinessIcon />
                    </IconButton>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant='h4' color='blue'>
                        Address
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} container sx={{
                pt: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <Paper
                    sx={{
                        bgcolor: 'gray',
                        textAlign: 'left',
                        color: 'white',
                        width: '100%'
                    }}
                    elevation={4}
                >

                    <Grid item xs={12} container direction='column' sx={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                        <Grid item xs={2}>
                            <Typography variant='h6' component='div'>
                                {"Building Number: " + props.contactAddress.buildingNumber}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6' component='div'>
                                {"Street: " + props.contactAddress.street}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6' component='div'>
                                {"City: " + props.contactAddress.city}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6' component='div'>
                                {"State: " + props.contactAddress.state}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6' component='div'>
                                {"Country: " + props.contactAddress.country}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant='h6' component='div'>
                                {"Zip: " + props.contactAddress.zip}
                            </Typography>
                        </Grid>

                    </Grid>
                </Paper>
            </Grid>
        </Grid >
    );
}