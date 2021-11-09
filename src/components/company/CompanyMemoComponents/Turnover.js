import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Container, Row, Col } from "react-grid-system";

export default function Turnover(props) {
    return (
        <Grid container sx={{
            bgcolor: 'lightgray',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            border: 'revert',
            borderRadius: '12px',
            height: '100px',
            alignItems: 'center'



        }}>
            <Grid item xs={3} sx={{
            }}>
                <IconButton>
                    <AttachMoneyIcon />
                </IconButton>
            </Grid>
            <Grid item xs={6} md={9} sx={{
            }}>
                <Typography variant='h5' gutterBottom component='div'>
                    {props.turnover + ' USD'}
                </Typography>
            </Grid>
        </Grid>
    );
}