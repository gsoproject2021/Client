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
        const user = await userLogin();
        dispatch(userActions.setUser(user));

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