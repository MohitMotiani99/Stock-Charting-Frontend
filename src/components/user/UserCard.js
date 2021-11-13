import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import * as UserActions from '../../actions/UserActions'
import * as StockPriceActions from '../../actions/StockPriceActions'
import * as HomeActions from '../../actions/HomeActions'

import { userpp } from './UserPP'

import { useNavigate } from "react-router";
import SaveUser from "./UserModeComponents/SaveUser";

function UserCard(props) {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    let [log, setLog] = useState(props.loggedIn)
    let [popUp, setPopUp] = useState(false)

    useEffect(() => {
        // dispatch(HomeActions.setAdmin(false))
        // dispatch(HomeActions.setLoggedIn(false))
    })
    return (

        <Grid container spacing={2}>
            <Card sx={{ border: "groove", maxWidth: 300, maxHeight: 400 }}>
                <CardActionArea >
                    <Grid item xs={12}>

                        <CardMedia
                            component='img'
                            height='140'
                            image={userpp[Math.floor(Math.random() * 4)]}
                            width='inherit'
                        />
                    </Grid>
                    <Grid item xs={12} container>

                        <CardContent>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant='h4' component='div'>
                                    {props.user.username}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h5' color='text.secondary' width='100%'>
                                    { }
                                </Typography>
                            </Grid>
                            {
                                (props.loggedIn && props.loggedUser.userId == props.user.userId) ? <Grid item container>
                                    <Grid item xs={9}></Grid>
                                    <Grid item xs={3} sx={{
                                        justifyContent: 'center'
                                    }}>
                                        <Button size='small' color='primary'
                                            onClick={() => {
                                                props.setType("update")
                                                dispatch(UserActions.setCurrUser(props.user))
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
                                    await dispatch(UserActions.setCurrUser(props.user))
                                    navigate(`/user/${props.user.userId}`, {
                                        state: {
                                            user: props.user
                                        }
                                    })
                                }}
                            >
                                Learn More
                            </Button>
                        </Grid>
                        {
                            (props.loggedIn && props.loggedUser.userId == props.user.userId) ? <Grid item xs={6}>
                                <Button size='small' color='primary'
                                    onClick={() => {
                                        dispatch(UserActions.deleteUser(props.user.userId))
                                        navigate("/Users")
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
        currUser: state.userReducer.currUser,
        admin: state.homeReducer.admin,
        loggedIn: state.homeReducer.loggedIn,
        loggedUser: state.homeReducer.loggedUser
    }
}
export default connect(mapStateToProps)(UserCard)