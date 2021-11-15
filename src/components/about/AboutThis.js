import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


export default function AboutThis(props) {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Grid conatiner sx={{ pt: 10 }}>
            <Grid item xs={12}>
                <Typography variant='h3' gutterBottom>
                    About "Stonks!"
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant='body2' gutterBottom>
                    The website is built on the STOCK MARKET CHARTING Case Study and thus includes multiple feature
                    pages including Companies,Stock Exchanges,Sectors etc as shown in the Side Menu.
                </Typography>
            </Grid>
            <Grid item xs={6} sx={{ pt: 3 }} container direction='column'>

                <Grid item xs={2}>
                    <Typography variant='h5' gutterBottom>
                        Tech Stack Used
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ul>
                        <li>Front End
                            <ul>
                                <li>
                                    JavaScript</li>
                                <li>
                                    ReactJS
                                </li>
                                <li>
                                    Redux
                                </li>
                                <li>
                                    Material UI
                                </li>
                            </ul>
                        </li>
                        <li>Back End
                            <ul>
                                <li>
                                    Java</li>
                                <li>
                                    Spring Boot
                                </li>
                                <li>Maven</li>
                                <li>
                                    Eureka Service Registery
                                </li>
                                <li>JPA</li>
                                <li>
                                    MySQL
                                </li>
                                <li>Mockito</li>
                            </ul>
                        </li>
                    </ul>


                </Grid>
                <Grid item xs={2}>
                    <Typography variant='h5' gutterBottom>
                        Dev Tools Used
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ul>
                        <li>Visual Studio Code</li>
                        <li>IntelliJ IDEA</li>
                        <li>Postman</li>
                        <li>MySQL Workbench</li>
                        <li>Git</li>
                    </ul>

                </Grid>
            </Grid >
        </Grid >
    )
}