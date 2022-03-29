import {Grid,Typography,TextField,Button,FormControlLabel,Box,Checkbox,Avatar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/user-actions';
import { useState } from 'react';
import logopic from '../images/logo1.jpeg'

const containerVariants = {
    hidden:{
        opacity:0,
        x:2000
    },
    visible:{
        opacity:1,
        x:0,
        delay:5
    },
    exit:{
        opacity:0,
        x:-2000
    }
}


export default function Login(){
    
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const dispatch = useDispatch();

    const emailChangeHandler = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    }
    
    const loginHandle = (event) => {
        event.preventDefault();
        dispatch(login(email,password));
        
    }

    return(
        <AnimatePresence exitBeforeEnter>
            
            <Box sx={{mx:'auto',mt:'10%',width:'20%',backgroundColor:''}}
             component={motion.div}
             variants={containerVariants}
             initial='hidden' 
             animate='visible' 
             exit='exit' >
                 <Avatar sx={{width:'100%',height:130,mb:4,mt:-8,alignContent:'center'}} variant="square" src={logopic} />
                    <Box>
                        <Typography sx={{mb:5}}  align="center" component="h1" variant="h3">
                            Login
                        </Typography>
                        <form   onSubmit={loginHandle} >
                            <TextField
                            variant='filled'
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={emailChangeHandler}
                            />
                            <TextField
                            variant='filled'
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(event) => {setPassword(event.target.value)}}
                            />
                            <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            />
                            
                                <Button
                                sx={{px:'20%'}}
                                size="large"
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="success"
                                component = {motion.button}
                                whileHover={{scale:1.1}}
                                >
                                Sign In
                                </Button>
                            
                            
                            <Grid container>
                            <Grid item xs>
                                <NavLink to="/password-reset" style={{textDecoration:'none'}}>
                                    Forgot password?
                                </NavLink>
                            </Grid>
                            
                            </Grid>
                            
                        </form>
                    </Box>   
                </Box>
            </AnimatePresence>
        
            
                    
                
                    
                    
        
            
    );
}