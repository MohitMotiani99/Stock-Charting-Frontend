import { Grid } from "@mui/material";
import React from "react";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { connect } from "react-redux";
import * as CompanyActions from '../../actions/CompanyActions'

const comps = [
    {
        name: "Telstra",
        brief: "Biggest Telecom in Aus"
    },
    {
        name: "SocGen",
        brief: "One of the Biggest Retail Investment Banks in France"
    }
]


const getSearchResults = (query) => {
    if (!query)
        return comps
}

function CompanySearch(props) {

    return (
        <Grid container sx={{ pt: 12 }}>
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
                                onKeyUp={(e) => getSearchResults(e.target.value)}
                            ></InputBase>
                        </div>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        setCompanyList: companyList => dispatch(CompanyActions.setCompanyList(companyList))
    }
}
function mapStateToProps(state) {
    return {
        companyList: state.companyReducer.companyList
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanySearch)