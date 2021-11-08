import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';

var LOGGED_IN = false

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


const drawerWidth = 240

export default function PageHeader(props) {
    return (
        <Grid item container>
            <Grid container>
                <AppBar
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}

                >
                    <Toolbar>

                        <Grid item xs={4}>
                            <Typography variant="h3" component="div">
                                Stonks!
                            </Typography>
                        </Grid>

                        {getButtons(LOGGED_IN)}

                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    );
}