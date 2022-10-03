import Layout from "./layout/Layout";
import {BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import {  useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";


import ErrorMessage from "./components/ErrorMessage";
import { userActions } from "./store/user-slice";


let timeOut;
function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isLoggedIn ,setIsLoggedIn] = useState(false);

  
  
 
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('data')); 
    const currentTime = new Date().getTime();
    
    
    
    if(storedUser && storedUser.token && storedUser.expireIn > currentTime){
      const remainingTime = user.expireIn-timeOut
      dispatch(userActions.setUser(storedUser));
      timeOut = setTimeout(userActions.logout(),remainingTime);
    }
    else{
      dispatch(userActions.logout())
    }
    
  },[dispatch,user.expireIn]);

  // useEffect(() => {
  //   logoutTimer = setTimeout(dispatch(userActions.setUser({data:{},token:"",expireIn:0})),remainingTime); 
  //   clearTimeout(logoutTimer);
  // },[dispatch])

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
            {isLoggedIn ? <Layout/> : <MainLayout/>}
        </div>
    </Router>
    
  );
}

export default App;
