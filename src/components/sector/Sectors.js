import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import SectorList from "./SectorList";
import { connect, useDispatch } from "react-redux";
import * as SectorActions from '../../actions/SectorActions'



function Sectors(props) {

    const dispatch = useDispatch()
    const [sectors, setSectors] = useState([])

    useEffect(() => {
        dispatch(SectorActions.getSectorList())
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <SectorList ></SectorList>
            </Grid>
        </Grid>

    );
}


function mapStateToProps(state) {
    return {
        sectorList: state.sectorReducer.sectorList
    }
}

export default connect(mapStateToProps)(Sectors)