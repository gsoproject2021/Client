import { Logout } from '@mui/icons-material';
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{data:{},token:'',expireIn:0,message:""},
    reducers:{
        setUser(state,action){
            state.data = action.payload.data;
            state.token = action.payload.token;
            state.expireIn = action.payload.expireIn;
            localStorage.setItem('data',JSON.stringify({data:state.data,token:state.token,expireIn:state.expireIn}));
            
        },
        logout(state,action){
            state.data = {};
            state.token = '';
            state.expireIn = 0;
            localStorage.removeItem('data');
        },
        changePicture(state,action){
            state.data.image = '';
            state.data.image = action.payload;
        },
        updateUser(state,action){
            state.data = action.payload;
            localStorage.setItem('data',JSON.stringify({data:state.data,token:state.token}));
        },
        setMessage(state,action){
            state.message = action.payload;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;