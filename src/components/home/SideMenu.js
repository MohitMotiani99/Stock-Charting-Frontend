import * as React from 'react';
import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import BusinessIcon from '@mui/icons-material/Business';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AppsIcon from '@mui/icons-material/Apps';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import InfoIcon from '@mui/icons-material/Info';
import CreateIcon from '@mui/icons-material/Create';
import { NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';



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

            <Grid item container direction="column">
                <Drawer
                    sx={{

                        '& .MuiDrawer-paper': {
                            width: '20%',
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
                                ['', 'Companies', 'Exchanges', 'Sectors', 'Users', 'IPO', 'Upload'].map((text) => (
                                    <Grid item xs={12}>
                                        <NavLink exact to={"/" + text}>
                                            <ListItem button key={text}>
                                                <ListItemIcon>
                                                    {(() => {
                                                        switch (text) {
                                                            case '':
                                                                return <HomeIcon />
                                                            case 'Companies':
                                                                return <BusinessIcon />
                                                            case 'Exchanges':
                                                                return <ShowChartIcon />
                                                            case 'Sectors':
                                                                return <AppsIcon />
                                                            case 'Users':
                                                                return <SupervisedUserCircleIcon />
                                                            case 'Upload':
                                                                return <UploadFileIcon />
                                                            case 'IPO':
                                                                return <MonetizationOnIcon />

                                                        }
                                                    })()}
                                                    {/* <MenuIcon /> */}
                                                </ListItemIcon>
                                                <ListItemText primary={text == '' ? 'Home' : text} />
                                            </ListItem>
                                        </NavLink>
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