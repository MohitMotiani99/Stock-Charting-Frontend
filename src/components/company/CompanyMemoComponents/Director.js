import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { persons } from "./StockPeople";

export default function Director(props) {
    return (
        <Grid container>
            <Card>
                <CardActionArea>
                    <Grid item xs={12}>
                        <CardMedia
                            component="img"
                            height="240"
                            width='100%'
                            image={persons[Math.floor(Math.random() * 4)]}
                            alt="Director"
                        />
                    </Grid>
                    <Grid item xs={12} container>
                        <CardContent>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h4" component="div"
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    {props.dirName}
                                </Typography>
                            </Grid>

                        </CardContent>
                    </Grid>
                </CardActionArea>
            </Card>

        </Grid>
    );
}