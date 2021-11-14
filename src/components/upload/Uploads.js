import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import UploadFeature from "./UploadFeature";
import { connect, useDispatch } from "react-redux";
import * as UploadActions from '../../actions/UploadActions'



function Uploads(props) {

    const dispatch = useDispatch()

    useEffect(() => {
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <UploadFeature ></UploadFeature>
            </Grid>
        </Grid>

    );
}


function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(Uploads)