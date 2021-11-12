import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import * as StockExchangeActions from '../../actions/StockExchangeActions'
import * as StockPriceActions from '../../actions/StockPriceActions'
import * as HomeActions from '../../actions/HomeActions'

import pattern3 from '../../static/patterns/pattern3.jpg'

import { useNavigate } from "react-router";
import SaveExchange from "./AdminModeComponents/SaveExchange";

function ExchangeCard(props) {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    let [adp, setAdp] = useState(props.admin)
    let [popUp, setPopUp] = useState(false)

    useEffect(() => {
        dispatch(HomeActions.setAdmin(true))
    })
    return (

        <Grid container spacing={2}>
            <Card sx={{ border: "groove", maxWidth: 300, maxHeight: 400 }}>
                <CardActionArea >
                    <Grid item xs={12}>

                        <CardMedia
                            component='img'
                            height='140'
                            image={pattern3}
                            width='inherit'
                        />
                    </Grid>
                    <Grid item xs={12} container>

                        <CardContent>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant='h4' component='div' sx={{
                                    width: '100%'
                                }}>
                                    {props.exchange.stockExchangeName}
                                </Typography>
                            </Grid>
                            {
                                (props.admin) ? <Grid item xs={12} container>
                                    <Grid item xs={9}></Grid>
                                    <Grid item xs={3} sx={{
                                        // justifyContent: 'center'
                                    }}>
                                        <Button size='small' color='primary'
                                            onClick={() => {
                                                props.setType("update")
                                                dispatch(StockPriceActions.setCurrExchange(props.exchange))
                                                props.setTrigger(true)
                                            }}
                                        // sx={{
                                        //     width: '100%',
                                        //     display: 'flex',
                                        //     justifyContent: 'right',
                                        //     alignItems: 'right',

                                        // }}
                                        >
                                            Update
                                        </Button>
                                    </Grid>
                                </Grid> : <Grid item></Grid>
                            }
                        </CardContent>
                    </Grid>
                </CardActionArea>
                <Grid item xs={12} container>
                    <CardActions>
                        <Grid item xs={12}>
                            <Button size='small' color='primary'
                                onClick={async () => {
                                    await dispatch(StockPriceActions.setCurrExchange(props.exchange))
                                    navigate(`/exchange/${props.exchange.stockExchangeId}`, {
                                        state: {
                                            exchange: props.exchange
                                        }
                                    })
                                }}
                            >
                                Learn More
                            </Button>
                        </Grid>
                        {/* {
                            (props.admin) ? <Grid item xs={6}>
                                <Button size='small' color='primary'
                                    onClick={() => {
                                        dispatch(StockExchangeActions.deleteExchange(props.exchange.stockExchangeId))
                                    }}
                                >
                                    Delete
                                </Button>
                            </Grid> : <Grid item></Grid>
                        } */}


                    </CardActions>

                </Grid>
            </Card >
        </Grid >
    );
}
function mapStateToProps(state) {
    return {
        currExchange: state.stockExchangeReducer.currExchange,
        admin: state.homeReducer.admin
    }
}
export default connect(mapStateToProps)(ExchangeCard)