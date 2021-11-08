import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';


export default function DisplayCard(props) {
    return (
        <Grid container spacing={2}>
            <Card sx={{ border: "groove", maxWidth: 300, maxHeight: 400 }}>
                <CardActionArea >
                    <Grid item xs={12}>

                        <CardMedia
                            component='img'
                            height='140'
                            image={props.image}
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
                            Click Here
                        </Button>
                    </CardActions>
                </Grid>
            </Card >
        </Grid >
    );
}