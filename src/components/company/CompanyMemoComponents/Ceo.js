import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import people1 from '../../../static/people/people1.jpg'
import { quotes } from './InspirationalQuotes'

export default function Ceo(props) {
    return (
        <Grid container>
            <Card>
                <CardActionArea>
                    <Grid item xs={12}>
                        <CardMedia
                            component="img"
                            height="240"
                            width='100%'
                            image={people1}
                            alt="CEO"
                        />
                    </Grid>
                    <Grid item xs={12} container>
                        <CardContent>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h3" component="div"
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    {props.ceoName + '(CEO)'}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" color="text.secondary"
                                    sx={{
                                        width: '100%',
                                        fontStyle: 'italic'
                                    }}
                                >
                                    {quotes[Math.floor(Math.random() * 7)]}
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Grid>
                </CardActionArea>
            </Card>

        </Grid>
    );
}
