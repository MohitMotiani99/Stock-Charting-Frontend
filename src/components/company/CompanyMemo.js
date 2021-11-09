import { Grid, Typography } from "@mui/material";
import React from "react";
import Brief from "./CompanyMemoComponents/Brief";
import Ceo from "./CompanyMemoComponents/Ceo";


const styles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '100%',
    height: '5rem',
}

export default function CompanyMemo(props) {
    console.log(props.company.brief)
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant='h2' component='div'
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {props.company.companyName}
                </Typography>
            </Grid>
            <Grid item md={6}>
                <Ceo ceoName={props.company.ceo}></Ceo>
            </Grid>
            <Grid item md={6}>
                <Brief brief={props.company.brief}></Brief>
            </Grid>
        </Grid>
    );
}