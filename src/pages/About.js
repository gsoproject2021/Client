import {Box, CardMedia,Card, CardContent, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {motion} from 'framer-motion/dist/framer-motion';

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


const useStyle = makeStyles({
    title:{
        marginTop:'7.5%',
        marginLeft:'15%',
        marginRight:'15%'
    },
    cards:{
        display:'flex',
        justifyContent:'space-between',   
        marginLeft:'10%',
        marginRight:'10%'
    },
    card:{
        margin:'5%'
    }
})

export default function About(){
    const classes = useStyle();
    return(

        <Box component={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit" >
            <Box className={classes.title}>
                <Typography align="center" variant="h3" gutterBottom >About GSO</Typography>
                <Typography align="center" variant="h6">sdfsdfsdfdddddddddddddddddddddddddddddddddd
                sdfsdfsdfddddddddddddddddddddddddddddddddddfdgdfgdfgdfg
                sdfsdfsdfddddddddddddddddddddddddddddddddddfdag
                sdfsdfsdfdddddddddddddddddddddddddddddddddddfagfag
                sdfsdfsdfdddddddddddddddddddddddddddddddddddfgdfg
                sdfsdfsdfdddddddddddddddddddddddddddddddddddfgdfg
                sdfsdfsdfdddddddddddddddddddddddddddddddddddfgdfgdfgdfg</Typography>
            </Box>
            <Box className={classes.cards} >
                <Card className={classes.card}>
                    <CardMedia/>
                    <CardContent>
                        <Typography variant="h5"> Vitali Kozokin </Typography>
                        <Typography variant="subtitle1" >sdfsdfsdf
                        sdfsdfsdfsd
                        fsd
                        fsd
                        f
                        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdfsdfsdf
                        sdfsdfsdfsd
                        fsd
                        fsd
                        f
                        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdfsdfsdf
                        sdfsdfsdfsd
                        fsd
                        fsd
                        f
                        sdfsdfsdfsdfsdfsdfsdfsdfsdfsd</Typography>
                    </CardContent>
                    
                </Card>
                <Card className={classes.card}>
                    <CardMedia/>
                    <CardContent>
                        <Typography variant="h5"> Daniel Orkabi </Typography>
                        <Typography variant="subtitle1" >sdfsdfsdf
                        sdfsdfsdfsd
                        fsd
                        fsd
                        f
                        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdfsdfsdf
                        sdfsdfsdfsd
                        fsd
                        fsd
                        f
                        sdfsdfsdfsdfsdfsdfsdfsdfsdfsdsdfsdfsdf
                        sdfsdfsdfsd
                        fsd
                        fsd
                        f
                        sdfsdfsdfsdfsdfsdfsdfsdfsdfsd</Typography>
                    </CardContent>
                    
                </Card>
            </Box>
            
        </Box>
    );
}