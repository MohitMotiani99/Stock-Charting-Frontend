import React, { useEffect, useState } from "react";
import CompanyCard from "./CompanyCard";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import * as CompanyActions from '../../actions/CompanyActions'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';


function CompanyList(props) {


    const [companies, setCompanies] = useState(props.companyList)

    return (

        <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>

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

        </Grid>
    );


}


export default CompanyList