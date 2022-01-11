import {AppBar, Grid, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles"
import { blueGrey } from "@mui/material/colors";
import Menu from "../components/Menu";
import { Box, width } from "@mui/system";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import Main from "../pages/Main";
import {Switch,Route,Redirect} from 'react-router-dom';
import Login from '../pages/Login';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import SignUp from "../pages/SignUp";
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
    return(
        <Box className={classes.layout} sx={{display:"flex"}}>
            
                <Menu/>
                <Switch>
                    <Route exact path="/main">
                        <Redirect to="/main/home"/>
                    </Route>
                    <Route exact path="/main/home">
                        <Main/>
                    </Route>
                    <Route exact path="/main/profile">
                        <Profile/>
                    </Route>
                    <Route exact path="/main/admin">
                        <Admin/>
                    </Route>
                    <Route exact path="/main/contact">
                        <ContactUs/>
                    </Route>
                    <Route exact path="/main/about">
                        <About/>
                    </Route>
                </Switch>  
        </Box>
    );
}