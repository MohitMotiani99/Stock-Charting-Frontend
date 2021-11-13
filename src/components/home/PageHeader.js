import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as HomeActions from '../../actions/HomeActions'
import * as UserActions from '../../actions/UserActions'


const getButtons = (LOGGED_IN) => {
    if (LOGGED_IN) {
        return <Grid container>
            <Grid item xs={7}></Grid>
            <Grid item xs={2} >
                <Button color="inherit">
                    <Typography variant="h6" component="div">
                        Profile
                    </Typography>
                </Button>
            </Grid>
            <Grid item xs={2} >
                <Button color="inherit">
                    <Typography variant="h6" component="div">
                        Logout
                    </Typography>
                </Button>
            </Grid>

        </Grid>
    }
    else
        return <Grid container>
            <Grid item xs={9}></Grid>
            <Grid item xs={2}>
                <Button color="inherit">
                    <Typography variant="h6" component="div">
                        Login
                    </Typography>
                </Button>
            </Grid>
        </Grid>
}


let emptyUser = {
    userId: "",
    username: "",
    password: "",
    userType: "",
    email: "",
    mobile: "",
    confirmed: true
}

const drawerWidth = 240

function PageHeader(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <Grid item container>
            <Grid container>
                <AppBar
                    sx={{
                        width: '80%',
                        ml: { sm: `${drawerWidth}px` },
                    }}

                >
                    <Toolbar>

                        <Grid item xs={4}>
                            <Typography variant="h3" component="div">
                                Stonks!
                            </Typography>
                        </Grid>

                        {
                            (props.loggedIn) ? <Grid container>
                                <Grid item xs={7}></Grid>
                                <Grid item xs={2} >
                                    <Button color="inherit" onClick={() => {
                                        navigate(`/user/${props.loggedUser.userId}`, {
                                            state: {
                                                user: props.loggedUser
                                            }
                                        })
                                    }}>
                                        <Typography variant="h6" component="div">
                                            Profile
                                        </Typography>
                                    </Button>
                                </Grid>
                                <Grid item xs={2} >
                                    <Button color="inherit"
                                        onClick={() => {
                                            dispatch(HomeActions.setLoggedUser(emptyUser))
                                            dispatch(UserActions.setCurrUser(emptyUser))
                                            dispatch(HomeActions.setLoggedIn(false))
                                            navigate("/")
                                        }}
                                    >
                                        <Typography variant="h6" component="div">
                                            Logout
                                        </Typography>
                                    </Button>
                                </Grid>

                            </Grid> : <Grid container>
                                <Grid item xs={9}></Grid>
                                <Grid item xs={2}>
                                    <Button color="inherit"
                                        onClick={() => navigate('/Login')}
                                    >
                                        <Typography variant="h6" component="div">
                                            Login
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        }

                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    );
}

function mapStateToProps(state) {
    return {
        loggedIn: state.homeReducer.loggedIn,
        admin: state.homeReducer.admin,
        loggedUser: state.homeReducer.loggedUser
    }
}

export default connect(mapStateToProps)(PageHeader)