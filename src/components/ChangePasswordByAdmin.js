import {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch,useSelector } from 'react-redux';
import { Box, TextField} from '@mui/material';
import * as yup from 'yup'
import { useFormik } from 'formik';
import { changePasswordByAdmin,blockUser,deleteUser } from '../store/admin-actions'
import { Block, Delete } from "@mui/icons-material";

let schema = yup.object().shape({
    password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,"Password must contain a-z,A-Z,0-9 chars").min(8,"Password Length must be 8-16 chars").max(16,"Password Length must be 8-16 chars"),
    confirmPassword: yup.string().oneOf([yup.ref("password"),null]).required("passwords not equal try again"),
})

export default function ChangePasswordByAdmin() {
  const token = useSelector(state => state.user.token);
  const userId = useSelector(state => state.admin.managedUser.userId)
  const user = useSelector(state => state.admin.managedUser);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues:{
        password: "",
        confirmPassword: ""
    },
    validationSchema: schema,
    onSubmit: data => {
      console.log(data)
        dispatch(changePasswordByAdmin(token,data,userId));
        setOpen(false)
    }
  })

  const handleClickOpen = () => {
    setOpen(true);
  };
  const deleteUserAccount = () => {
    dispatch(deleteUser(token,userId))
}

const blockUserAccount = () =>{
    dispatch(blockUser(token,userId,!user.isBlocked))
}

  return (
    <Box sx={{py:4}} >
      <Button size="small" variant='contained' onClick={handleClickOpen}>
        Change password
      </Button>
      <Button sx={{mx:1}} size="small" onClick={deleteUserAccount} variant="contained" color="error" startIcon={<Delete/>}>
        Delete
      </Button>
      <Button sx={{mx:1}} size="small" onClick={blockUserAccount}  variant="contained" color="warning" startIcon={<Block/>}>
        {user.isBlocked ? "Unblock" : "Block"}
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="change-password-by-admin-dialog"
        aria-describedby="change-password-dialog-description"
      >
        <DialogTitle id="change-password-by-admin-dialog">
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
    </Box>
  );
}
