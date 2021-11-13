import { Button, Grid, IconButton, TextField, MenuItem, Typography, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import * as SectorActions from '../../../actions/SectorActions'
import * as StockExchangeActions from '../../../actions/StockExchangeActions'
import * as UserActions from '../../../actions/UserActions'
import * as StockPriceActions from '../../../actions/StockPriceActions'
import { useNavigate } from "react-router";

function SaveUser(props) {


    let navigate = useNavigate();


    let [user, setUser] = useState(props.currUser)


    const dispatch = useDispatch()
    useEffect(() => {
    }, [])




    let handleFieldChange = (field, value) => {
        if (field == "username") {
            setUser({
                ...user,
                username: value
            })
        }
        else if (field == "password") {
            setUser({
                ...user,
                password: value
            })
        }
        else if (field == "email") {
            setUser({
                ...user,
                email: value
            })
        }
        else if (field == "mobile") {
            setUser({
                ...user,
                mobile: value
            })
        }

    }
    return (
        <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>
            <Grid item xs={10}>
                <Typography variant='h2' gutterBottom>
                    Save Details
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
                    label="User Name"
                    placeholder="Username"
                    value={user.username}
                    onChange={(e) => handleFieldChange("username", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    id="outlined-number"
                    label="Password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => handleFieldChange("password", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => handleFieldChange("email", e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    fullWidth
                    required
                    multiline
                    id="outlined-required"
                    label="Mobile"
                    placeholder="Mobile"
                    value={user.mobile}
                    onChange={(e) => handleFieldChange("mobile", e.target.value)}
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
                        dispatch(UserActions.saveUser(user))
                    else if (props.ops == "update")
                        dispatch(UserActions.updateUser(user))
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
        currUser: state.userReducer.currUser,
    }
}

export default connect(mapStateToProps)(SaveUser)