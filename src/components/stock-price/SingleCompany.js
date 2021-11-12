import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


function SingleCompany(props) {

    const dispatch = useDispatch()
    let [xData, setXData] = useState(null)
    let [aData, setAData] = useState(null)
    let [bData, setBData] = useState(null)

    console.log(props)

    let [finalStats, setFinalStats] = useState([])

    useEffect(() => {
        setFinalStats(() => {
            let finarr = []
            if (props.stats.length == 0 && props.stats2.length == 0) {

            }
            else if (props.stats.length == 0) {
                for (let i = 0; i < props.stats2.length; i++) {
                    finarr.push({
                        localDate: props.stats2[i]["localDate"],
                        priceA: 0,
                        priceB: props.stats2[i]["price"]
                    })
                }
            }
            else if (props.stats2.length == 0) {
                for (let i = 0; i < props.stats.length; i++) {
                    finarr.push({
                        localDate: props.stats[i]["localDate"],
                        priceA: props.stats[i]["price"],
                        priceB: 0
                    })
                }
            }
            else {
                for (let i = 0; i < Math.min(props.stats.length, props.stats2.length); i++) {
                    finarr.push({
                        localDate: props.stats[i]["localDate"],
                        priceA: props.stats[i]["price"],
                        priceB: props.stats2[i]["price"]
                    })
                }
            }

            console.log(finarr)
            return finarr
        })
    }, [])

    return (
        <Grid container sx={{ pt: 5, }}>
            {/* <Grid item xs={12} height="400px">
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={finalStats}>
                        <CartesianGrid />
                        <XAxis dataKey="localDate" />
                        <YAxis type="number" domain={[Math.floor(props.stats.minPrice), Math.ceil(props.stats.maxPrice)]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="priceA" stroke="#ff84d8" />
                        <Line type="monotone" dataKey="priceB" stroke="#8884d8" />
                    </LineChart>

                </ResponsiveContainer>
            </Grid> */}
            <Grid item xs={12} height="400px">
                <ResponsiveContainer width="100%" aspect={3}>
                    <LineChart data={props.stats.stockSeries1List}>
                        <CartesianGrid />
                        <XAxis dataKey="localDate" />
                        <YAxis type="number" domain={[Math.floor(props.stats.minPrice), Math.ceil(props.stats.maxPrice)]} />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" stroke="#ff84d8" />
                    </LineChart>

                </ResponsiveContainer>
            </Grid>
        </Grid>
    )

}
function mapStateToProps(state) {
    return {
        companyStats: state.stockPriceReducer.companyStats,
        SEStats: state.stockPriceReducer.SEStats
    }
}

export default connect(mapStateToProps)(SingleCompany)