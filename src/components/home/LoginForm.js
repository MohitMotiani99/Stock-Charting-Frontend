import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import { connect, useDispatch } from "react-redux";
import * as HomeActions from '../../actions/HomeActions'
import * as StockPriceActions from '../../actions/StockPriceActions'

import loginUser from '../../static/loginUser.png'
import { Navigate, useNavigate } from "react-router";

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

function LoginForm(props) {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    let [name, setName] = useState("")
    let [pass, setPass] = useState("")

    return (
        <Grid container sx={{ pt: 10 }}>
            <Grid item xs={12} sx={{ pl: 20 }}>
                <Typography variant='h2' gutterBottom>
                    Login
                </Typography>
            </Grid>
            <Grid item xs={12} container >
                <Grid item xs={12} sx={style}>
                    <img src={loginUser} width='100px' height='100px'
                    ></img>
                </Grid>
                <Grid item xs={12} sx={style}>
                    <TextField
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="outlined-required"
                        label="Username"
                        placeholder="Username"
                    />

                </Grid>
                <Grid item xs={12} sx={style}>
                    <TextField
                        id="outlined-password-input"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        placeholder="Password"
                    />

                </Grid>

                <Grid item xs={12} sx={style}>
                    <Button variant='contained' color='primary'
                        onClick={() => {
                            dispatch(HomeActions.setLoggedIn(true))
                            dispatch(HomeActions.getLoggedUser({
                                username: name,
                                password: pass
                            }))
                            if (props.loggedUser.userId != "") {
                                dispatch(StockPriceActions.setCurrUser(props.loggedUser))
                                navigate('/')
                            }

                        }}
                    >
                        SignIn
                    </Button>
                </Grid>

            </Grid>
        </Grid >

    );
}
function mapStateToProps(state) {
    return {
        loggedIn: state.homeReducer.loggedIn,
        admin: state.homeReducer.admin,
        loggedUser: state.homeReducer.loggedUser
    }
}

export default connect(mapStateToProps)(LoginForm)
