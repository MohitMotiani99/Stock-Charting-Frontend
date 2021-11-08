import * as React from 'react';
import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import BusinessIcon from '@mui/icons-material/Business';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AppsIcon from '@mui/icons-material/Apps';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InfoIcon from '@mui/icons-material/Info';
import CreateIcon from '@mui/icons-material/Create';



// var LOGGED_IN = false

// const getButtons = (LOGGED_IN) => {
//     if (LOGGED_IN) {
//         return <Grid container>
//             <Grid item xs={7}></Grid>
//             <Grid item xs={2} >
//                 <Button color="inherit">
//                     <Typography variant="h6" component="div">
//                         Profile
//                     </Typography>
//                 </Button>
//             </Grid>
//             <Grid item xs={2} >
//                 <Button color="inherit">
//                     <Typography variant="h6" component="div">
//                         Logout
//                     </Typography>
//                 </Button>
//             </Grid>

//         </Grid>
//     }
//     else
//         return <Grid container>
//             <Grid item xs={9}></Grid>
//             <Grid item xs={2}>
//                 <Button color="inherit">
//                     <Typography variant="h6" component="div">
//                         Login
//                     </Typography>
//                 </Button>
//             </Grid>
//         </Grid>
// }

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}))

const drawerWidth = 240

export default function SideMenu(props) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(true)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }



    return (
        <Grid container spacing={2}>
            {/* <Grid item xs={12} container>
                <AppBar open={open}
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
            </Grid> */}

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
                    open={true}
                >
                    <Grid item xs={0} container display='flex' alignItems='center' justifyContent='flex-end'>
                        <DrawerHeader display='flex'>
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