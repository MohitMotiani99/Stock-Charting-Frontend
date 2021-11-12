import { Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography, NativeSelect, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { subYears, subMonths } from "date-fns";
import * as StockPriceActions from '../../../actions/StockPriceActions'
import * as StockExchangeActions from '../../../actions/StockExchangeActions'
import { connect, useDispatch } from "react-redux";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import SingleCompany from "../../stock-price/SingleCompany";
import SingleCompanyBar from "../../stock-price/SingleCompanyBar";
import SingleCompanyScatter from "../../stock-price/SingleCompanyScatter";



function StockPriceChart(props) {

    const dispatch = useDispatch()

    const [stockName, setStockName] = useState(props.currStock)
    const handleStockNameChange = (e) => {
        setStockName(e.target.value)
        dispatch(StockPriceActions.setCurrStock(e.target.value))
    }

    const [stockName2, setStockName2] = useState(props.currStock2)
    const handleStockName2Change = (e) => {
        setStockName2(e.target.value)
        dispatch(StockPriceActions.setCurrStock2(e.target.value))
    }


    const [chartType, setChartType] = useState("Line")
    const handleChartTypeChange = (e) => {
        setChartType(e.target.value)
    }

    const [chartType2, setChartType2] = useState("Line")
    const handleChartType2Change = (e) => {
        setChartType2(e.target.value)
    }

    const [startDate, setStartDate] = useState(props.start)
    const [endDate, setEndDate] = useState(props.end)
    const handleStartDateChange = (d) => {
        setStartDate(d)
        dispatch(StockPriceActions.setStart(d))
    }
    const handleEndDateChange = (d) => {
        setEndDate(d)
        dispatch(StockPriceActions.setEnd(d))
    }


    const [startDate2, setStartDate2] = useState(props.start2)
    const [endDate2, setEndDate2] = useState(props.end2)
    const handleStartDate2Change = (d) => {
        setStartDate2(d)
        dispatch(StockPriceActions.setStart2(d))
    }
    const handleEndDate2Change = (d) => {
        setEndDate2(d)
        dispatch(StockPriceActions.setEnd2(d))
    }



    const [disp, setDisp] = useState("none")
    const handleDispChange = (v) => {
        setDisp(v)
    }

    useEffect(() => {
        dispatch(StockExchangeActions.getSEList())

    }, [])

    const drawGraph = (a, b, c) => {
        setDisp('flex')
        console.log(props)
        dispatch(StockPriceActions.setCurrStock(a))
        dispatch(StockPriceActions.setStart(b))
        dispatch(StockPriceActions.setEnd(c))
        dispatch(StockPriceActions.getSEStats({
            stockExchangeName: a,
            start: b,
            end: c
        }))

    }

    const drawGraph2 = (a, b, c) => {
        setDisp('flex')
        console.log(props)
        dispatch(StockPriceActions.setCurrStock2(a))
        dispatch(StockPriceActions.setStart2(b))
        dispatch(StockPriceActions.setEnd2(c))
        dispatch(StockPriceActions.getSEStats2({
            stockExchangeName: a,
            start: b,
            end: c
        }))

    }

    return (
        <Grid container sx={{ pt: 7 }}>
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
                        (props.SEList).map((exch) => {
                            return <MenuItem value={exch.stockExchangeName}>{exch.stockExchangeName}</MenuItem>
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
                    onClick={() => drawGraph(stockName, startDate, endDate)}
                >
                    Graph
                </Button>
            </Grid>




            {/* 2nd Input */}




            <Divider />
            <Grid item xs={4}>
                <InputLabel id='stock-select' sx={{
                }}>Stock Exchange</InputLabel>
                <Select
                    labelId="stock-select"
                    id="demo-simple-select"
                    value={stockName2}
                    onChange={handleStockName2Change}
                    sx={{
                        width: '80%',
                    }}
                    placeholder="None"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        (props.SEList).map((exch) => {
                            return <MenuItem value={exch.stockExchangeName}>{exch.stockExchangeName}</MenuItem>
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
                    onClick={() => drawGraph2(stockName2, startDate, endDate)}
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
                        return <SingleCompany stats={props.SEStats} stats2={props.SEStats2}></SingleCompany>
                    else if (chartType == "Bar")
                        return <SingleCompanyBar stats={props.SEStats} stats2={props.SEStats2}></SingleCompanyBar>
                    else if (chartType == "Scatter")
                        return <SingleCompanyScatter stats={props.SEStats} stats2={props.SEStats2} />
                })()}


            </Grid>

        </Grid>
    )

}

function mapStateToProps(state) {
    return {
        start: state.stockPriceReducer.start,
        end: state.stockPriceReducer.end,
        start2: state.stockPriceReducer.start2,
        end2: state.stockPriceReducer.end2,
        currStock: state.stockPriceReducer.currStock,
        currStock2: state.stockPriceReducer.currStock2,
        SEStats: state.stockPriceReducer.SEStats,
        SEStats2: state.stockPriceReducer.SEStats2,
        SEList: state.stockExchangeReducer.SEList
    }
}

export default connect(mapStateToProps)(StockPriceChart)