import React, { useEffect } from "react";
import CompanyCard from "./CompanyCard";
import { Grid } from "@mui/material";
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

function CompanyList(props) {

    useEffect(() => {
        props.setCompanyList(comps)
    })

    return (



        <Grid container sx={{ pt: 5, pl: 0 }} spacing={3}>

            {
                props.companyList.map((comp) => {
                    return <Grid item md={3}>
                        <CompanyCard name={comp.name} brief={comp.brief} />
                    </Grid>
                })
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)