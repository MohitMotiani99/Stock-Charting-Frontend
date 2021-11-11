import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Brief from "./CompanyMemoComponents/Brief";
import Ceo from "./CompanyMemoComponents/Ceo";
import Turnover from "./CompanyMemoComponents/Turnover";
import { Row, Col, Container } from "react-grid-system";
import CompSector from "./CompanyMemoComponents/CompSector";
import DirectorBoard from "./CompanyMemoComponents/DirectorBoard";
import StockExchangeCodes from "./CompanyMemoComponents/StockExchangeCodes";
import StockPriceChart from "./CompanyMemoComponents/StockPriceChart";
import { connect, useDispatch } from "react-redux";
import * as StockPriceActions from '../../actions/StockPriceActions'

const styles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '100%',
    height: '5rem',
}

function CompanyMemo(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(StockPriceActions.setCurrCompany(props.company))
        dispatch(StockPriceActions.setCompanyStats({
            stockSeries1List: [],
            avgPrice: 0.0,
            maxPrice: 0.0,
            minPrice: 0.0,
            growth: 0.0
        }))
    }, [])

    console.log(props.company.brief)
    return (
        <Container fluid>
            <Row>
                <Typography variant='h2' component='div'
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {props.company.companyName}
                </Typography>
            </Row>
            <Row>
                <Col md={6}>
                    <Ceo ceoName={props.company.ceo}></Ceo>
                </Col>
                <Col md={1}></Col>
                <Col md={5}>
                    <Row md={12}>
                        <Brief brief={props.company.brief}></Brief>
                    </Row>

                    <Row md={12} style={{
                        paddingTop: 20
                    }}>
                        <Col md={6} >
                            <Turnover turnover={props.company.turnover}></Turnover>
                        </Col>
                        <Col md={6}>
                            <CompSector sector={props.company.sector}></CompSector>
                        </Col>
                    </Row>
                </Col>

            </Row>
            <Row xs={12}>
                <Col xs={12}>
                    <DirectorBoard boardOfDirectors={props.company.boardOfDirectors}></DirectorBoard>
                </Col>
            </Row>

            <Row xs={12}>
                <Col xs={12}>
                    <StockExchangeCodes companyName={props.company.companyName} stockExchangeCodes={props.company.stockExchangeCodes}></StockExchangeCodes>
                </Col>
            </Row>

            <Row xs={12}>
                <Col xs={12}>
                    <StockPriceChart stockExchangeCodes={props.company.stockExchangeCodes}></StockPriceChart>
                </Col>
            </Row>


        </Container>
    );
}
function mapStateToProps(state) {
    return {
        currCompany: state.stockPriceReducer.currCompany
    }
}

export default connect(mapStateToProps)(CompanyMemo)