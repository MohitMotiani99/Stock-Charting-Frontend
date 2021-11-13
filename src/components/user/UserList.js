import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { Button, Grid, IconButton } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import * as UserActions from '../../actions/UserActions'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import SaveUser from "./UserModeComponents/SaveUser";
import * as StockPriceActions from '../../actions/StockPriceActions'


function UserList(props) {

    const newUser = {
        userId: "",
        username: "",
        password: "",
        userType: "",
        email: "",
        mobile: "",
        confirmed: true
    }

    const dispatch = useDispatch()
    let [users, setUsers] = useState([])
    let [searchString, setSearchString] = useState("")

    let [popUp, setPopUp] = useState(false)
    let [ops, setOps] = useState("")
    let [adminMode, setAdminMode] = useState("none")

    useEffect(() => {

        setSearchString("")
        dispatch(UserActions.getUserList())
        setUsers(props.userList)
        if (props.admin)
            setAdminMode("flex")
    }, [])


    return (

        (!popUp) ? <Grid container sx={{ pt: 15, pl: 0 }} spacing={3}>

            <Grid item container sx={{ pt: 20 }}>
                <AppBar position='relative'>
                    <Toolbar>
                        <Grid item xs={4}>
                            <div

                                style={{
                                    backgroundColor: 'white',

                                }}

                            >
                                <SearchIcon />
                                <InputBase placeholder='Search...'
                                    value={searchString}
                                    onChange={(e) => {
                                        setSearchString(e.target.value.toLowerCase())
                                        if (e.target.value) {
                                            let newUserList = (props.userList).filter((user) => user.username.toLowerCase().includes(e.target.value.toLowerCase()));
                                            setUsers(newUserList)
                                        }
                                        else {
                                            setUsers(props.userList)
                                        }

                                    }}
                                ></InputBase>
                            </div>
                        </Grid>
                        <Grid item xs={3} />
                        <Grid item xs={5}>
                            <Button variant='contained' color='success' fullWidth
                                onClick={() => {
                                    setOps("save")
                                    dispatch(StockPriceActions.setCurrUser(newUser))
                                    setPopUp(true)
                                }}
                            >
                                <IconButton color='primary'>
                                    <AddIcon></AddIcon>
                                </IconButton>
                                Do Something
                            </Button>
                        </Grid>

                    </Toolbar>
                </AppBar>
            </Grid>

            {console.log(props.companyList)}
            {
                (searchString == null || searchString.length == 0 ? props.userList : users).map((user) => {
                    return <Grid item md={3}>
                        <UserCard trigger={popUp} setTrigger={setPopUp} type={ops} setType={setOps} user={user} />
                    </Grid>
                })
            }


        </Grid> : <SaveUser trigger={popUp} setTrigger={setPopUp} ops={ops}></SaveUser>
    );


}
function mapStateToProps(state) {
    return {
        admin: state.homeReducer.admin,
        userList: state.userReducer.userList
    }
}

export default connect(mapStateToProps)(UserList)