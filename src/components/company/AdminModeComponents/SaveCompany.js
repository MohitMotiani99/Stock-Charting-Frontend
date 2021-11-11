import { Button, Grid, IconButton, TextField } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';

function SaveCompany(props) {
    return (
        <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>
            <Grid item xs={10}></Grid>
            <Grid item xs={2}>
                <Button onClick={() => props.setTrigger(false)} >
                    <IconButton>
                        <CancelIcon></CancelIcon>
                    </IconButton>
                </Button>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Company Name"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Turnover"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="CEO"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Directors"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Sector"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Brief"
                />
            </Grid>

            <Grid item xs={7}></Grid>
            <Grid item xs={2}>
                <IconButton>
                    <SaveIcon></SaveIcon>
                </IconButton>
                <Button onClick={() => props.setTrigger(false)} variant='contained'>
                    Save
                </Button>
            </Grid>

        </Grid>
    );
}

export default connect()(SaveCompany)