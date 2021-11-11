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
                        <YAxis name="Stock Price" dataKey="price" domain={[Math.floor(props.companyStats.minPrice), Math.ceil(props.companyStats.maxPrice)]} />
                        <Tooltip />
                        <Scatter data={props.companyStats.stockSeries1List} />
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