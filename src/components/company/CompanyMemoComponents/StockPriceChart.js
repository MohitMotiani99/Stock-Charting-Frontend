import { Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography, NativeSelect, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { subYears, subMonths } from "date-fns";
import SingleCompany from "../../stock-price/SingleCompany";
import * as StockPriceActions from '../../../actions/StockPriceActions'
import { connect, useDispatch } from "react-redux";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import SingleCompanyBar from "../../stock-price/SingleCompanyBar";
import SingleCompanyScatter from "../../stock-price/SingleCompanyScatter";



function StockPriceChart(props) {

    const dispatch = useDispatch()

    const [chartType, setChartType] = useState("Line")
    const handleChartTypeChange = (e) => {
        setChartType(e.target.value)
    }

    const [stockName, setStockName] = useState("NASDAQ")
    const handleStockNameChange = (e) => {
        setStockName(e.target.value)
        dispatch(StockPriceActions.setCurrStock(e.target.value))
    }

    let date = new Date()
    let exp = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    const [startDate, setStartDate] = useState(subMonths(new Date(), 6))
    const [endDate, setEndDate] = useState(new Date())
    const handleStartDateChange = (d) => {
        setStartDate(d)
        dispatch(StockPriceActions.setStart(d))
    }
    const handleEndDateChange = (d) => {
        setEndDate(d)
        dispatch(StockPriceActions.setEnd(d))
    }

    const [disp, setDisp] = useState("none")
    const handleDispChange = (v) => {
        setDisp(v)
    }

    useEffect(() => {
        dispatch(StockPriceActions.setCurrStock(stockName))
        dispatch(StockPriceActions.setStart(startDate))
        dispatch(StockPriceActions.setEnd(endDate))
        dispatch(StockPriceActions.getCompanyStats({
            stockExchangeName: props.currStock,
            start: props.start,
            end: props.end,
            companyCode: props.currCompany.stockExchangeCodes[props.currStock]
        }))

    }, [])

    const drawGraph = () => {
        setDisp('flex')
        console.log(props)

        dispatch(StockPriceActions.getCompanyStats({
            stockExchangeName: props.currStock,
            start: props.start,
            end: props.end,
            companyCode: props.currCompany.stockExchangeCodes[props.currStock]
        }))

    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom component='div' sx={{
                    width: '100%'
                }}>
                    Charts
                </Typography>
            </Grid>
            <Divider />
            <Grid item xs={4}>
                <InputLabel id='stock-select' sx={{
                }}>Stock Exchange</InputLabel>
                <Select
                    labelId="stock-select"
                    id="demo-simple-select"
                    value={stockName}
                    onChange={handleStockNameChange}
                    sx={{
                        width: '80%',
                    }}
                    placeholder="None"
                    defaultValue="BSE"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        [...Object.keys(props.stockExchangeCodes)].map((text) => {
                            return <MenuItem value={text}>{text}</MenuItem>
                        })
                    }
                </Select>
            </Grid>


            <Grid item xs={3} container direction="column">

                <Grid item xs={1}>
                    <Typography variant='body1' gutterBottom component='div' sx={{
                        width: '100%'
                    }}>
                        Start Date
                    </Typography>
                </Grid>


                <Grid item xs={1}>
                    <span>
                        <DatePicker
                            selected={startDate}
                            onChange={d => handleStartDateChange(d)}
                            dateFormat='dd/MM/yyyy'
                            maxDate={new Date()}
                            minDate={subYears(new Date(), 20)}
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            placeholderText="Select"


                        />
                    </span>
                </Grid>
            </Grid>
            <Grid item xs={3} container direction="column">

                <Grid item xs={1}>
                    <Typography variant='body1' gutterBottom component='div' sx={{
                        width: '100%'
                    }}>
                        End Date
                    </Typography>
                </Grid>


                <Grid item xs={1}>
                    <span>
                        <DatePicker
                            selected={endDate}
                            onChange={d => handleEndDateChange(d)}
                            dateFormat='dd/MM/yyyy'
                            maxDate={new Date()}
                            minDate={subYears(new Date(), 20)}
                            isClearable
                            showYearDropdown
                            scrollableMonthYearDropdown
                            placeholderText="Select"


                        />
                    </span>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <InputLabel id='chart-select' sx={{
                }}>Chart Type</InputLabel>
                <Select
                    labelId="chart-select"
                    id="demo-simple-select"
                    value={chartType}
                    onChange={handleChartTypeChange}
                    sx={{
                        width: '80%',
                    }}
                    placeholder="None"
                    defaultValue="Line"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Line">Line</MenuItem>
                    <MenuItem value="Bar">Bar</MenuItem>
                    <MenuItem value="Scatter">Scatter</MenuItem>
                </Select>

            </Grid>
            <Grid item xs={12}>
                <Button variant='contained'
                    sx={{
                        width: '100%'
                    }}
                    onClick={drawGraph}
                >
                    Graph
                </Button>
            </Grid>
            {console.log(disp)}
            <Grid item xs={12} display={disp} sx={{
                display: { disp }
            }}>
                {(() => {
                    if (chartType == "Line")
                        return <SingleCompany stats={props.companyStats} stats2={[]}></SingleCompany>
                    else if (chartType == "Bar")
                        return <SingleCompanyBar stats={props.companyStats} stats2={[]}></SingleCompanyBar>
                    else if (chartType == "Scatter")
                        return <SingleCompanyScatter stats={props.companyStats} stats2={[]} />
                })()}


            </Grid>

        </Grid>
    )

}

function mapStateToProps(state) {
    return {
        currCompany: state.stockPriceReducer.currCompany,
        currStock: state.stockPriceReducer.currStock,
        start: state.stockPriceReducer.start,
        end: state.stockPriceReducer.end,
        companyStats: state.stockPriceReducer.companyStats
    }
}

export default connect(mapStateToProps)(StockPriceChart)