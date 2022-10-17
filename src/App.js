import io from "socket.io-client"
import Layout from "./layout/Layout";
import {BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import {  useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SocketContext } from "./context/SocketContext";

import ErrorMessage from "./components/ErrorMessage";
import { userActions } from "./store/user-slice";
import { roomsActions } from "./store/room-slice";


let timeOut;
function App() {

  
  
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  
  const logoutTimer = useCallback(() => {
    dispatch(userActions.logout());
    setIsLoggedIn(false);
  })
  
 
  const socket = io("http://localhost:4000",{
    autoConnect:false,
    withCredentials: true,
    auth: {
        token: user.token,
    },
    
  })
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('data')); 
    const currentTime = new Date().getTime();
    // const roomsData = JSON.parse(localStorage.getItem('roomsData'));
    // const userId = storedUser.data.userId;
    
    if(storedUser && storedUser.token && storedUser.expireIn > currentTime){
      const remainingTime = user.expireIn-timeOut
      dispatch(userActions.setUser(storedUser));
      // dispatch(roomsActions.loadRooms({roomsData,userId}))
      timeOut = setTimeout(logoutTimer,remainingTime);
      clearTimeout(timeOut);
    }
    else{
      dispatch(userActions.logout())
    }
    
  },[dispatch,user.expireIn]);


  useEffect(() => {
    if(user.token){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  },[user.token]);
  
  

  return (
    <Router>
      
        <div >
        <ErrorMessage/>
            {isLoggedIn ? <SocketContext.Provider value= {socket}>
                           <Layout/>
                          </SocketContext.Provider> : <MainLayout/>}
        </div>
    </Router>
    
  );
}

export default App;
