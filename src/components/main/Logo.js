import { Avatar } from '@material-ui/core';
import logo from '../../images/logo3.png';




function Logo(){
    return(
        <div className="mb-18 bg-gray-100 bg-gray-800">
            <img src={logo} width="250" className="mx-auto pt-4"/>
            {/* <Avatar alt="Vitali Kozokin" src="../images/vitali.jpg"/> */}
        </div>
    );
}
export default Logo;