import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BusinessIcon from '@mui/icons-material/Business';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AppsIcon from '@mui/icons-material/Apps';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InfoIcon from '@mui/icons-material/Info';
import CreateIcon from '@mui/icons-material/Create';



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

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}))

const drawerWidth = 240

export default function SideMenu(props) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }



    return (
        <Grid container spacing={2} display='flex'>
            <Grid item xs={12} container>
                <AppBar open={open}>
                    <Toolbar>
                        <Grid item xs={1}>
                            <IconButton
                                size="large"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}

                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h3" component="div">
                                Stonks!
                            </Typography>
                        </Grid>

                        {getButtons(LOGGED_IN)}

                    </Toolbar>
                </AppBar>
            </Grid>

            <Grid item xs={12} container direction="column">
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        boxSizing: 'border-box',
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}

                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <Grid item xs={0} container display='flex' alignItems='center' justifyContent='flex-end'>
                        <DrawerHeader display='flex'>
                            <Grid item xs={12} >
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </Grid>
                        </DrawerHeader>
                    </Grid>
                    <Grid item xs={0}>
                        <Divider />
                    </Grid>
                    <Grid item container direction='column'>
                        <List>
                            {
                                ['Companies', 'Exchanges', 'Sectors', 'Users'].map((text) => (
                                    <Grid item xs={12}>
                                        <ListItem button key={text}>
                                            <ListItemIcon>
                                                {(() => {
                                                    switch (text) {
                                                        case 'Companies':
                                                            return <BusinessIcon />
                                                        case 'Exchanges':
                                                            return <ShowChartIcon />
                                                        case 'Sectors':
                                                            return <AppsIcon />
                                                        case 'Users':
                                                            return <SupervisedUserCircleIcon />
                                                    }
                                                })()}
                                                {/* <MenuIcon /> */}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    </Grid>
                                ))

                            }
                        </List>
                    </Grid>
                    <Grid item>
                        <Divider />
                    </Grid>
                    <Grid item container direction='column'>
                        <List>
                            {
                                ['About', 'Creators'].map((text) => (
                                    <Grid item xs={12}>
                                        <ListItem button key={text}>
                                            <ListItemIcon>
                                                {(() => {
                                                    switch (text) {
                                                        case 'About':
                                                            return <InfoIcon />
                                                        case 'Creators':
                                                            return <CreateIcon />

                                                    }
                                                })()}
                                                {/* <MenuIcon /> */}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    </Grid>
                                ))

                            }
                        </List>
                    </Grid>
                </Drawer>
            </Grid>

        </Grid>
    );
}