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

function SaveSector(props) {


    let navigate = useNavigate();


    let [sect, setSect] = useState(props.currSector)


    const dispatch = useDispatch()
    useEffect(() => {
    }, [])

    let handleFieldChange = (field, value) => {
        if (field == "sectorName") {
            setSect({
                ...sect,
                sectorName: value
            })
        }
        else if (field == "brief") {
            setSect({
                ...sect,
                brief: value
            })
        }
    }
    return (
        <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>
            <Grid item xs={10}>
                <Typography variant='h2' gutterBottom>
                    Save Sector
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
                    label="Sector Name"
                    placeholder="Sector Name"
                    value={sect.sectorName}
                    onChange={(e) => handleFieldChange("sectorName", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    id="outlined"
                    label="Brief"
                    placeholder="Brief"
                    value={sect.brief}
                    onChange={(e) => handleFieldChange("brief", e.target.value)}
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
                        dispatch(SectorActions.saveSector(sect))
                    else if (props.ops == "update")
                        dispatch(SectorActions.updateSector(sect))
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
        currSector: state.stockPriceReducer.currSector,
    }
}

export default connect(mapStateToProps)(SaveSector)