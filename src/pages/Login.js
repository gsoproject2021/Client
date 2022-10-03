import {Grid,Typography,TextField,Button,Box,Avatar} from '@mui/material';
import { NavLink } from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';
import { useDispatch} from 'react-redux';
import { login } from '../store/user-actions';

import logopic from '../images/logo1.jpeg'
import * as yup from 'yup';
import { useFormik } from 'formik';

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

const schema = yup.object().shape({
    email: yup.string().email().required('Login must be an email'),
    password: yup.string().required("password can't be empty"),
})

export default function Login(){

    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:schema,
        onSubmit: data => {
            const { email,password } = data;
            console.log(data);
            dispatch(login(email,password));
        }
    })

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
                        <form   onSubmit={formik.handleSubmit} >
                            <TextField
                            variant='filled'
                            margin="normal"
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email }
                            />
                            <TextField
                            variant='filled'
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password }
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