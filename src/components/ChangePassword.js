import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch,useSelector } from 'react-redux';
import { Box, TextField } from '@mui/material';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { changePassword } from '../store/user-actions';


let schema = yup.object().shape({
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"Password must contain a-z,A-Z,0-9 chars").min(8,"Password Length must be 8-16 chars").max(16,"Password Length must be 8-16 chars"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null]).required("passwords not equal try again"),
})

export default function ChangePassword() {
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues:{
        password: "",
        confirmPassword: ""
    },
    validationSchema: schema,
    onSubmit: data => {
        dispatch(changePassword(token,data));
        setOpen(false)
    }
  })

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <Button variant='contained' onClick={handleClickOpen}>
        Change password
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="change-password-dialog"
        aria-describedby="change-password-dialog-description"
      >
        <DialogTitle id="change-password-dialog">
          Change password
        </DialogTitle>
        <DialogContent >
          
            <form onSubmit={formik.handleSubmit}>
                <TextField sx={{mx:1,my:1}} 
                             
                             label="Password" 
                             name="password" 
                             type="password"
                             value={formik.values.password}
                             onChange={formik.handleChange}
                             error={formik.touched.password && Boolean(formik.errors.password)}
                             helperText={formik.touched.password && formik.errors.password}/>
                           
                           <TextField sx={{mx:1,my:1}} 
                              
                             label="Confirm Password" 
                             name="confirmPassword" 
                             type="password"
                             value={formik.values.confirmPassword}
                             onChange={formik.handleChange}
                             error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                             helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                           />
                           <Box sx={{display:'flex',justifyContent:'space-around',px:'30%'}} >
                                <Button sx={{}} variant='contained' color='success' type="submit"  >Submit</Button>
                                <Button variant='contained' color='error' onClick={() => setOpen(false)} >Cancel</Button>
                            </Box>
                           
            </form>
            
        </DialogContent>
        
      </Dialog>
    </div>
  );
}
