import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import ExchangeList from "./ExchangeList";
import { connect, useDispatch } from "react-redux";
import * as StockExchangeActions from '../../actions/StockExchangeActions'



function Exchanges(props) {

    const dispatch = useDispatch()
    const [exchanges, setExchanges] = useState([])

    useEffect(() => {
        dispatch(StockExchangeActions.getSEList())
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <ExchangeList ></ExchangeList>
            </Grid>
        </Grid>

    );
}


function mapStateToProps(state) {
    return {
        SEList: state.stockExchangeReducer.SEList
    }
}

export default connect(mapStateToProps)(Exchanges)