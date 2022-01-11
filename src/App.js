import Layout from "./layout/Layout";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import {useState} from 'react';
function App() {
  const [isLogin ,setIsLogin] = useState(false);
  return (
    <Router>
        <div className="App">
            {isLogin?<Route  path="/"><MainLayout/></Route> : <Route path="/main"><Layout/></Route>}


            {/* <Route  path="/">
              <MainLayout/>
            </Route> */}
            
            {/* <Route  path="/main">
              <Layout/>
            </Route> */}
          
        </div>
    </Router>
    
  );
}

export default App;
