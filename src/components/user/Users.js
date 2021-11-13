import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import UserList from "./UserList";
import { connect, useDispatch } from "react-redux";
import * as UserActions from '../../actions/UserActions'



function Users(props) {

    const dispatch = useDispatch()
    const [users, setUser] = useState([])

    useEffect(() => {
        dispatch(UserActions.getUserList())
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <UserList ></UserList>
            </Grid>
        </Grid>

    );
}


function mapStateToProps(state) {
    return {
        userList: state.userReducer.userList
    }
}

export default connect(mapStateToProps)(Users)