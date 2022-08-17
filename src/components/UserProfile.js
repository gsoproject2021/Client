import { useEffect, useState } from "react";
import { Box,Grid,Typography,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Button,Checkbox, Avatar } from "@mui/material"
import { useSelector } from "react-redux";
import { Block, Delete } from "@mui/icons-material";

export default function UserProfile(){
    const user = useSelector(state => state.admin.managedUser);
    const {firstName,lastName,gender,email} = user;
    const [first,setFirst] = useState(firstName);
    const [last,setLast] = useState(lastName);
    const [mail,setEmail] = useState(email);
    const [userGender,setUserGender] = useState(gender);
    useEffect(() => {
        setFirst(firstName);
        setLast(lastName);
        setEmail(email);
        setUserGender(userGender);
    },[user]);
    
    return(

            <Box sx={{ width:'50%', mx: 'auto', my: 4,px:10,py:4}}>
                <Box sx={{justifyContent:'space-between',display:'flex'}}>
                    <Avatar sx={{my:2,width:120,height:120}}></Avatar>
                    <Box sx={{py:4}}>
                        <Button  variant="contained" color="error" startIcon={<Delete/>}>Delete</Button>
                        <Button sx={{mx:2}} variant="contained" color="warning" startIcon={<Block/>}>Block</Button>
                    </Box>
                </Box>
                
                <form>
                    <Grid>
                    <Typography sx={{my:4}} variant="h3" align='center'>{first} {last} </Typography>
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

    )
}