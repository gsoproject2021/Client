import Layout from "./layout/Layout";
import {BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { autoLogin } from "./store/user-actions";
function App() {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch();
  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('data'));
    console.log(storedUser);
    if(storedUser && storedUser.token){
      dispatch(autoLogin(storedUser));
    }
  },[dispatch]);

  useEffect(()=>{
    if(token){
      setIsLoggedIn(true);
    }
    else{
      setIsLoggedIn(false);
    }
  },[token]);
  
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
