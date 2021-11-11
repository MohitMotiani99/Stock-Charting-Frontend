import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { Button, Grid, IconButton } from "@mui/material";
import { connect } from "react-redux";
import * as CompanyActions from '../../actions/CompanyActions'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import SaveCompany from "./AdminModeComponents/SaveCompany";



function CompanyList(props) {


    const [companies, setCompanies] = useState(props.companyList)

    const [popUp, setPopUp] = useState(false)
    let [adminMode, setAdminMode] = useState("none")

    useEffect(() => {
        if (props.admin)
            setAdminMode("flex")
    }, [])

    return (

        (!popUp) ? <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>

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
                                    onKeyUp={(e) => {
                                        if (e.target.value) {
                                            let newCompanyList = companies.filter((comp) => comp.companyName.toLowerCase().includes(e.target.value.toLowerCase()));
                                            setCompanies(newCompanyList)
                                        }
                                        else
                                            setCompanies(props.companyList)

                                    }}
                                ></InputBase>
                            </div>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={5}>
                            <Button variant='contained' color='success' fullWidth
                                onClick={() => setPopUp(true)}
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
                (companies.length != 0 ? companies : props.companyList).map((comp) => {
                    return <Grid item md={3}>
                        <CompanyCard company={comp} />
                    </Grid>
                })
            }


        </Grid> : <SaveCompany trigger={popUp} setTrigger={setPopUp}></SaveCompany>
    );


}
function mapStateToProps(state) {
    return {
        admin: state.homeReducer.admin
    }
}

export default connect(mapStateToProps)(CompanyList)