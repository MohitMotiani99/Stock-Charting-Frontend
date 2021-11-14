import { Button, Grid, IconButton, TextField, MenuItem, Typography, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import * as IpoActions from '../../../actions/IpoActions'
import { useNavigate } from "react-router";
import { getSEList } from "../../../actions/StockExchangeActions";
import { getCompanyList } from "../../../actions/CompanyActions";
import DatePicker from 'react-datepicker'
import { subYears } from "date-fns";


function SaveIpo(props) {


    let navigate = useNavigate();


    let [ipo, setIpo] = useState({
        ipoId: "",
        companyName: "",
        stockExchangeName: "",
        pricePerShare: 0.0,
        totalStocks: 0,
        openDate: "",
        remarks: ""
    })


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getSEList())
        dispatch(getCompanyList())
    }, [])

    let handleFieldChange = (field, value) => {
        if (field == "stockExchangeName") {
            setIpo({
                ...ipo,
                stockExchangeName: value
            })
        }
        else if (field == "companyName") {
            setIpo({
                ...ipo,
                companyName: value
            })
        }
        else if (field == "pricePerShare") {
            setIpo({
                ...ipo,
                pricePerShare: Number.parseFloat(value)
            })
        }
        else if (field == "totalStocks") {
            setIpo({
                ...ipo,
                totalStocks: Number.parseInt(value)
            })
        }
        else if (field == "openDate") {
            setIpo({
                ...ipo,
                openDate: value
            })
        }
        else if (field == "remarks") {
            setIpo({
                ...ipo,
                remarks: value
            })
        }

    }
    return (
        <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>
            <Grid item xs={10}>
                <Typography variant='h2' gutterBottom>
                    Save IPO
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
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={ipo.stockExchangeName}
                    onChange={(e) => handleFieldChange("stockExchangeName", e.target.value)}
                    label="Select Stock Exchange"
                >
                    {
                        (props.SEList).map((stock) => {
                            return <MenuItem value={stock.stockExchangeName}>
                                {stock.stockExchangeName}
                            </MenuItem>
                        })
                    }

                </Select>
            </Grid>
            <Grid item xs={12}>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={props.companyName}
                    onChange={(e) => handleFieldChange("companyName", e.target.value)}
                    label="Select Company Name"
                >
                    {
                        (props.companyList).filter((comp) => stockName == "" || stockName == null || comp.getStockExchangeCodes.hasOwnProperty(stockName)).map((comp) => {
                            return <MenuItem value={comp.companyName}>
                                {comp.companyName}
                            </MenuItem>
                        })
                    }

                </Select>

            </Grid>
            <Grid item xs={12}>
                <span>
                    <DatePicker
                        selected={date}
                        onChange={d => {
                            setDate(d)
                            handleFieldChange("openDate", d)
                        }}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                        isClearable
                        showYearDropdown
                        scrollableMonthYearDropdown
                        placeholderText="Select"
                    />
                </span>

            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Remarks"
                    multiline
                    value={ipo.remarks}
                    onChange={(e) => handleFieldChange("remarks", e.target.value)}
                    rows={4}
                    placeholder="Remarks"
                />

            </Grid>


            <Grid item xs={8}></Grid>
            <Grid item xs={4} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button fullWidth onClick={() => {

                    dispatch(IpoActions.saveIpo(ipo))
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
        ipoList: state.ipoReducer.ipoList,
        SEList: state.stockExchangeReducer.SEList,
        companyList: state.companyReducer.companyList

    }
}

export default connect(mapStateToProps)(SaveIpo)