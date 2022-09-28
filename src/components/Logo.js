import { Avatar } from "@mui/material";
import logoPic from '../images/logo3.png'

export default function Logo(){
    return(
        <Avatar variant="square" sx={{width:'80%',height:'15%',my:4}} src={logoPic}/>
    );
}