import {Avatar, ListItemIcon, MenuItem, MenuList, StylesProvider, Typography} from '@material-ui/core';
import { ContactSupportOutlined, ExitToAppOutlined, HomeOutlined, InfoOutlined, SettingsOutlined } from '@material-ui/icons';
import logo from '../../images/logo3.png';
// import '../styles/menu.css';
function Menu(){
    return(
        <div className="w-full  px-auto  ">
            <StylesProvider injectFirst>
                <MenuList className="space-y-4  px-12 rounded-2xl gap-4 mb-8" variant="menu">
                    <MenuItem className="text-gray-100 hover:bg-gray-100 hover:text-gray-800">
                        <ListItemIcon>
                            <HomeOutlined className="text-gray-100 hover:bg-gray-100 hover:text-gray-800"/>
                        </ListItemIcon>
                        <Typography variant="h5">Home</Typography>
                    </MenuItem>
                    <MenuItem className="text-gray-100 hover:bg-gray-100 hover:text-gray-800">
                        <ListItemIcon>
                            <SettingsOutlined className="text-gray-100 hover:bg-gray-100 hover:text-gray-800"/>
                        </ListItemIcon>
                        <Typography variant="h5">Settings</Typography>
                    </MenuItem>
                    <MenuItem className="text-gray-100 hover:bg-gray-100 hover:text-gray-800">
                        <ListItemIcon>
                        <ContactSupportOutlined className="text-gray-100 hover:bg-gray-100 hover:text-gray-800"/>
                        </ListItemIcon>
                        <Typography variant="h5">Contact us</Typography>
                    </MenuItem>
                    <MenuItem className="text-gray-100 hover:bg-gray-100 hover:text-gray-800">
                        <ListItemIcon>
                        <InfoOutlined className="text-gray-100 hover:bg-gray-100 hover:text-gray-800"/>
                        </ListItemIcon >
                        <Typography variant="h5">About</Typography>
                    </MenuItem>
                </MenuList>   
                
            </StylesProvider>
        </div>
    );
}

export default Menu;