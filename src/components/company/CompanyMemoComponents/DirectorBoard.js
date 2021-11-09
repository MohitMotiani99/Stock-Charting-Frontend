import { Grid, Typography } from "@mui/material";
import React from "react";
import Director from "./Director";


export default function DirectorBoard(props) {
    return (
        <Grid container sx={{ pt: 10 }}>
            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom component='div'>
                    Board Of Directors
                </Typography>
            </Grid>
            <Grid item xs={12} container spacing={3}>
                {
                    (props.boardOfDirectors).map((text) => {
                        return <Grid item sm={4}>
                            <Director dirName={text}></Director>
                        </Grid>
                    })

                }
            </Grid>
        </Grid>
    );
}