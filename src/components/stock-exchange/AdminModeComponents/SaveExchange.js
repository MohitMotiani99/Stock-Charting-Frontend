import { Button, Grid, IconButton, TextField, MenuItem, Typography, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import * as SectorActions from '../../../actions/SectorActions'
import * as StockExchangeActions from '../../../actions/StockExchangeActions'
import * as CompanyActions from '../../../actions/CompanyActions'
import * as StockPriceActions from '../../../actions/StockPriceActions'
import { useNavigate } from "react-router";

function SaveExchange(props) {


    let navigate = useNavigate();


    let [exchange, setExchange] = useState(props.currExchange)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(StockExchangeActions.getSEList())
    }, [])


    let handleFieldChange = (field, value) => {
        if (field == "stockExchangeName") {
            setExchange({
                ...exchange,
                stockExchangeName: value
            })
        }
        else if (field == "brief") {
            setExchange({
                ...exchange,
                brief: value
            })
        }
        else if (field == "remarks") {
            setExchange({
                ...exchange,
                remarks: value
            })
        }
        else {

            let address = exchange.contactAddress
            address[field] = value

            setExchange({
                ...exchange,
                contactAddress: address
            })
        }
    }
    return (
        <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>
            <Grid item xs={10}>
                <Typography variant='h2' gutterBottom>
                    Save Stock Exchange
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Button onClick={() => props.setTrigger(false)} >
                    <IconButton>
                        <CancelIcon></CancelIcon>
                    </IconButton>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Stock Exchange Name"
                    placeholder="Stock Exchange Name"
                    value={exchange.stockExchangeName}
                    onChange={(e) => handleFieldChange("stockExchangeName", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    maxRows={7}
                    id="outlined-textxarea"
                    label="brief"
                    placeholder="Brief"
                    value={exchange.brief}
                    onChange={(e) => handleFieldChange("brief", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="outlined-required"
                    label="remarks"
                    placeholder="Remarks"
                    value={exchange.remarks}
                    onChange={(e) => handleFieldChange("remarks", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography variant='h5' gutterBottom>
                    Contact Address
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="outlined"
                    label="Building Number"
                    placeholder="Building Number"
                    value={exchange.contactAddress.buildingNumber}
                    onChange={(e) => handleFieldChange("buildingNumber", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="outlined"
                    label="Street"
                    placeholder="Street"
                    value={exchange.contactAddress.street}
                    onChange={(e) => handleFieldChange("street", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="outlined"
                    label="State"
                    placeholder="State"
                    value={exchange.contactAddress.state}
                    onChange={(e) => handleFieldChange("state", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="outlined"
                    label="City"
                    placeholder="Cityr"
                    value={exchange.contactAddress.city}
                    onChange={(e) => handleFieldChange("city", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="outlined"
                    label="Country"
                    placeholder="Country"
                    value={exchange.contactAddress.country}
                    onChange={(e) => handleFieldChange("country", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="outlined"
                    label="Zip"
                    placeholder="Zipr"
                    value={exchange.contactAddress.zip}
                    onChange={(e) => handleFieldChange("zip", e.target.value)}
                />
            </Grid>

            <Grid item xs={8}></Grid>
            <Grid item xs={4} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button fullWidth onClick={() => {
                    if (props.ops == "save")
                        dispatch(StockExchangeActions.saveExchange(exchange))
                    else if (props.ops == "update")
                        dispatch(StockExchangeActions.updateExchange(exchange))
                    props.setTrigger(false)
                }}
                    variant='contained'>
                    <IconButton>
                        <SaveIcon></SaveIcon>
                    </IconButton>
                    <Typography variant='h5' gutterBottom sx={{
                        pt: 1.2
                    }}

                    >
                        Save
                    </Typography>

                </Button>
            </Grid>

        </Grid >
    );
}

function mapStateToProps(state) {
    return {
        currExchange: state.stockPriceReducer.currExchange,
        SEList: state.stockExchangeReducer.SEList
    }
}

export default connect(mapStateToProps)(SaveExchange)