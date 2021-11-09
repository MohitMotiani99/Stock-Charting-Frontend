import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import CompanyList from "./CompanyList";
import { connect } from "react-redux";
import * as CompanyActions from '../../actions/CompanyActions'


const getAllCompanies = () => {


    return [
        {
            companyId: "ABCD",
            companyName: "Telstra",
            turnover: 86000,
            ceo: "Andy Miller",
            listedInStockExchange: false,
            sector: "Telecom",
            boardOfDirectors: ["Mark Miller", "Liam Livington"],
            brief: "Aus Biggest Telecom Networks"
        },
        {
            companyName: "SocGen",
            brief: "One of the Biggest Retail Investment Banks in France"
        }
    ]

}



function Companies(props) {

    const [companies, setCompanies] = useState([])

    useEffect(() => {

        // fetch('http://localhost:8088/companies/', {
        //     method: 'GET'
        // })
        //     .then(res => {
        //         console.log(res)
        //         res.json()
        //     })
        //     .then(data => {
        //         console.log(data)
        //         setCompanies(data)
        //     })

        props.setCompanyList(getAllCompanies())
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <CompanyList companyList={getAllCompanies()}></CompanyList>
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Companies)