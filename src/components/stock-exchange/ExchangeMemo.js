import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Row, Col, Container } from "react-grid-system";
import { connect, useDispatch } from "react-redux";
import * as StockPriceActions from '../../actions/StockPriceActions'
import Brief from "./ExchangeMemoComponents/Brief";
import ContactAddress from "./ExchangeMemoComponents/ContactAddress";
import Remarks from "./ExchangeMemoComponents/Remarks";
import StockPriceChart from "./ExchangeMemoComponents/StockPriceChart";

const styles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '100%',
    height: '5rem',
}

function ExchangeMemo(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(StockPriceActions.setCurrExchange(props.exchange))
        // dispatch(StockPriceActions.setCompanyStats({
        //     stockSeries1List: [],
        //     avgPrice: 0.0,
        //     maxPrice: 0.0,
        //     minPrice: 0.0,
        //     growth: 0.0
        // }))
    }, [])

    console.log(props)
    return (
        <Container fluid>
            <Row xs={12}>
                <Typography variant='h2' component='div'
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {props.exchange.stockExchangeName}
                </Typography>
            </Row>
            <Row xs={12}>
                <Col md={5}>
                    <Row md={12}>
                        <Brief brief={props.exchange.brief}></Brief>
                    </Row>
                    <Row md={12}>
                        <Remarks remarks={props.exchange.remarks}></Remarks>
                    </Row>

                </Col>

                <Col md={7}>
                    <Row md={12}>
                        <ContactAddress contactAddress={props.exchange.contactAddress}></ContactAddress>
                    </Row>
                </Col>

            </Row>
            <Row xs={12}>
                <Col xs={12}>
                    <StockPriceChart></StockPriceChart>
                </Col>
            </Row>



        </Container>
    );
}
function mapStateToProps(state) {
    return {
        currExchange: state.stockPriceReducer.currExchange
    }
}

export default connect(mapStateToProps)(ExchangeMemo)