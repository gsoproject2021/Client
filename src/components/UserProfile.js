import { useEffect } from "react";
import { Box,Grid,Typography,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Button,Checkbox, Avatar } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { blueGrey} from "@mui/material/colors";
import NewTextField from "./NewTextField";
import * as yup from "yup";
import { useFormik } from "formik";
import ChangePasswordByAdmin from "./ChangePasswordByAdmin";
import { updateUserByAdmin } from "../store/admin-actions";


let schema = yup.object().shape({
    firstName: yup.string().required("First name cant be empty"),
    lastName: yup.string().required("Last name cant be empty"),
    email: yup.string().email().required(),
    gender: yup.string().required("you must select to gender"),
    birthday: yup.date()
                 .required()
                 .test("birthday", "You must be 18 or older", function(birthdate) {
                    const cutoff = new Date();
                    cutoff.setFullYear(cutoff.getFullYear() - 18);      
                    return birthdate <= cutoff;
                }),
    isAdvertiser: yup.boolean(),
    isAdmin: yup.boolean(),
    address: yup.string().when('isAdvertiser',{
        is: true,
        then: yup.string().required('You must enter address')
    }),
    phone: yup.string().when('isAdvertiser',{
        is: true,
        then: yup.string().required('You must enter phone number').min(9).max(10)
    })
});


export default function UserProfile(){
    const user = useSelector(state => state.admin.managedUser);
    const token = useSelector(state => state.user.token);
    const userId = user.userId;
    const dispatch = useDispatch();
    console.log(user)
    const formik = useFormik({
        initialValues:{
            firstName: user.firstName,
            lastName:user.lastName,
            email:user.email,
            phone:user.phone,
            address:user.address,
            isAdmin:user.isAdmin,
            isAdvertiser:user.isAdvertiser,
            gender:user.gender,
            birthday:user.birthday
        },
        validationSchema: schema,
        onSubmit: data => {
            dispatch(updateUserByAdmin(token,{...data,userId}))
        }
    })

    useEffect(() => {
        formik.setValues({
            firstName: user.firstName,
            lastName:user.lastName,
            email:user.email,
            phone:user.phone,
            address:user.address,
            isAdmin:user.isAdmin,
            isAdvertiser:user.isAdvertiser,
            gender:user.gender,
            birthday:user.birthday
        })
    },[user])
    
   

    return(

            <Box sx={{ width:'50%', mx: 'auto',py:3,px:10}}>
                <Box sx={{justifyContent:'space-between',display:'flex'}}>
                    <Avatar sx={{my:2,width:120,height:120}} src={user.image}/>
                    <Box sx={{py:4}}>
                        <ChangePasswordByAdmin/>
                    </Box>
                </Box>
                
                <form onSubmit={formik.handleSubmit}>
                    <Grid>
                    <Typography sx={{my:4,color:blueGrey[900]}} variant="h3" align='center'>{formik.values.firstName} {formik.values.lastName} </Typography>
                    <Grid sx={{ display: "flex", my: 2 }}>
                        <NewTextField
                        InputLabelProps={{ shrink: true }}
                        sx={{ mr: 1 }}
                        fullWidth
                        label="First name"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName }
                        />
                        <NewTextField
                        InputLabelProps={{ shrink: true }}
                        sx={{ ml: 1 }}
                        fullWidth
                        label="Last name"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lasttName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName }
                        />
                    </Grid>
                    <Grid sx={{ display: "flex",justifyContent:'space-between', pl: 2 }}>
                        <FormControl  >
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup row className="">
                                    <FormControlLabel onChange={formik.handleChange} 
                                                      name="gender" value="male" 
                                                      control={<Radio checked={formik.values.gender === "male" ? true:false} />} 
                                                      label="Male"/>
                                    <FormControlLabel onChange={formik.handleChange} 
                                                      name="gender" value="female" 
                                                      control={<Radio checked={formik.values.gender === "female" ? true:false} />} 
                                                      label="Female"/>
                                </RadioGroup>
                                {formik.touched.gender &&
                                 formik.errors.gender && 
                                 <Typography sx={{fontSize:'0.75rem',ml:1}} variant='body1' color="error.main" >You must select gender</Typography>}
                            </FormControl>
                        <Grid sx={{display:'flex'}} item xs={12} sm={6}>
                            <FormControlLabel sx={{mx:'auto',my:'auto'}}
                                name="isAdmin"
                                label="Is admin?"
                                control={<Checkbox  onChange={formik.handleChange} checked={formik.values.isAdmin===true?true:false}  />}
                                
                            />
                            <FormControlLabel sx={{mx:'auto',my:'auto'}}
                                name="isAdvertiser"
                                label="Is advertiser?"
                                control={<Checkbox checked={formik.values.isAdvertiser===true?true:false} />}
                                checked={formik.values.isAdvertiser}
                                onChange={formik.handleChange}
                            />
                        </Grid>
                    </Grid>
            
                    <Grid sx={{ display:'flex', my: 2 }}>
                        <NewTextField fullWidth 
                                      sx={{mr:1}}
                                      label="Email" 
                                      name="email" 
                                      InputLabelProps={{ shrink: true }}
                                      value={formik.values.email}
                                      onChange={formik.handleChange}
                                      error={formik.touched.email && Boolean(formik.errors.email)}
                                      helperText={formik.touched.email && formik.errors.email } />
                        <NewTextField 
                             sx={{ml:1}} 
                             type="date"
                             fullWidth 
                             name="birthday"
                             InputLabelProps={{ shrink: true }}
                             value={formik.values.birthday}
                             onChange={formik.handleChange}
                             error={formik.touched.birthday && Boolean(formik.errors.birthday)}
                             helperText={formik.touched.birthday && formik.errors.birthday }
                             />
                    </Grid>
                    <Grid sx={{ my: 2 }}>
                        <NewTextField fullWidth 
                                      label="Phone" 
                                      name="phone"  
                                      InputLabelProps={{ shrink: true }}
                                      value={formik.values.phone}
                                      onChange={formik.handleChange}
                                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                                      helperText={formik.touched.phone && formik.errors.phone } />
                    </Grid>
                    <Grid sx={{ my: 2 }}>
                        <NewTextField fullWidth 
                                      label="Address" 
                                      name="address"  
                                      InputLabelProps={{ shrink: true }}
                                      value={formik.values.address}
                                      onChange={formik.handleChange}
                                      error={formik.touched.address && Boolean(formik.errors.address)}
                                      helperText={formik.touched.address && formik.errors.address } />
                    </Grid>
                    
                  </Grid>
                  <Box sx={{px:'35%',mt:7}}>
                    <Button type="submit" fullWidth variant="contained">Update details</Button>
                  </Box>
                </form>
                
                
            </Box>

    )
}