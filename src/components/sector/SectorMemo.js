import { Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Brief from "./SectorMemoComponents/Brief";
import { Row, Col, Container } from "react-grid-system";
import StockPriceChart from "./SectorMemoComponents/StockPriceChart";
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

function SectorMemo(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(StockPriceActions.setCurrSector(props.sector))
        dispatch(StockPriceActions.setSectorStats({
            stockSeries1List: [],
            avgPrice: 0.0,
            maxPrice: 0.0,
            minPrice: 0.0,
            growth: 0.0
        }))
    }, [])

    return (
        <Container fluid>
            <Row>
                <Typography variant='h2' component='div'
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                    }}
                >
                    {props.sector.sectorName}
                </Typography>
            </Row>
            <Row>
                <Col md={12}>
                    <Brief brief={props.sector.brief}></Brief>
                </Col>
            </Row>

            <Row xs={12}>
                <Col xs={12}>
                    <StockPriceChart ></StockPriceChart>
                </Col>
            </Row>


        </Container>
    );
}
function mapStateToProps(state) {
    return {
        currSector: state.stockPriceReducer.currSector
    }
}

export default connect(mapStateToProps)(SectorMemo)