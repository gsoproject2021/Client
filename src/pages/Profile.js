import {  useState } from 'react';
import {Box,Typography,Grid,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Button,Checkbox} from '@mui/material';




export default function Profile({userDetails}){
    const {firstName,lastName,email,gender} = userDetails;
    // const user = useSelector(state => state.admin.managedUser);
    // gender,isAdmin,isAdvertiser
    // console.log(user);
    const [first,setFirst] = useState(firstName);
    const [last,setLast] = useState(lastName);
    const [mail,setMail] = useState(email);
    const [userGender,setUserGender] = useState(gender);
    
    // const [userGender,setUserGender] = useState(gender);
    // const [admin,setAdmin] = useState(isAdmin);
    // const [advertiser,setAdvertiser] = useState(isAdvertiser);

    // const [email,setEmail] = useState(user.email);
    // const [birthday,setBirthday] = useState(user.birthday);
    // const [gender,setGender] = useState(user.gender);
    // const [isAdmin,setIsAdmin] = useState(user.isAdmin);
    // const [isAdvertiser,setIsAdvertiser] = useState(user.isAdvertiser);
    // const [isBlocked,setIsBlocked] = useState(user.isBlocked);
    // const [password,setPassword] = useState('');
    // const [confPassword,setConfPassword] = useState('') 

    // useEffect(()=>{
    //     setFirstName(user.firstName);
    //     setLastName(user.lastName);
    //     setEmail(user.email);
    //     setGender(user.gender)
    // },[user]);
    // console.log(user);
    // // {
    //     userId: result.UserID,
    //     email: result.Email,
    //     firstName: result.FirstName,
    //     lastName: result.LastName,
    //     birthday: result.Birthday,
    //     isAdvertiser: result.IsAdvertiser,
    //     isAdmin: result.IsAdmin,
    //     IsBlocked: result.IsBlocked,
    //     gender: result.Gender,
    //     phone: result.Phone
    // }

    return(
            
              <Box sx={{ width:'50%', mx: 'auto', my: 8,px:10,py:4}}>
                <form>
                    <Grid>
                    <Typography sx={{my:8}} variant="h3" align='center'>{first} {last} </Typography>
                    <Grid sx={{ display: "flex", my: 2 }}>
                        <TextField
                        sx={{ mr: 1 }}
                        fullWidth
                        label="First name"
                        name="firstName"
                        value={first}
                        />
                        <TextField
                        sx={{ ml: 1 }}
                        fullWidth
                        label="Last name"
                        name="lastName"
                        value={last}
                        />
                    </Grid>
                    <Grid
                        sx={{ display: "flex", pl: 2 }}
                    >
                        <FormControl sx={{alignContent:"center"}}>
                        <FormLabel sx={{ display: "flex" }}>Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="gender-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
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
                    </Grid>
            
                    <Grid sx={{ my: 2 }}>
                        <TextField fullWidth label="Email" name="email" value={mail} />
                    </Grid>
                    <Grid sx={{ display: "flex", my: 2 }}>
                        <TextField
                        sx={{ mr: 1 }}
                        fullWidth
                        label="Password"
                        name="password"
                        />
                        <TextField
                        sx={{ ml: 1 }}
                        fullWidth
                        label="Confirm password"
                        name="password"
                        />
                    </Grid>
                  </Grid>
                </form>
                <Box sx={{px:'35%',mt:15}}>
                    <Button  fullWidth variant="contained">Update details</Button>
                </Box>
                
              </Box>
            
    );
}












// <Box sx={{paddingLeft:20,paddingRight:20,paddingTop:15}}>
        //     <Paper sx={{ height:600, mx:3,py:3,px:10}}>
        //      <Typography sx={{mb:3}} variant="h4" align="center">{`${firstName} ${lastName}`}</Typography>
        //         <form>
        //             <Grid container spacing={3} className="px-8">
        //                 <Grid item xs={12} sm={6} >
        //                     <TextField variant="filled" size="medium" name="firstname" label='First name' fullWidth value={firstName} onChange={(event) => setFirstName(event.target.value) }/>
        //                 </Grid>
        //                 <Grid item xs={12} sm={6} >
        //                     <TextField variant="filled" name="lastname" label='Last name' fullWidth value={lastName}/>
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
        //                     <TextField type="date" variant="filled" name="birthday" fullWidth value={birthday}/>
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <TextField variant="filled" name="email" label="Email" fullWidth value={email}/>
        //                 </Grid>
                        
        //                 <Grid item xs={12}>
        //                     <TextField variant="filled" name="password" label="Password" fullWidth value={password}/>
        //                 </Grid>
        //                 <Grid item xs={12}>
        //                     <TextField variant="filled" name="password" label="Confirm Password" fullWidth value={confPassword}/>
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