import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import { connect, useDispatch } from "react-redux";
import * as HomeActions from '../../actions/HomeActions'
import * as UserActions from '../../actions/UserActions'

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

    let [msg, setMsg] = useState("none")

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
                        onClick={async () => {
                            await dispatch(HomeActions.getLoggedUser({
                                username: name,
                                password: pass
                            }))
                            if (props.loggedUser.userId != "") {
                                setMsg('none')
                                dispatch(HomeActions.setLoggedIn(true))
                                dispatch(UserActions.setCurrUser(props.loggedUser))
                                navigate("/")
                            }
                            else {
                                setMsg('inline')
                            }

                        }}
                    >
                        SignIn
                    </Button>
                </Grid>
                <Grid item xs={12} sx={style}>
                    <Paper sx={{ backgroundColor: 'yellowgreen', display: msg }}>
                        Invalid User Name or Password
                    </Paper>
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
