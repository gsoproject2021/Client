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

export const signup = (data) => {
    const userData = data;
    return async (dispatch) => {
        const userSignup = async () => {
            
            const response = await axios.post('http://localhost:4000/signup',userData);
            if(!response){
                throw new Error("something went wrong");
            }
            const data = response.data;

            return data;
        }
        try{
            const user = await userSignup();
            console.log(user)
            dispatch(userActions.setUser(user));
        }catch(err){
            console.log(err);
        }
    }
}

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

export const updateUser = (userData,token) => {
    return async (dispatch) => {
        const update = async () => {
            const response = await axios.patch('http://localhost:4000/user',
                                                {userData},
                                                {headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("something went wrong cant update user")
            }
            const data = response.data;
            return data;
        }
        try{
        const data = await update();
        dispatch(userActions.setUser(data));
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

export const changePassword = (token,data) => {
    let {password,confirmPassword} = data;
    return async (dispatch) => {
        const changePass = async () => {
            const response = await axios.patch("http://localhost:4000/changePassword",{password,confirmPassword},{headers:{Authorization:`Bearer ${token}`}});

            if(!response){
                throw new Error("something went wrong can't change password");
            }
            
            const data = response.data;
            return data;
        }

        const msg = await changePass();
    }
}

