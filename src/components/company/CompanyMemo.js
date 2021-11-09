import { Grid, Typography } from "@mui/material";
import React from "react";
import Brief from "./CompanyMemoComponents/Brief";
import Ceo from "./CompanyMemoComponents/Ceo";
import Turnover from "./CompanyMemoComponents/Turnover";
import { Row, Col, Container } from "react-grid-system";
import CompSector from "./CompanyMemoComponents/CompSector";

const styles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '100%',
    height: '5rem',
}

export default function CompanyMemo(props) {
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




        </Container>
    );
}