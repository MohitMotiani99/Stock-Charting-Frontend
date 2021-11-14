import React, { useEffect, useState } from "react";
import ExchangeCard from "./ExchangeCard";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import * as StockExchangeActions from '../../actions/StockExchangeActions'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import * as StockPriceActions from '../../actions/StockPriceActions'
import SaveExchange from "./AdminModeComponents/SaveExchange";


function ExchangeList(props) {

    const newExchange = {
        stockExchangeName: "",
        brief: "",
        contactAddress: {
            buildingNumber: "",
            street: "",
            city: "",
            state: "",
            country: "",
            zip: ""
        },
        remarks: ""
    }

    const dispatch = useDispatch()
    let [exchanges, setExchanges] = useState(props.SEList)
    let [searchString, setSearchString] = useState("")

    let [popUp, setPopUp] = useState(false)
    let [ops, setOps] = useState("")
    let [adminMode, setAdminMode] = useState("none")

    useEffect(() => {

        setSearchString("")
        dispatch(StockExchangeActions.getSEList())
        setExchanges(props.SEList)
        if (props.admin)
            setAdminMode("flex")
    }, [])


    return (

        (!popUp) ? <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>

            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom>
                    Stock Exchanges
                </Typography>
            </Grid>


            <Grid item container sx={{ pt: 20 }}>
                <AppBar position='relative'>
                    <Toolbar>
                        <Grid item xs={4}>
                            <div

                                style={{
                                    backgroundColor: 'white',

                                }}

                            >
                                <SearchIcon />
                                <InputBase placeholder='Search...'
                                    value={searchString}
                                    onChange={(e) => {
                                        setSearchString(e.target.value.toLowerCase())
                                        if (e.target.value) {
                                            let newExchangeList = (props.SEList).filter((exchange) => exchange.stockExchangeName.toLowerCase().includes(e.target.value.toLowerCase()));
                                            setExchanges(newExchangeList)
                                        }
                                        else {
                                            setExchanges(props.SEList)
                                        }

                                    }}
                                ></InputBase>
                            </div>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={5}>
                            <Button variant='contained' color='success' fullWidth
                                onClick={() => {
                                    setOps("save")
                                    dispatch(StockPriceActions.setCurrExchange(newExchange))
                                    setPopUp(true)
                                }}
                            >
                                <IconButton color='primary'>
                                    <AddIcon></AddIcon>
                                </IconButton>
                                Add Stock Exchange
                            </Button>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Grid>

            {console.log(props.SEList)}
            {
                (searchString == null || searchString.length == 0 ? props.SEList : exchanges).map((exchange) => {
                    return <Grid item md={3}>
                        <ExchangeCard trigger={popUp} setTrigger={setPopUp} type={ops} setType={setOps} exchange={exchange} />
                    </Grid>
                })
            }


        </Grid> : <SaveExchange trigger={popUp} setTrigger={setPopUp} ops={ops}></SaveExchange>
    );


}
function mapStateToProps(state) {
    return {
        admin: state.homeReducer.admin,
        SEList: state.stockExchangeReducer.SEList
    }
}

export default connect(mapStateToProps)(ExchangeList)