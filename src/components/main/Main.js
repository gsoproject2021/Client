import { Avatar, Button, makeStyles,Grid } from "@material-ui/core";
import { ExitToAppOutlined } from "@material-ui/icons";
import { StylesProvider } from "@material-ui/styles";
import Logo from "./Logo";
import Menu from "./Menu";
import Pic from "../Pic";
import MainContent from "./MainContent";
import Profile from "../settings/Profile";
import About from "../About";
import Contact from "../Contact";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(11),
      height: theme.spacing(11),
    },
  }));


function Main(){
    const classes = useStyles();
    return(
        
           <div className=" w-full grid grid-cols-12 bg-gray-600">
                <StylesProvider injectFirst>
                    <div className="  col-start-1 col-end-3 border-r-2 border-gray-500 border-gray-100 bg-gray-800" >
                        <Logo />
                        <Pic/>
                        <Menu />
                        <Button className="hover:text-green-600 hover:bg-gray-50 w-48 bg-red-500 text-white mt-80 mx-16 " variant="contained" size="large" startIcon={<ExitToAppOutlined/>} >Log out</Button>
                    </div>
                </StylesProvider>
               <div className="col-start-3 col-end-13  px-8 py-14">
                   
                        <MainContent/>
                   
                    
               </div>
           </div>
        
    );
}

export default Main;