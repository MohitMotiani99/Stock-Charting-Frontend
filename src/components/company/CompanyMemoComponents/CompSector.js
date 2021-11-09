import { Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { Row, Container, Col } from "react-grid-system";
import CropRotateIcon from '@mui/icons-material/CropRotate';

export default function CompSector(props) {
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
            <Grid item xs={3}>
                <IconButton>
                    <CropRotateIcon></CropRotateIcon>
                </IconButton>
            </Grid>
            <Grid item xs={6} md={9}>
                <Typography variant='h5' gutterBottom component='div'>
                    {props.sector}
                </Typography>
            </Grid>
        </Grid>
    );
}