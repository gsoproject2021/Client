import { Box, Button, Paper, Typography,TextField } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import NewTextField from "../components/NewTextField";
import { resetPassword } from "../store/user-actions";
import { useDispatch } from "react-redux";
import { useHistory,useParams } from "react-router-dom";
let schema = yup.object().shape({
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"Password must contain a-z,A-Z,0-9 chars").min(8,"Password Length must be 8-16 chars").max(16,"Password Length must be 8-16 chars"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null]).required("passwords not equal try again"),
})

export default function ResetPassword(){
    let resetToken = useParams();
    let token = resetToken.resetToken;
    
    const dispatch = useDispatch()
    const history = useHistory()
    const formik = useFormik({
        initialValues:{
            password:"",
            confirmPassword:""
        },
        validationSchema:schema,
        onSubmit: data => {
            const {password} = data;
            dispatch(resetPassword({password,token}));
            history.push("/");
        }
    })
    return(
        <Box>
            <Paper sx={{mx:"40%",my:"10%",py:3,px:3}}>
                <Typography variant="h6" align="center" >Enter new password</Typography>
            <form onSubmit={formik.handleSubmit}>
            
                            <TextField 
                             sx={{my:1}}
                             fullWidth 
                             label="Password" 
                             name="password" 
                             type="password"
                             value={formik.values.password}
                             onChange={formik.handleChange}
                             error={formik.touched.password && Boolean(formik.errors.password)}
                             helperText={formik.touched.password && formik.errors.password}
                            />
                        
                            <TextField 
                             sx={{my:1}}
                             fullWidth 
                             label="Confirm Password" 
                             name="confirmPassword" 
                             type="password"
                             value={formik.values.confirmPassword}
                             onChange={formik.handleChange}
                             error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                             helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}/>
                     <Button  fullWidth variant="contained" type="submit"> reset</Button>
            </form>
            </Paper>
        </Box>
    )
}