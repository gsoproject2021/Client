import { useState } from 'react';
import {Box,AppBar, Toolbar,Avatar, Typography, Button} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {motion} from 'framer-motion/dist/framer-motion';
import {Switch,Route,Link,Redirect} from 'react-router-dom';
import logopic from '../images/logo1.jpeg';
import About from '../pages/About';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PasswordReset from '../pages/PasswordReset';
import Layout from './Layout';


const useStyles = makeStyles({
    appbar:{
        backgroundColor:'white',
    },
    
})


export default function MainLayout(){
    const classes = useStyles();
    const [isLogin,setIsLogin] = useState(false)
    return(
        <Box>
            
                <AppBar sx={{'&.MuiAppBar-colorPrimary':{bgcolor:'white'}}}>
                    <Toolbar >
                        <Avatar sx={{width:250,height:80}} variant="square" src={logopic} />
                        <Box sx={{flexGrow:1,display:'flex'}}>
                            <Link to='/contact'>
                                <Button 
                                component = {motion.button}
                                whileHover={{scale:1.1}}>Contact us</Button>
                            </Link>
                            <Link to='/about'>
                                <Button 
                                component = {motion.button}
                                whileHover={{scale:1.1}}>About</Button>
                            </Link>
                        </Box>
                        {!isLogin?
                        <Link to='/signup'>
                        <Button 
                        component = {motion.button}
                        whileHover={{scale:1.1}} onClick={()=>setIsLogin(true)}>Sign Up</Button>
                        </Link>:<Link to='/'>
                        <Button 
                        component = {motion.button}
                        whileHover={{scale:1.1}} onClick={()=>setIsLogin(false)}>Login
                        </Button></Link>  }
                         
                    </Toolbar>
                    
                </AppBar>
            
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Redirect from="/login" to="/main"/>
                <Route exact path="/signup">
                    <SignUp/>
                </Route>
                <Route exact path="/contact">
                    <ContactUs/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/password-reset">
                    <PasswordReset/>
                </Route>
                
                </Switch>
        </Box>
    );
}