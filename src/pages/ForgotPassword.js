import {Box, TextField, Typography,Card, Button} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory} from "react-router-dom"
import { forgotPassword } from '../store/user-actions'
let schema = yup.object().shape({
    email: yup.string().email().required("You can't enter value except email")
})

export default function ForgotPassword(){
    const history = useHistory()
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            email:""
        },
        validationSchema:schema,
        onSubmit: data => {

            dispatch(forgotPassword(data));
            history.push("/");
        }
    })
    return(
        <Box sx={{mt:'5%',px:'40%',py:'3%'}}>
            <Typography sx={{my:5}} variant="h4" align='center'>Forgot Password</Typography>
            <Card sx={{px:'10%',py:'5%'}}>
                <form onSubmit={formik.handleSubmit}>
                    
                    <Typography sx={{my:3}} variant="subtitle1" align='center'>Enter your registration email</Typography>
                    <TextField sx={{my:3}} fullWidth 
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email } 
                            placeholder="email"
                            />
                    <Button type="submit" fullWidth variant="contained" color="info">Reset</Button>
                </form>
            </Card>
            
        </Box>
    );
}