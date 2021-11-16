import { Button, Grid, IconButton, TextField, MenuItem, Typography, Checkbox, Select, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import * as SectorActions from '../../../actions/SectorActions'
import * as StockExchangeActions from '../../../actions/StockExchangeActions'
import * as CompanyActions from '../../../actions/CompanyActions'
import * as StockPriceActions from '../../../actions/StockPriceActions'
import { useNavigate } from "react-router";

function SaveCompany(props) {


    let navigate = useNavigate();

    let [sectorName, setSectorName] = useState(props.currCompany.sector)
    const handleSectorNameChange = (e) => {
        setSectorName(e.target.value)
    }

    let [stockName, setStockName] = useState("")
    const handleStockNameChange = (e) => {
        setStockName(e.target.value)
    }


    let [codes, setCodes] = useState(JSON.stringify(props.currCompany.stockExchangeCodes))
    let [comp, setComp] = useState(props.currCompany)


    const dispatch = useDispatch()
    useEffect(() => {


        dispatch(SectorActions.getSectorList())
        dispatch(StockExchangeActions.getSEList())
    }, [])

    let CompanyCodeEntry = (key, value) => {
        console.log(key)
        return <Grid container>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    disabled
                    id="outlined-required"
                    value={key}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    id="outlined-requied"
                    disabled
                    value={value}

                />
            </Grid>
        </Grid>


    }

    console.log(props.sectorList)

    let [checked, setChecked] = useState(false)

    let handleFieldChange = (field, value) => {
        if (field == "companyName") {
            setComp({
                ...comp,
                companyName: value
            })
        }
        else if (field == "turnover") {
            setComp({
                ...comp,
                turnover: Number.parseInt(value)
            })
        }
        else if (field == "ceo") {
            setComp({
                ...comp,
                ceo: value
            })
        }
        else if (field == "brief") {
            setComp({
                ...comp,
                brief: value
            })
        }
        else if (field == "sector") {
            setComp({
                ...comp,
                sector: value
            })
        }
        else if (field == "listedInStockExchange") {
            setComp({
                ...comp,
                listedInStockExchange: value
            })
        }
        else if (field == "boardOfDirectors") {
            setComp({
                ...comp,
                boardOfDirectors: value.split(',')
            })
        }
        else if (field == "stockExchangeCodes") {

            setComp({
                ...comp,
                stockExchangeCodes: JSON.parse(value)
            })
        }
    }
    return (
        <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>
            <Grid item xs={10}>
                <Typography variant='h2' gutterBottom>
                    Save Company
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
                    label="Company Name"
                    placeholder="Company Name"
                    value={comp.companyName}
                    onChange={(e) => handleFieldChange("companyName", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth

                    id="outlined-number"
                    label="Turnover"
                    type="number"
                    placeholder="Turnover"
                    value={comp.turnover}
                    onChange={(e) => handleFieldChange("turnover", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth

                    id="outlined-required"
                    label="CEO"
                    placeholder="CEO"
                    value={comp.ceo}
                    onChange={(e) => handleFieldChange("ceo", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth

                    multiline
                    rows={5}
                    maxRows={7}
                    id="outlined-textarea"
                    label="Directors"
                    placeholder="Directors"
                    value={comp.boardOfDirectors.toString()}
                    onChange={(e) => handleFieldChange("boardOfDirectors", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Sector
                </InputLabel>

                <Select
                    fullWidth
                    required
                    id="outlined-select"
                    select
                    value={comp.sector}
                    onChange={(e) => handleFieldChange("sector", e.target.value)}
                    helperText="Select a Sector"
                    label="Sector"
                    placeholder="Sector"
                >
                    {(props.sectorList).map((sector) => (
                        <MenuItem key={sector.sectorName} value={sector.sectorName}>
                            {sector.sectorName}
                        </MenuItem>
                    ))}

                </Select>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    multiline
                    rows={5}
                    maxRows={7}
                    id="outlined-textarea"
                    label="Brief"
                    placeholder="Brief"
                    value={comp.brief}
                    onChange={(e) => handleFieldChange("brief", e.target.value)}
                />
            </Grid>
            <Grid item xs={12} container>
                <Grid item xs={6}>
                    <Typography variant='h6'>
                        Listed in Stock Exchanges ?
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Checkbox
                        checked={comp.listedInStockExchange}
                        onChange={(e) => handleFieldChange("listedInStockExchange", e.target.checked)}
                    >
                    </Checkbox>
                </Grid>
            </Grid>

            {
                (comp.listedInStockExchange) ? <Grid item xs={12} container>
                    {/* <Grid item xs={12}>
                        <Typography variant='h6'>
                            Company Codes
                        </Typography>
                    </Grid>
                    {
                        [...Object.keys(comp.stockExchangeCodes)].map((key) => (
                            <Grid item xs={12} container>
                                {CompanyCodeEntry(key, comp.stockExchangeCodes[key])}
                            </Grid>

                        ))
                    } */}
                    <TextField
                        fullWidth

                        id="outlined"
                        label="Exchange Codes"
                        placeholder="Codes"
                        value={codes}
                        onChange={(e) => setCodes(e.target.value)}
                    >

                    </TextField>
                    <Button
                        onClick={() => handleFieldChange("stockExchangeCodes", codes)}
                    >
                        Add
                    </Button>
                </Grid> : <Grid item xs={12}></Grid>
            }


            <Grid item xs={8}></Grid>
            <Grid item xs={4} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button fullWidth onClick={() => {
                    if (props.ops == "save")
                        dispatch(CompanyActions.saveCompany(comp))
                    else if (props.ops == "update")
                        dispatch(CompanyActions.updateCompany(comp))
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
        sectorList: state.sectorReducer.sectorList,
        currCompany: state.stockPriceReducer.currCompany,
        SEList: state.stockExchangeReducer.SEList
    }
}

export default connect(mapStateToProps)(SaveCompany)