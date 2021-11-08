import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

import pattern1 from '../../static/patterns/pattern1.jpg'
import pattern2 from '../../static/patterns/pattern2.jpg'
import pattern3 from '../../static/patterns/pattern3.jpg'
import pattern4 from '../../static/patterns/pattern4.jpg'
import pattern5 from '../../static/patterns/pattern5.jpg'

export default function CompanyCard(props) {

    return (
        <Grid container spacing={2}>
            <Card sx={{ border: "groove", maxWidth: 300, maxHeight: 400 }}>
                <CardActionArea >
                    <Grid item xs={12}>

                        <CardMedia
                            component='img'
                            height='140'
                            image={pattern1}
                            width='inherit'
                        />
                    </Grid>
                    <Grid item container>

                        <CardContent>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant='h4' component='div'>
                                    {props.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='body2' color='text.secondary'>
                                    {props.brief}
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Grid>
                </CardActionArea>
                <Grid>
                    <CardActions>
                        <Button size='small' color='primary'>
                            Learn More
                        </Button>
                    </CardActions>
                </Grid>
            </Card >
        </Grid >
    );
}