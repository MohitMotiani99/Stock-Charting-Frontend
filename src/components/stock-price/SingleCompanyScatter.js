import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";


function SingleCompanyScatter(props) {

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
            <Grid item xs={12} height="400px" >
                <ResponsiveContainer width="100%" aspect={3}>
                    <ScatterChart width={730} height={250}>
                        <CartesianGrid />
                        <XAxis name="Date" dataKey="localDate" />
                        <YAxis name="Stock Price" dataKey="price" domain={[Math.floor(Math.min(props.stats.minPrice, props.stats2.minPrice)), Math.ceil(Math.max(props.stats.maxPrice, props.stats2.maxPrice))]} />
                        <Tooltip />
                        <Scatter fill={(props.type == "1") ? props.col1 : props.col2} data={(props.type == "1") ? props.stats.stockSeries1List : props.stats2.stockSeries1List} />
                    </ScatterChart>
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

export default connect(mapStateToProps)(SingleCompanyScatter)