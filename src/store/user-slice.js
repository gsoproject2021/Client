import { Logout } from '@mui/icons-material';
import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{data:{},token:''},
    reducers:{
        setUser(state,action){
            state.data = action.payload.data;
            state.token = action.payload.token;
            localStorage.setItem('data',JSON.stringify({data:state.data,token:state.token}));
        },
        logout(state,action){
            state.data = {};
            state.token = '';
            localStorage.removeItem('data');
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;