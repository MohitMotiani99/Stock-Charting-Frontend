import { Button, Grid, IconButton, Input, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UploadIcon from '@mui/icons-material/Upload';
import { connect, useDispatch } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as StockExchangeActions from '../../actions/StockExchangeActions'
import * as CompanyActions from '../../actions/CompanyActions'
import { getHistPriceList, setHistPriceList } from "../../actions/UploadActions";
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function UploadFeature(props) {
    let [stockName, setStockName] = useState("")
    let [compName, setCompName] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setHistPriceList([]))
        dispatch(StockExchangeActions.getSEList())
        dispatch(CompanyActions.getCompanyList())
    }, [])

    return (
        <Grid container sx={{ pt: 10 }}>


            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom>
                    Upload Price Sheets
                </Typography>
            </Grid>

            <Grid item xs={6} sx={{ pt: 5 }}>
                <Select
                    sx={{
                        width: '95%'
                    }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={stockName}
                    onChange={async (e) => {
                        setStockName(e.target.value)
                    }}
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
            {console.log(props.companyList)}
            <Grid item xs={6} sx={{ pt: 5 }}>
                <Select
                    sx={{
                        width: '95%'
                    }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={compName}

                    onChange={async (e) => {

                        setCompName(e.target.value)

                    }}
                    label="Select Company Name"
                >
                    {
                        (props.companyList).filter((comp) => stockName == "" || stockName == null || comp.stockExchangeCodes.hasOwnProperty(stockName)).map((comp) => {
                            return <MenuItem value={comp.companyName}>
                                {comp.companyName}
                            </MenuItem>
                        })
                    }

                </Select>

            </Grid>


            <Grid item xs={12} sx={{ pt: 5 }}>
                <Button
                    fullWidth
                    variant="outlined"
                    component="label"
                >
                    Upload Stock Price Sheet
                    <input
                        id="sheet"
                        type="file"
                        hidden
                        onChange={(e) => dispatch(getHistPriceList({
                            stockExchangeName: stockName,
                            companyName: compName,
                            file: e.target.files[0]
                        }))}
                    />
                </Button>
            </Grid>
            <TableContainer component={Paper} sx={{ pt: 5 }}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Stock Exchange</TableCell>
                            <TableCell align="right">Company Code</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(props.histPriceList).map((row) => (
                            <TableRow
                                key={row.stockPriceId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.stockExchangeName}
                                </TableCell>
                                <TableCell align="right">{row.companyCode}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.localDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid item xs={12} sx={{ pt: 5 }}>
                <IconButton>
                    <RotateLeftIcon />
                </IconButton>
                <Button variant='outlined' fullWidth
                    onClick={() => setHistPriceList([])}
                >
                    CLEAR STACK
                </Button>
            </Grid>

        </Grid>
    );
}

function mapStateToProps(state) {
    return {
        histPriceList: state.uploadReducer.histPriceList,
        SEList: state.stockExchangeReducer.SEList,
        companyList: state.companyReducer.companyList

    }
}

export default connect(mapStateToProps)(UploadFeature)