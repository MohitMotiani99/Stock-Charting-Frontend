import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Row, Col, Container } from "react-grid-system";
import { connect, useDispatch } from "react-redux";
import * as StockPriceActions from '../../actions/StockPriceActions'
import * as UserActions from '../../actions/UserActions'
import * as HomeActions from '../../actions/HomeActions'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

import { userpp } from './UserPP'

const styles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '100%',
    height: '5rem',
}

function UserMemo(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(StockPriceActions.setCurrUser(props.user))
        dispatch(HomeActions.setLoggedIn(true))
    }, [])

    return (
        <Container fluid>
            <Row xs={12}>
                <Col xs={1}>
                    <img src={userpp[Math.floor(Math.random() * 4)]} width='70px' height='70px'></img>
                </Col>
                <Col xs={7}>
                    <Typography variant='h2' component='div'
                        gutterBottom
                        sx={{
                            textAlign: 'left',
                        }}
                    >
                        {props.user.username}
                    </Typography>
                </Col>
                <Col xs={2} >
                    {
                        (props.loggedIn && props.loggedUser.userId == props.user.userId) ?
                            <Button color='primary' variant="contained" size="large"
                                onClick={() => {
                                    props.setType("update")
                                    dispatch(StockPriceActions.setCurrUser(props.user))
                                    props.setTrigger(true)
                                }}
                            >
                                Update
                            </Button> : <Grid item></Grid>
                    }
                </Col>
                <Col xs={2}>
                    {
                        (props.loggedIn && props.loggedUser.userId == props.user.userId) ?
                            <Button color='primary' variant="contained" size="large"
                                onClick={() => {
                                    dispatch(UserActions.deleteUser(props.user.userId))
                                }}
                            >
                                Delete
                            </Button> : <Grid item></Grid>
                    }
                </Col>
            </Row>
            <Paper>
                <Row xs={12}>
                    <Col xs={1}>
                        <IconButton>
                            <ContactMailIcon />
                        </IconButton>
                    </Col>
                    <Col xs={11}>
                        <Typography variant='h6' component='div'
                            gutterBottom
                            sx={{
                                textAlign: 'left',
                            }}
                        >
                            {props.user.email}
                        </Typography>
                    </Col>
                </Row>
                <Row>

                    <Col xs={1}>
                        <IconButton>
                            <ContactPhoneIcon />
                        </IconButton>
                    </Col>
                    <Col xs={11}>
                        <Typography variant='h6' component='div'
                            gutterBottom
                            sx={{
                                textAlign: 'left',
                            }}
                        >
                            {props.user.mobile}
                        </Typography>
                    </Col>

                </Row>
            </Paper>


        </Container>
    );
}
function mapStateToProps(state) {
    return {
        currUser: state.stockPriceReducer.currUser,
        admin: state.homeReducer.admin,
        loggedIn: state.homeReducer.loggedIn,
        loggedUser: state.homeReducer.loggedUser
    }
}

export default connect(mapStateToProps)(UserMemo)