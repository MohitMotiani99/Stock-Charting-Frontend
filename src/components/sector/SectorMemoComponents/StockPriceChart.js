import { Divider, FormControl, Grid, InputLabel, MenuItem, Select, Typography, NativeSelect, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { subYears, subMonths } from "date-fns";
import SingleCompany from "../../stock-price/SingleCompany";
import * as StockPriceActions from '../../../actions/StockPriceActions'
import * as StockExchangeActions from '../../../actions/StockExchangeActions'
import * as SectorActions from '../../../actions/SectorActions'
import * as CompanyActions from '../../../actions/CompanyActions'
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

    const [sectorName, setSectorName] = useState(props.currSect)
    const handleSectorNameChange = (e) => {
        setSectorName(e.target.value)
        dispatch(StockPriceActions.setCurrSect(e.target.value))
    }

    const [sectorName2, setSectorName2] = useState(props.currSect2)
    const handleSectorName2Change = (e) => {
        setSectorName2(e.target.value)
        dispatch(StockPriceActions.setCurrSect2(e.target.value))
    }

    const [compName, setCompName] = useState(props.currComp)
    const handleCompNameChange = (e) => {
        setCompName(e.target.value)
        dispatch(StockPriceActions.setCurrComp(e.target.value))
        dispatch(StockPriceActions.getCurrCompFromCurrComp({
            companyName: e.target.value
        }))
    }

    const [compName2, setCompName2] = useState(props.currComp2)
    const handleCompName2Change = (e) => {
        setCompName2(e.target.value)
        dispatch(StockPriceActions.setCurrComp2(e.target.value))
        dispatch(StockPriceActions.getCurrComp2FromCurrComp2({
            companyName: e.target.value
        }))

    }


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
        // dispatch(StockPriceActions.setCurrStock(stockName))
        // dispatch(StockPriceActions.setStart(startDate))
        // dispatch(StockPriceActions.setEnd(endDate))
        dispatch(SectorActions.getSectorList())
        dispatch(CompanyActions.getCompanyList())
        dispatch(StockPriceActions.getCurrCompFromCurrComp({
            companyName: props.currComp
        }))

        dispatch(StockPriceActions.getCurrComp2FromCurrComp2({
            companyName: props.currComp2
        }))

        dispatch(StockPriceActions.getSectorStats({
            sectorName: props.currSect,
            start: props.start,
            end: props.end,
            companyName: props.currComp
        }))
        dispatch(StockPriceActions.getSectorStats2({
            sectorName: props.currSect2,
            start: startDate,
            end: endDate,
            companyName: props.currComp2
        }))

    }, [])

    let [showGraph, setShowGraph] = useState(false)

    const drawGraph = () => {
        setDisp('flex')
        console.log(props)

        dispatch(StockPriceActions.setCurrSect(sectorName))
        dispatch(StockPriceActions.setCurrSect2(sectorName2))
        dispatch(StockPriceActions.setStart(startDate))
        dispatch(StockPriceActions.setEnd(endDate))

        dispatch(StockPriceActions.setCurrComp(compName))
        dispatch(StockPriceActions.setCurrComp2(compName2))

        dispatch(StockPriceActions.getCurrCompFromCurrComp({
            companyName: props.currComp
        }))

        dispatch(StockPriceActions.getCurrComp2FromCurrComp2({
            companyName: props.currComp2
        }))


        console.log(compName)
        dispatch(StockPriceActions.getSectorStats({
            sectorName: props.currSect,
            start: startDate,
            end: endDate,
            companyName: compName
        }))
        dispatch(StockPriceActions.getSectorStats2({
            sectorName: props.currSect2,
            start: startDate,
            end: endDate,
            companyName: props.currComp2
        }))

    }

    let [col1, setCol1] = useState("green")
    let [col2, setCol2] = useState("green")

    return (
        <Grid container sx={{ pt: 5 }}>
            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom component='div' sx={{
                    width: '100%'
                }}>
                    Charts
                </Typography>
            </Grid>
            <Divider />
            <Grid item xs={2}>
                <InputLabel id='stock-select' sx={{
                }}>Sector</InputLabel>
                <Select
                    labelId="sector-select"
                    id="demo-simple-select"
                    value={sectorName}
                    onChange={handleSectorNameChange}
                    sx={{
                        width: '95%',
                    }}
                    placeholder="None"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        (props.sectorList).map((obj) => {
                            return <MenuItem value={obj.sectorName}>{obj.sectorName}</MenuItem>
                        })
                    }
                </Select>
            </Grid>
            <Grid item xs={2}>
                <InputLabel id='company-select' sx={{
                }}>Company</InputLabel>
                <Select
                    labelId="stock-select"
                    id="demo-simple-select"
                    value={compName}
                    onChange={handleCompNameChange}
                    sx={{
                        width: '95%',
                    }}
                    placeholder="None"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        (props.companyList).filter(c => c.sector === sectorName)
                            .map((obj) => {
                                return <MenuItem value={obj.companyName}>{obj.companyName}</MenuItem>
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

            <Grid item xs={2}>
                <InputLabel id='col1-select' sx={{
                }}>Color</InputLabel>
                <Select
                    labelId="col1-select"
                    id="demo-simple-select"
                    value={col1}
                    onChange={(e) => setCol1(e.target.value)}
                    sx={{
                        width: '80%',
                    }}
                    placeholder="None"
                    defaultValue="green"
                >
                    <MenuItem value="green">Green</MenuItem>
                    <MenuItem value="blue">Blue</MenuItem>
                    <MenuItem value="red">Red</MenuItem>
                </Select>

            </Grid>
            <Grid item xs={10}></Grid>



            {/* 2nd Graph */}



            <Grid item xs={2}>
                <InputLabel id='sector-select' sx={{
                }}>Sector</InputLabel>
                <Select
                    labelId="sector-select"
                    id="demo-simple-select"
                    value={sectorName2}
                    onChange={handleSectorName2Change}
                    sx={{
                        width: '95%',
                    }}
                    placeholder="None"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        (props.sectorList).map((obj) => {
                            return <MenuItem value={obj.sectorName}>{obj.sectorName}</MenuItem>
                        })
                    }
                </Select>
            </Grid>
            <Grid item xs={2}>
                <InputLabel id='company-select' sx={{
                }}>Company</InputLabel>
                <Select
                    labelId="stock-select"
                    id="demo-simple-select"
                    value={compName2}
                    onChange={handleCompName2Change}
                    sx={{
                        width: '95%',
                    }}
                    placeholder="None"
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    {
                        (props.companyList).filter(c => c.sector === sectorName2)
                            .map((obj) => {
                                return <MenuItem value={obj.companyName}>{obj.companyName}</MenuItem>
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

            <Grid item xs={2}>
                <InputLabel id='col2-select' sx={{
                }}>Color</InputLabel>
                <Select
                    labelId="col2-select"
                    id="demo-simple-select"
                    value={col2}
                    onChange={(e) => setCol2(e.target.value)}
                    sx={{
                        width: '80%',
                    }}
                    placeholder="None"
                    defaultValue="green"
                >
                    <MenuItem value="green">Green</MenuItem>
                    <MenuItem value="blue">Blue</MenuItem>
                    <MenuItem value="red">Red</MenuItem>
                </Select>

            </Grid>
            <Grid item xs={10}></Grid>




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
                        return <SingleCompany stats={props.sectorStats} stats2={props.sectorStats2} type={"1"} col1={col1} col2={col2}></SingleCompany>
                    else if (chartType == "Bar")
                        return <SingleCompanyBar stats={props.sectorStats} stats2={props.sectorStats2} type={"1"} col1={col1} col2={col2}></SingleCompanyBar>
                    else if (chartType == "Scatter")
                        return <SingleCompanyScatter stats={props.sectorStats} stats2={props.sectorStats2} type={"1"} col1={col1} col2={col2} />
                })()}


            </Grid>
            <Grid item xs={12} display={disp} sx={{
                display: { disp }
            }}>
                {(() => {
                    if (chartType == "Line")
                        return <SingleCompany stats={props.sectorStats} stats2={props.sectorStats2} type={"2"} col1={col1} col2={col2}></SingleCompany>
                    else if (chartType == "Bar")
                        return <SingleCompanyBar stats={props.sectorStats} stats2={props.sectorStats2} type={"2"} col1={col1} col2={col2}></SingleCompanyBar>
                    else if (chartType == "Scatter")
                        return <SingleCompanyScatter stats={props.sectorStats} stats2={props.sectorStats2} type={"2"} col1={col1} col2={col2} />
                })()}


            </Grid>

        </Grid>
    )

}

function mapStateToProps(state) {
    return {
        currCompany: state.stockPriceReducer.currCompany,
        currCompany2: state.stockPriceReducer.currCompany2,
        currComp: state.stockPriceReducer.currComp,
        currComp2: state.stockPriceReducer.currComp2,
        currSect: state.stockPriceReducer.currSect,
        currSect2: state.stockPriceReducer.currSect2,
        start: state.stockPriceReducer.start,
        end: state.stockPriceReducer.end,
        sectorStats: state.stockPriceReducer.sectorStats,
        sectorStats2: state.stockPriceReducer.sectorStats2,
        companyList: state.companyReducer.companyList,
        sectorList: state.sectorReducer.sectorList
    }
}

export default connect(mapStateToProps)(StockPriceChart)