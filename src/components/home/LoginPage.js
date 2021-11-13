import { Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import { connect, useDispatch } from "react-redux";
import * as HomeActions from '../../actions/HomeActions'
import LoginForm from "./LoginForm";



function LoginPage(props) {

    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid>
                <LoginForm />
            </Grid>
        </Grid>

    );
}


function mapStateToProps(state) {
    return {
        loggedIn: state.homeReducer.loggedIn,
        admin: state.homeReducer.admin,
        loggedUser: state.homeReducer.loggedUser
    }
}

export default connect(mapStateToProps)(LoginPage)