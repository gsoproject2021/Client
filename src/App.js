import Layout from "./layout/Layout";
import {BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import {useContext, useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/user-actions";
import { SocketContext } from "./utils/socket";


function App() {

  const socket = useContext(SocketContext);

  const user = useSelector(state => state.user);
  const rooms = useSelector(state => state.rooms.rooms);
  const dispatch = useDispatch();
  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  

  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('data'));
    
    if(storedUser && storedUser.token){
      dispatch(autoLogin(storedUser));
    }
  },[dispatch]);

  useEffect(()=>{
    if(user.token){
      setIsLoggedIn(true);
      let userRooms = rooms.map(room => room.roomId);
      console.log(userRooms);
      let data = {userId:user.data.userId,rooms:userRooms};
      socket.emit('user_joined',data);

    }
    else{
      setIsLoggedIn(false);
    }
  },[user.token]);
  
  return (
    <Router>
        <div className="App">
            {isLoggedIn ? <Layout/> : <MainLayout/>}
            {/* {routes} */}
        </div>
    </Router>
    
  );
}

export default App;
