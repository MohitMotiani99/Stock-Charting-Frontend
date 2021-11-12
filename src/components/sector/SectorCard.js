import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import * as SectorActions from '../../actions/SectorActions'
import * as StockPriceActions from '../../actions/StockPriceActions'
import * as HomeActions from '../../actions/HomeActions'

import pattern2 from '../../static/patterns/pattern2.jpg'

import { useNavigate } from "react-router";
import SaveSector from "./AdminModeComponents/SaveSector";

function SectorCard(props) {

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
                            image={pattern2}
                            width='inherit'
                        />
                    </Grid>
                    <Grid item xs={12} container>

                        <CardContent>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant='h4' component='div'>
                                    {props.sector.sectorName}
                                </Typography>
                            </Grid>
                            {
                                (props.admin) ? <Grid item container>
                                    <Grid item xs={9}></Grid>
                                    <Grid item xs={3} sx={{
                                        justifyContent: 'center'
                                    }}>
                                        <Button size='small' color='primary'
                                            onClick={() => {
                                                props.setType("update")
                                                dispatch(StockPriceActions.setCurrSector(props.sector))
                                                props.setTrigger(true)
                                            }}
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
                                    await dispatch(StockPriceActions.setCurrSector(props.sector))
                                    navigate(`/sector/${props.sector.sectorId}`, {
                                        state: {
                                            sector: props.sector
                                        }
                                    })
                                }}
                            >
                                Learn More
                            </Button>
                        </Grid>
                    </CardActions>

                </Grid>
            </Card >
        </Grid >
    );
}
function mapStateToProps(state) {
    return {
        currSector: state.stockPriceReducer.currSector,
        admin: state.homeReducer.admin
    }
}
export default connect(mapStateToProps)(SectorCard)