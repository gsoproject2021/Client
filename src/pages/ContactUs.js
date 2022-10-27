import {Box,Typography,Button} from "@mui/material";
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';
import Logo from "../components/Logo";
import NewTextField from "../components/NewTextField";
import * as yup from "yup";
import { useFormik } from "formik";
import { contactUs } from "../store/user-actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
const containerVariants = {
    hidden:{
        opacity:0,
        x:-2000
    },
    visible:{
        opacity:1,
        x:0,
        
    },
    exit:{
        opacity:0,
        x:2000
    }
}

let schema = yup.object().shape({
    subject: yup.string().required("Subject can't be empty"),
    email: yup.string().email().required(),
    content: yup.string().required()
})

export default function ContactUs(){
    const history = useHistory()
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            subject:"",
            email: "",
            content: ""
        },
        validationSchema: schema,
        onSubmit: data => {
            dispatch(contactUs(data));
            history.push("/")
        }
    });

    return(
        <AnimatePresence exitBeforeEnter>
            <Box 
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            sx={{height:'100vh',mx:'20%'}}  >
                <Box sx={{ width:'50%',px:'25%'}}>
                    <Logo/>
                </Box>
                <form onSubmit={formik.handleSubmit}>
                    <Typography align="center" variant="h3" sx={{mb:4}}>Contact us</Typography>
                    <NewTextField fullWidth
                                    label="Subject" 
                                    sx={{mb:3}}
                                    name="subject"
                                    value={formik.values.subject}
                                    onChange={formik.handleChange}
                                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                                    helperText={formik.touched.subject && formik.errors.subject } />
                    <NewTextField fullWidth 
                                    label="Email" 
                                    sx={{mb:3}}
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email } 
                        />
                    <NewTextField fullWidth 
                                    placeholder="Type a messeage" 
                                    sx={{mb:2}} 
                                    multiline 
                                    minRows={10}
                                    name="content" 
                                    value={formik.values.content}
                                    onChange={formik.handleChange}
                                    error={formik.touched.content && Boolean(formik.errors.content)}
                                    helperText={formik.touched.content && formik.errors.content }/>
                    <Box sx={{px:'35%',pt:'2%'}}>
                        <Button type="submit" variant="contained" size="large" fullWidth>Send</Button>
                    </Box>
                </form>
            </Box>
        </AnimatePresence>
    );
}