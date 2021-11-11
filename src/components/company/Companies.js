import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import PageHeader from "../home/PageHeader";
import SideMenu from "../home/SideMenu";
import CompanyList from "./CompanyList";
import { connect, useDispatch } from "react-redux";
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
            brief: "Telstra is Australia’s leading telecommunications and technology company, offering a full range of communications services and competing in all telecommunications markets.In Australia we provide 18.8 million retail mobile services, 3.8 million retail fixed bundles and standalone data services and 960,000 retail fixed standalone voice services."
        },
        {
            companyName: "SocGen",
            brief: "One of the Biggest Retail Investment Banks in France"
        }
    ]

}



function Companies(props) {

    const dispatch = useDispatch()
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        dispatch(CompanyActions.getCompanyList())
    }, [])

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <PageHeader />
                <SideMenu />
            </Grid>
            <Grid item xs={8}>
                <CompanyList ></CompanyList>
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