import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import * as CompanyActions from '../../actions/CompanyActions'
import * as StockPriceActions from '../../actions/StockPriceActions'

import pattern1 from '../../static/patterns/pattern1.jpg'

import { useNavigate } from "react-router";

function CompanyCard(props) {

    let navigate = useNavigate()
    const dispatch = useDispatch()
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
                                    {props.company.companyName}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h5' color='text.secondary'>
                                    {props.company.sector + ' Giant'}
                                </Typography>
                            </Grid>
                        </CardContent>
                    </Grid>
                </CardActionArea>
                <Grid item>
                    <CardActions>
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
                    </CardActions>
                </Grid>
            </Card >
        </Grid >
    );
}
function mapStateToProps(state) {
    return {
        currCompany: state.companyReducer.currCompany
    }
}
export default connect(mapStateToProps)(CompanyCard)