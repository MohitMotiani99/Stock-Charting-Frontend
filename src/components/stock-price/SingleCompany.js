import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


function SingleCompany(props) {

    const dispatch = useDispatch()
    let [xData, setXData] = useState(null)
    let [yData, setYData] = useState(null)

    console.log(props)

    useEffect(() => {
        setXData(props.companyStats.stockSeries1List.map(s => s.localDate))
        setYData(props.companyStats.stockSeries1List.map(s => s.price))
    }, [])

    return (
        <Grid container sx={{ pt: 5, }}>
            <Grid item xs={12} height="400px">
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={props.companyStats.stockSeries1List}>
                        <CartesianGrid />
                        <XAxis dataKey="localDate" />
                        <YAxis type="number" domain={[Math.floor(props.companyStats.minPrice), Math.ceil(props.companyStats.maxPrice)]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" />
                    </LineChart>

                </ResponsiveContainer>
            </Grid>
        </Grid>
    )

}
function mapStateToProps(state) {
    return {
        companyStats: state.stockPriceReducer.companyStats
    }
}

export default connect(mapStateToProps)(SingleCompany)