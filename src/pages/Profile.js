import {  useState } from 'react';
import {Box,Typography,Grid,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Button} from '@mui/material';
import UserPic from '../components/UserPic';
import Logo from '../components/Logo';
import {  green, indigo } from '@mui/material/colors';
import NewTextField from '../components/NewTextField';
import * as yup from 'yup';
import { useFormik } from 'formik'
import ChangePassword from '../components/ChangePassword';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../store/user-actions';

let schema = yup.object().shape({
    firstName: yup.string().required("First name cant be empty"),
    lastName: yup.string().required("Last name cant be empty"),
    email: yup.string().email().required(),
    birthday: yup.date()
                 .required()
                 .test("birthday", "You must be 18 or older", function(birthdate) {
                    const cutoff = new Date();
                    cutoff.setFullYear(cutoff.getFullYear() - 18);      
                    return birthdate <= cutoff;
                }),
});


export default function Profile({userDetails}){
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token)
    const {firstName,lastName,email,birthday} = userDetails;
    const formik = useFormik({
        initialValues: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthday: birthday
            
        },
        validationSchema: schema,
        onSubmit: data => {
            console.log(JSON.stringify(data));
            dispatch(updateUser(data,token))
        },
        
    })


    
    return(
            
              <Box sx={{ height:'100vh', width:'40%', mx: 'auto',px:10,color:'black'}}>
                <form onSubmit={formik.handleSubmit} >
                    <Grid>
                        <Box sx={{width:'50%',px:'25%'}}>
                            <Logo/>
                        </Box>
                        <Box sx={{display:'flex'}}>
                            <UserPic/>
                            <Typography sx={{my:8,mx:'22%'}} variant="h4" align='center'>{firstName} {lastName} </Typography>
                            <ChangePassword/>
                        </Box>
                    
                    <Grid sx={{ display: "flex", my: 2 }}>
                        <NewTextField
                        
                        sx={{ mr: 1 }}
                        fullWidth
                        label="First name"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <NewTextField
                        sx={{ ml: 1 }}
                        fullWidth
                        label="Last name"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lasttName}
                        />
                    </Grid>
                    {/* <Grid
                        sx={{ display: "flex", pl: 2 }}
                    >
                        <FormControl sx={{alignContent:"center"}}>
                        <FormLabel sx={{ display: "flex" , color:'black'}}>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="gender-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                            sx={{color:'black'}}
                            value="female"
                            control={<Radio />}
                            label="Female"
                            />
                            <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                            />
                        </RadioGroup>
                        </FormControl>
                        {/* <FormControlLabel
                        control={<Checkbox  />}
                        label="is Advertiser?"
                        /> */}
                    {/* </Grid> */} 
            
                    <Grid sx={{ my: 2,display:'flex' }}>
                        <NewTextField 
                         sx={{mr:1}}
                         fullWidth 
                         label="Email" 
                         name="email" 
                         value={formik.values.email}
                         onChange={formik.handleChange}
                         error={formik.touched.email && Boolean(formik.errors.email)}
                         helperText={formik.touched.email && formik.errors.email}
                          />
                         <NewTextField 
                             sx={{ml:1}} 
                             type="date"
                             fullWidth 
                             name="birthday"
                             value={formik.values.birthday}
                             onChange={formik.handleChange}
                             error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                             helperText={formik.touched.birthday && formik.errors.birthday }/>
                    </Grid>
                    {/* <Grid sx={{ display: "flex", my: 2 }}>
                        <NewTextField
                        sx={{ mr: 1 }}
                        fullWidth
                        label="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        />
                        <NewTextField
                        sx={{ ml: 1 }}
                        fullWidth
                        label="Confirm password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                    </Grid> */}
                  </Grid>
                    <Box sx={{px:'35%',mt:10}}>
                        <Button type='submit' sx={{bgcolor:indigo[700]}} fullWidth variant="contained">Update details</Button>
                    </Box>
                </form> 
              </Box>
            
            
    );
}












// <Box sx={{paddingLeft:20,paddingRight:20,paddingTop:15}}>
        //     <Paper sx={{ height:600, mx:3,py:3,px:10}}>
        //      <Typography sx={{mb:3}} variant="h4" align="center">{`${firstName} ${lastName}`}</Typography>
        //         <form>
        //             <Grid container spacing={3} className="px-8">
        //                 <Grid item xs={12} sm={6} >
        //                     <NewTextField variant="filled" size="medium" name="firstname" label='First name' fullWidth value={firstName} onChange={(event) => setFirstName(event.target.value) }/>
        //                 </Grid>
        //                 <Grid item xs={12} sm={6} >
        //                     <NewTextField variant="filled" name="lastname" label='Last name' fullWidth value={lastName}/>
        //                 </Grid>
        //                 <Grid item xs={12} sm={6}>
        //                     <FormControl className="flex" >
        //                             <FormLabel>Gender</FormLabel>
        //                             <RadioGroup row className="" onChange={(event) => setGender(event.target.value)} >
        //                                 <FormControlLabel value="male"  control={<Radio checked={gender === 'male'}/>} label="Male"/>
        //                                 <FormControlLabel value="female" control={<Radio checked={gender === 'female'} />} label="Female"/>
        //                             </RadioGroup>
        //                         </FormControl>
        //                 </Grid>
        //                 <Grid item xs={12} sm={6}>
        //                     <NewTextField type="date" variant="filled" name="birthday" fullWidth value={birthday}/>
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <NewTextField variant="filled" name="email" label="Email" fullWidth value={email}/>
        //                 </Grid>
                        
        //                 <Grid item xs={12}>
        //                     <NewTextField variant="filled" name="password" label="Password" fullWidth value={password}/>
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <NewTextField variant="filled" name="password" label="Confirm Password" fullWidth value={confPassword}/>
        //                 </Grid>
        
        //                 <Grid item xs={12}>
        //                     <FormControlLabel control={<Checkbox checked={isAdvertiser} onChange={() => setIsAdvertiser(!isAdvertiser)}  name="isadvertiser" />} label="Is advertiser?" />
        //                     <FormControlLabel control={<Checkbox checked={isBlocked} onChange={() => setIsBlocked(!isBlocked)}  name="blocked" />} label="Blocked" />
        //                     <FormControlLabel control={<Checkbox checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} name="Admin" />} label="Admin" />
        //                 </Grid>
        //                 <Grid  item xs={12} sx={{}} >
        //                     <Button variant='contained' color='success' sx={{mx:'35%',width:'30%'}}  type="submit">Update detail</Button>
        //                 </Grid>
        //             </Grid>
        //         </form> 
        //     </Paper>
        // </Box>