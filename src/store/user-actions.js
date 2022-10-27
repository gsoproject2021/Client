import axios from "axios";
import { roomsActions } from "./room-slice";
import { userActions } from "./user-slice";

export const login = (email,password) => {
    
    return async (dispatch) => {
        const userLogin = async () => {
            const response = await axios.post(`http://localhost:4000/login/`,{email:email,password:password});
            if(!response){
                dispatch(userActions.setMessage("something went wrong can't login"));
                throw new Error('something went wrong');
                
            }
            const data = response.data;
            
            return data;
        }
        try{
            const user = await userLogin();
            
            if(typeof user === 'string'){
                dispatch(userActions.setMessage(user));
            }else{
                dispatch(userActions.setUser(user));
            }
            
            
        }catch(err){
            console.log(err);
            dispatch(userActions.setMessage(err))
        }
        

    }
};

export const signup = (data) => {
    const userData = data;
    return async (dispatch) => {
        const userSignup = async () => {
            
            const response = await axios.post('http://localhost:4000/signup',userData);
            if(!response){
                dispatch(roomsActions.setMessage("something went wrong can't sign-up"));
                throw new Error("something went wrong");
            }
            const data = response.data;

            return data;
        }
        try{
            const user = await userSignup();
            console.log(user)
            if(typeof user === 'string'){
                dispatch(userActions.setMessage(user));
            }
            else{
                dispatch(userActions.setUser(user));
            }        
        }catch(err){
            console.log(err);
        }
    }
}

// export const autoLogin = (data) => {
//     return async (dispatch) => {
//         dispatch(userActions.setUser(data));
//     }
// }

// export const logout = () => {
//     return async (dispatch) => {
//         dispatch(userActions.logout());
//     }
// }

export const updateUser = (userData,token) => {
    let {firstName,lastName,birthday,email} = userData;
    return async (dispatch) => {
        const update = async () => {
            const response = await axios.patch('http://localhost:4000/user',
                                                {firstName,lastName,email,birthday},
                                                {headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                dispatch(userActions.setMessage("something went wrong can't update user"));
                throw new Error("something went wrong cant update user")
            }
            const data = response.data;
            return data;
        }
        try{
        const data = await update();
        console.log(data)
        if(typeof data === 'string'){
            dispatch(userActions.setMessage(data));
        }
        else{
            dispatch(userActions.setUser(data));
        }
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

export const logout = (token,rooms) => {
    return async (dispatch) => {
        const userLogout = async () => {
            const response = await axios.post("http://localhost:4000/logout/",{rooms},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("something went wrong")
            }

            const data = response.data;
            return data
        }
        const msg = await userLogout();
        if(typeof msg === 'string'){
            dispatch(userActions.setMessage(msg));
            dispatch(userActions.logout());
        }
    }
}

export const contactUs = (data) => {
    let {subject,email,content} = data;
    return async (dispatch) => {
        const contactUs = async () => {
            const response = await axios.post("http://localhost:4000/contactUs",{subject,email,content});
            if(!response){
                throw new Error("something went wrong try again later");
            }

            const data = response.data;
            return data;
        }
        try{
            const msg = await contactUs();
            if(typeof msg === 'string'){
                dispatch(userActions.setMessage(msg));
            }
        }catch(err){
            console.log(err);
        }

    }
}

export const forgotPassword = (data) => {
    let {email} = data;
    return async (dispatch) => {
        const forgot = async () => {
            const response = axios.post("http://localhost:4000/forgotPassword/",{email})
            if(!response){
                throw new Error("something went wrong can't reset password now")
            }
            const data = response.data;
            return data;
        }
        try{
            const msg = await forgot();
            if(typeof msg === 'string'){
                dispatch(userActions.setMessage(msg));
            }
        }
        catch(err){
            console.log(err)
        }
    }
}

export const resetPassword = (data) => {
    let {password,token} = data;
    return async (dispatch) => {
        const resetPass = async () => {
            const response = axios.post(`http://localhost:4000/resetPassword/${token}`,{password});
            if(!response){
                throw new Error("something went wrong can't reset password");
            }
            const data = response.data;
            return data;
        }
        try{
            const msg = await resetPass();
            if(typeof msg === 'string'){
                dispatch(userActions.setMessage(msg));
            }
        }
        catch(err){
            console.log(err);
        }
    }
}