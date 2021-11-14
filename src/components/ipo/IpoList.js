import React, { useEffect, useState } from "react";
import { Button, Grid, IconButton, MenuItem, Select } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import * as IpoActions from '../../actions/IpoActions'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import SaveIpo from "./AdminModeComponents/SaveIpo";
import * as StockExchangeActions from '../../actions/StockExchangeActions'
import * as CompanyActions from '../../actions/CompanyActions'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function IpoList(props) {

    const newIpo = {
        companyName: "",
        stockExchangeName: "",
        pricePerShare: 0.0,
        totalStocks: 0,
        openDate: "",
        remarks: ""
    }

    const dispatch = useDispatch()
    let [ipos, setIpos] = useState([])
    let [searchString, setSearchString] = useState("")

    let [popUp, setPopUp] = useState(false)
    let [ops, setOps] = useState("")
    let [adminMode, setAdminMode] = useState("none")

    let [stockName, setStockName] = useState("")
    let [compName, setCompName] = useState("")

    useEffect(() => {

        setSearchString("")
        dispatch(IpoActions.getIpoList())
        dispatch(StockExchangeActions.getSEList())
        dispatch(CompanyActions.getCompanyList())
        setIpos(props.ipoList)
        if (props.admin)
            setAdminMode("flex")
    }, [])


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));



    return (

        (!popUp) ? <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>

            <Grid item container sx={{ pt: 20 }}>
                <AppBar position='relative'>
                    <Toolbar>
                        <Grid item xs={2}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={stockName}
                                onChange={(e) => setStockName(e.target.value)}
                                label="Select Stock Exchange"
                            >
                                {
                                    (props.SEList).map((stock) => {
                                        return <MenuItem value={stock.stockExchangeName}>
                                            {stock.stockExchangeName}
                                        </MenuItem>
                                    })
                                }

                            </Select>
                        </Grid>
                        <Grid item xs={2}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={compName}
                                onChange={(e) => setCompName(e.target.value)}
                                label="Select Company Name"
                            >
                                {
                                    (props.companyList).filter((comp) => stockName == "" || stockName == null || comp.getStockExchangeCodes.hasOwnProperty(stockName)).map((comp) => {
                                        return <MenuItem value={comp.companyName}>
                                            {comp.companyName}
                                        </MenuItem>
                                    })
                                }

                            </Select>

                        </Grid>
                        <Grid item xs={2} >
                            <Button variant='contained' color='primary'
                                onClick={() => IpoActions.getIpoFilterList()}
                            >
                                <IconButton>

                                </IconButton>
                                Filter
                            </Button>
                        </Grid>
                        <Grid item xs={2} >
                            <Button variant='contained' color='primary'
                                onClick={() => {
                                    IpoActions.getIpoList()
                                    setStockName("")
                                    setCompName("")
                                    IpoActions.setIpoFilterList([])
                                }}
                            >
                                <IconButton>

                                </IconButton>
                                Reset
                            </Button>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3}>
                            <Button variant='contained' color='success' fullWidth
                                onClick={() => {
                                    setOps("save")
                                    // dispatch(StockPriceActions.setCurrSector(newSector))
                                    setPopUp(true)
                                }}
                            >
                                <IconButton color='primary'>
                                    <AddIcon></AddIcon>
                                </IconButton>
                                Add IPO
                            </Button>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Grid>


            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Stock Exchange</StyledTableCell>
                            <StyledTableCell align="right">Company</StyledTableCell>
                            <StyledTableCell align="right">Price/Share</StyledTableCell>
                            <StyledTableCell align="right">Total Shares(g)</StyledTableCell>
                            <StyledTableCell align="right">Opening Date(g)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(props.ipoFilterList.length == 0 ? props.ipoList : props.ipoFilterList).map((row) => (
                            <StyledTableRow key={row.stockExchangeName}>
                                <StyledTableCell component="th" scope="row">
                                    {row.companyName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.pricePerShare}</StyledTableCell>
                                <StyledTableCell align="right">{row.totalStocks}</StyledTableCell>
                                <StyledTableCell align="right">{row.openDate}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>



        </Grid> : <SaveIpo trigger={popUp} setTrigger={setPopUp} ops={ops}></SaveIpo>
    );


}
function mapStateToProps(state) {
    return {
        admin: state.homeReducer.admin,
        ipoList: state.ipoReducer.ipoList,
        ipoFilterList: state.ipoReducer.ipoFilterList,
        SEList: state.stockExchangeReducer.SEList,
        companyList: state.companyReducer.companyList
    }
}

export default connect(mapStateToProps)(IpoList)