import React, { useEffect, useState } from "react";
import SectorCard from "./SectorCard";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import * as SectorActions from '../../actions/SectorActions'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import SaveSector from "./AdminModeComponents/SaveSector";
import * as StockPriceActions from '../../actions/StockPriceActions'


function SectorList(props) {

    const newSector = {
        sectorName: "",
        brief: ""
    }

    const dispatch = useDispatch()
    let [sectors, setSectors] = useState([])
    let [searchString, setSearchString] = useState("")

    let [popUp, setPopUp] = useState(false)
    let [ops, setOps] = useState("")
    let [adminMode, setAdminMode] = useState("none")

    useEffect(() => {

        setSearchString("")
        dispatch(SectorActions.getSectorList())
        setSectors(props.sectorList)
        if (props.admin)
            setAdminMode("flex")
    }, [])


    return (

        (!popUp) ? <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>
            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom>
                    Sectors
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
                                            let newSectorList = (props.sectorList).filter((sect) => sect.sectorName.toLowerCase().includes(e.target.value.toLowerCase()));
                                            setSectors(newSectorList)
                                        }
                                        else {
                                            setSectors(props.sectorList)
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
                                    dispatch(StockPriceActions.setCurrSector(newSector))
                                    setPopUp(true)
                                }}
                            >
                                <IconButton color='primary'>
                                    <AddIcon></AddIcon>
                                </IconButton>
                                Add Sector
                            </Button>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Grid>

            {console.log(props.sectorList)}
            {
                (searchString == null || searchString.length == 0 ? props.sectorList : sectors).map((sect) => {
                    return <Grid item md={3}>
                        <SectorCard trigger={popUp} setTrigger={setPopUp} type={ops} setType={setOps} sector={sect} />
                    </Grid>
                })
            }


        </Grid> : <SaveSector trigger={popUp} setTrigger={setPopUp} ops={ops}></SaveSector>
    );


}
function mapStateToProps(state) {
    return {
        admin: state.homeReducer.admin,
        sectorList: state.sectorReducer.sectorList
    }
}

export default connect(mapStateToProps)(SectorList)