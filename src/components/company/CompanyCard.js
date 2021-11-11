import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import * as CompanyActions from '../../actions/CompanyActions'
import * as StockPriceActions from '../../actions/StockPriceActions'
import * as HomeActions from '../../actions/HomeActions'

import pattern1 from '../../static/patterns/pattern1.jpg'

import { useNavigate } from "react-router";
import SaveCompany from "./AdminModeComponents/SaveCompany";

function CompanyCard(props) {

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
                            image={pattern1}
                            width='inherit'
                        />
                    </Grid>
                    <Grid item xs={12} container>

                        <CardContent>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant='h4' component='div'>
                                    {props.company.companyName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h5' color='text.secondary' width='100%'>
                                    {props.company.sector + ' Giant'}
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
                                                dispatch(StockPriceActions.setCurrCompany(props.company))
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
                                    await dispatch(StockPriceActions.setCurrCompany(props.company))
                                    navigate(`/company/${props.company.companyId}`, {
                                        state: {
                                            company: props.company
                                        }
                                    })
                                }}
                            >
                                Learn More
                            </Button>
                        </Grid>
                        {
                            (props.admin) ? <Grid item xs={6}>
                                <Button size='small' color='primary'
                                    onClick={() => {
                                        dispatch(CompanyActions.deleteCompany(props.company.companyId))
                                    }}
                                >
                                    Delete
                                </Button>
                            </Grid> : <Grid item></Grid>
                        }


                    </CardActions>

                </Grid>
            </Card >
        </Grid >
    );
}
function mapStateToProps(state) {
    return {
        currCompany: state.stockPriceReducer.currCompany,
        admin: state.homeReducer.admin
    }
}
export default connect(mapStateToProps)(CompanyCard)