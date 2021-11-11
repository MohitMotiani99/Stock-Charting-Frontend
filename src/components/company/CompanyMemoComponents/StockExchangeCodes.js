import { Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function StockExchangeCodes(props) {


    return (
        <Grid container sx={{ pt: 10 }}>
            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom component='div'>
                    {props.companyName + '\'s Codes in Stock Exchanges'}
                </Typography>
            </Grid>
            <Grid item xs={12} container>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align='center'>
                                    <Grid item xs={6}>

                                        <Typography variant='h6' gutterBottom>
                                            STOCK EXCHANGE
                                        </Typography>
                                    </Grid>

                                </StyledTableCell>
                                <StyledTableCell align='center'>
                                    <Grid item xs={6}>

                                        <Typography variant='h6' gutterBottom>
                                            COMPANY CODE
                                        </Typography>
                                    </Grid>

                                </StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {

                                [...Object.keys(props.stockExchangeCodes)].map((key) => {
                                    return <StyledTableRow>
                                        <StyledTableCell align='center'>
                                            <Grid item xs={6}>
                                                <Typography variant='h6' gutterBottom>
                                                    {key}
                                                </Typography>
                                            </Grid>
                                        </StyledTableCell>
                                        <StyledTableCell align='center'>
                                            <Grid item xs={6}>
                                                <Typography variant='h6' gutterBottom>
                                                    {props.stockExchangeCodes[key]}
                                                </Typography>
                                            </Grid>
                                        </StyledTableCell>
                                    </StyledTableRow>

                                })

                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid >
    )
}