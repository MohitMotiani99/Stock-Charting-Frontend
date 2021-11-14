import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import IpoList from "./IpoList";
import { connect, useDispatch } from "react-redux";
import * as IpoActions from '../../actions/IpoActions'



function Ipos(props) {

    const dispatch = useDispatch()
    const [ipos, setIpos] = useState([])

    useEffect(() => {
        dispatch(IpoActions.getIpoList())
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <IpoList ></IpoList>
            </Grid>
        </Grid>

    );
}


function mapStateToProps(state) {
    return {
        ipoList: state.ipoReducer.ipoList
    }
}

export default connect(mapStateToProps)(Ipos)