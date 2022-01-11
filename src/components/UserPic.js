import { Avatar } from "@mui/material";
import pic from '../images/vitali.jpg';

export default function UserPic(){
    return(
        <Avatar src={pic} sx={{width:125,height:125,my:2}}>

        </Avatar>
    )
}