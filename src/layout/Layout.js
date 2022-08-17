
import {makeStyles} from "@mui/styles"
import { blueGrey } from "@mui/material/colors";
import Menu from "../components/Menu";
import { Box } from "@mui/system";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import {Switch,Route,Redirect} from 'react-router-dom';

import About from '../pages/About';
import ContactUs from '../pages/ContactUs';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/user-actions";
const useStyles = makeStyles({
    left:{
        backgroundColor: blueGrey[700],
        color: blueGrey[200],
    },
    right:{
        backgroundColor:blueGrey[400],
        color: blueGrey[100]
    },
    layout:{
        display:"flex",
        
        height:'85%'
    }
})

export default function Layout(){
    const classes = useStyles();
    
    const dispatch = useDispatch();
    
    const user = useSelector(state => state.user);   
    
    const [details,setDetails] = useState(user.data);
    

    return(
        <Box className={classes.layout} sx={{display:"flex"}}>
            
                <Menu/>
                <Switch>
                    <Route exact path="/main">
                        <Redirect to="/main/home"/>
                    </Route>
                    <Route path="/main/home">
                        <Main/>
                    </Route>
                    <Route  path="/main/profile">
                        <Profile userDetails = {details} />
                    </Route>
                    { user.data.isAdmin && <Route  path="/main/admin">
                        <Admin/>
                    </Route> }
                    <Route  path="/main/contact">
                        <ContactUs/>
                    </Route>
                    <Route  path="/main/about">
                        <About/>
                    </Route>
                    <Redirect to="/main"/>
                </Switch>  
        </Box>
    );
}