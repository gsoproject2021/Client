import axios from "axios";
import { userActions } from "./user-slice";

export const login = (email,password) => {
    
    return async (dispatch) => {
        const userLogin = async () => {
            const response = await axios.post(`http://localhost:4000/login/`,{email:email,password:password});
            if(!response){
                throw new Error('something went wrong');
            }
            const data = response.data;
            
            return data;
        }
        try{
            const user = await userLogin();
            dispatch(userActions.setUser(user));
        }catch(err){
            console.log(err);
        }
        

    }
};



export const autoLogin = (data) => {
    return async (dispatch) => {
        dispatch(userActions.setUser(data));
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch(userActions.logout());
    }
}

export const updateUser = (userData,picture,token,imageType) => {
    return async (dispatch) => {
        const update = async () => {
            const formData = new FormData();
            formData.append('firstName',userData.firstName);
            formData.append('lastName',userData.lastName);
            formData.append('firstName',userData.gender);
            formData.append('firstName',userData.email);
            formData.append('image',picture);
            formData.append('imageType',imageType);
            
            const response = await axios.put('http://localhost:4000/user',{formData},{headers:{Authorization:`Bearer ${token}`}})

            const data = response.data;
            return data;
        }
        try{
        const user = await update();
        console.log(user);
        }catch(err){
            console.log(err)
        }
    }
}

export const uploadPicture = (token,picture) => {
    
    return async (dispatch) => {
        const upload = async () => {
            let formData = new FormData();
            
            formData.append('image',picture,picture.name);
            
            
             const response = await axios.post('http://localhost:4000/user',formData,{headers:{Authorization:`Bearer ${token}`}});
            
             

            const data = response.data;
            return data;
        }
        try{
            const data = await upload();
            const user = {data,token};
            console.log(data);
            const temp = {};
            
            dispatch(userActions.setUser(user));
        }catch(err){
            console.log(err)
        }
        
        
    }
}