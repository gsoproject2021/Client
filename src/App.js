import Layout from "./layout/Layout";
import {BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import {useContext, useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/user-actions";
import { SocketContext } from "./utils/socket";
import { roomsActions } from "./store/room-slice"

let logoutTimer;

function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  

  // useEffect(() => {
  //   if(user.token){
  //     setTimeout()
  //   }
  // },[user.token])
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('data'));
    
    if(storedUser && storedUser.token){
      dispatch(autoLogin(storedUser));
    }
  },[dispatch]);

  useEffect(() => {
    if(user.token){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  },);
  
  

  return (
    <Router>
        <div className="App">
            {isLoggedIn ? <Layout/> : <MainLayout/>}
        </div>
    </Router>
    
  );
}

export default App;
