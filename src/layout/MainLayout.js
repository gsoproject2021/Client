import { useState } from 'react';
import {Box,AppBar, Toolbar, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {motion} from 'framer-motion/dist/framer-motion';
import {Switch,Route,Redirect,NavLink,useParams} from 'react-router-dom';


import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import colors from '../utils/colors';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

const useStyles = makeStyles({
    appbar:{
        backgroundColor:'white',
    },
    links:{
        textDecoration:'none',
    }
    
})


export default function MainLayout(){
   
    const classes = useStyles();
    const [isLogin,setIsLogin] = useState(false);
    
    
    

    return(
        <Box>
            
                <AppBar  sx={{'&.MuiAppBar-colorPrimary':{bgcolor:'black',height:'75px',fontWeight:'bold'}}}>
                    <Toolbar  className={classes.links}>
                        
                        <Box sx={{flexGrow:1,display:'flex'}}>
                            <NavLink to='/contact' className={classes.links} >
                                <Button
                                sx={{color:colors.blueGray[200],fontWeight:'bold'}}
                                component = {motion.button}
                                whileHover={{scale:1.1}}>Contact us</Button>
                            </NavLink>
                            <NavLink to='/about' className={classes.links}>
                                <Button
                                 sx={{color:colors.blueGray[200],fontWeight:'bold'}}
                                component = {motion.button}
                                whileHover={{scale:1.1}}>About</Button>
                            </NavLink>
                        </Box>
                        {!isLogin?
                        <NavLink to='/signup'>
                        <Button
                            sx={{color:colors.blueGray[200],fontWeight:'bold'}} 
                            component = {motion.button}
                            whileHover={{scale:1.1}} onClick={()=>setIsLogin(true)}>Sign Up</Button>
                        </NavLink>:<NavLink to='/'>
                        <Button 
                            sx={{color:colors.blueGray[200],fontWeight:'bold'}}
                            component = {motion.button}
                            whileHover={{scale:1.1}} onClick={()=>setIsLogin(false)}>Login
                        </Button></NavLink>  }
                         
                    </Toolbar>
                    
                </AppBar>
            
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                
                <Route exact path="/signup">
                    <SignUp/>
                </Route>
                <Route exact path="/contact">
                    <ContactUs/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/forgot-password">
                    <ForgotPassword/>
                </Route>
                <Route exact path="/reset-password/:resetToken">
                    <ResetPassword />
                </Route>
                <Redirect to="/login"/>
                </Switch>
        </Box>
    );
}