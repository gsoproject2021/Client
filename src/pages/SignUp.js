
import {Avatar,Box,Grid,Typography,TextField,FormControl,FormControlLabel,RadioGroup,FormLabel,Button,Radio,Checkbox} from '@mui/material';
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';
import { makeStyles } from '@mui/styles';
import logopic from "../images/logo1.jpeg";
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../store/user-actions';
import * as yup from 'yup'
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

const useStyles = makeStyles({
    root:{
        marginLeft:'30%',
        marginRight:'30%',
        marginTop:'10%',
        display:'block'
    },
    
})
let schema = yup.object().shape({
    firstName: yup.string().required("First name cant be empty"),
    lastName: yup.string().required("Last name cant be empty"),
    email: yup.string().email().required(),
    gender: yup.string().required("you must select to gender"),
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"Password must contain a-z,A-Z,0-9 chars").min(8,"Password Length must be 8-16 chars").max(16,"Password Length must be 8-16 chars"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null]).required("passwords not equal try again"),
    birthday: yup.date()
                 .required()
                 .test("birthday", "You must be 18 or older", function(birthdate) {
                    const cutoff = new Date();
                    cutoff.setFullYear(cutoff.getFullYear() - 18);      
                    return birthdate <= cutoff;
                }),
    isAdvertiser: yup.boolean(),
    address: yup.string().when('isAdvertiser',{
        is: true,
        then: yup.string().required('You must enter address')
    }),
    phone: yup.string().when('isAdvertiser',{
        is: true,
        then: yup.string().required('You must enter phone number').min(9).max(10)
    })
});


export default function SignUp(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            password: "",
            confirmPassword: "",
            isAdvertiser: false,
            address: "",
            phone: "",
            birthday: ""
        },
        validationSchema: schema,
        onSubmit: data => {
            //  console.log(JSON.stringify(data));
            dispatch(signup(data))

        }
    })

    

    

    return(
        <AnimatePresence exitBeforeEnter>
            <Box className={classes.root}
            sx={{width:'30%',mx:'auto',my:'8%',}}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit" >
                <Avatar sx={{width:'100%',height:130,mb:4,mt:-8,alignContent:'center'}} variant="square" src={logopic} />
                <Typography align="center" variant="h3" gutterBottom>Sign Up</Typography>
                     
                <form onSubmit={formik.handleSubmit} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                             fullWidth
                             label="First name" 
                             name="firstName"
                             value={formik.values.firstName}
                             onChange={formik.handleChange}
                             error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                             helperText={formik.touched.firstName && formik.errors.firstName } />
                            
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                             fullWidth 
                             label="Last name" 
                             name="lastName"
                             value={formik.values.lastName}
                             onChange={formik.handleChange}
                             error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                             helperText={formik.touched.lastName && formik.errors.lastName }/>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <FormControl  >
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup row className="">
                                    <FormControlLabel onChange={formik.handleChange} name="gender" value="male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel onChange={formik.handleChange} name="gender" value="Female" control={<Radio/>} label="Female"/>
                                </RadioGroup>
                                {formik.touched.gender &&
                                 formik.errors.gender && 
                                 <Typography sx={{fontSize:'0.75rem',ml:1}} variant='body1' color="error.main" >You must select gender</Typography>}
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                             type="date"
                             fullWidth 
                             name="birthday"
                             value={formik.values.birthday}
                             onChange={formik.handleChange}
                             error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                             helperText={formik.touched.birthday && formik.errors.birthday }/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                             fullWidth 
                             label="Password" 
                             name="password" 
                             type="password"
                             value={formik.values.password}
                             onChange={formik.handleChange}
                             error={formik.touched.password && Boolean(formik.errors.password)}
                             helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField 
                             fullWidth 
                             label="Confirm Password" 
                             name="confirmPassword" 
                             type="password"
                             value={formik.values.confirmPassword}
                             onChange={formik.handleChange}
                             error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                             helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}/>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                             fullWidth 
                             label="Email" 
                             name="email"
                             value={formik.values.email}
                             onChange={formik.handleChange}
                             error={formik.touched.email && Boolean(formik.errors.email)}
                             helperText={formik.touched.email && formik.errors.email }/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel sx={{mx:'auto',my:'auto'}}
                                name="isAdvertiser"
                                label="isAdvertiser?"
                                control={<Checkbox onChange={formik.handleChange} />}
                            />
                        </Grid>
                        
                        {formik.values.isAdvertiser ? <Fragment> <Grid item xs={12} >
                            <TextField 
                             fullWidth 
                             label="Address" 
                             name="address"
                             onChange={formik.handleChange}
                             error={formik.touched.address && Boolean(formik.errors.address)}
                             helperText={formik.touched.address && formik.errors.address }/>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField 
                             fullWidth 
                             label="Phone" 
                             name="phone"
                             onChange={formik.handleChange}
                             error={formik.touched.phone && Boolean(formik.errors.phone)}
                             helperText={formik.touched.phone && formik.errors.phone }/>
                        </Grid></Fragment> : null}
                        
                        <Grid item xs={12} sx={{mx:12,mt:4}}>
                            <Button fullWidth size="large" variant='contained'  color="success" type="submit">Sign Up</Button>
                        </Grid>
                           
                    </Grid>
                </form>
            </Box>
            
        </AnimatePresence>
    );
}