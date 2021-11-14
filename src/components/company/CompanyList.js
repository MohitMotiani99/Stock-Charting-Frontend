import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import * as CompanyActions from '../../actions/CompanyActions'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import SaveCompany from "./AdminModeComponents/SaveCompany";
import * as StockPriceActions from '../../actions/StockPriceActions'


function CompanyList(props) {

    const newCompany = {
        companyName: "",
        turnover: 0,
        ceo: "",
        boardOfDirectors: [],
        listedInStockExchange: false,
        sector: "",
        brief: "",
        stockExchangeCodes: {}
    }

    const dispatch = useDispatch()
    let [companies, setCompanies] = useState([])
    let [searchString, setSearchString] = useState("")

    let [popUp, setPopUp] = useState(false)
    let [ops, setOps] = useState("")
    let [adminMode, setAdminMode] = useState("none")

    useEffect(() => {

        setSearchString("")
        dispatch(CompanyActions.getCompanyList())
        setCompanies(props.companyList)
        if (props.admin)
            setAdminMode("flex")
    }, [])


    return (

        (!popUp) ? <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>
            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom>
                    Companies
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
                                            let newCompanyList = (props.companyList).filter((comp) => comp.companyName.toLowerCase().includes(e.target.value.toLowerCase()));
                                            setCompanies(newCompanyList)
                                        }
                                        else {
                                            setCompanies(props.companyList)
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
                                    dispatch(StockPriceActions.setCurrCompany(newCompany))
                                    setPopUp(true)
                                }}
                            >
                                <IconButton color='primary'>
                                    <AddIcon></AddIcon>
                                </IconButton>
                                Add Company
                            </Button>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Grid>

            {console.log(props.companyList)}
            {
                (searchString == null || searchString.length == 0 ? props.companyList : companies).map((comp) => {
                    return <Grid item md={3}>
                        <CompanyCard trigger={popUp} setTrigger={setPopUp} type={ops} setType={setOps} company={comp} />
                    </Grid>
                })
            }


        </Grid> : <SaveCompany trigger={popUp} setTrigger={setPopUp} ops={ops}></SaveCompany>
    );


}
function mapStateToProps(state) {
    return {
        admin: state.homeReducer.admin,
        companyList: state.companyReducer.companyList
    }
}

export default connect(mapStateToProps)(CompanyList)