import logo from './logo.svg';
import './App.css';
import HomPage from './Component/HomePage';
import Login from './Component/Login';

import { BrowserRouter as Router, Route ,Link, Routes, BrowserRouter,Navigate} from "react-router-dom";
import SignUp from './Component/Signup';
import Page404 from './Component/Page404';

function App() {
  
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
    <Route path="/" element={<div><HomPage /></div>}/>
    <Route path="/login" element={<div><Login /></div>}/>
    <Route path="/signup" element={<div><SignUp /></div>}/>
    {/* <Route path="/*" element={<div><Page404 /></div>}/> */}
    <Route path="/*" element={<div><Navigate to="/" /></div>}/>

    
  </Routes>
   </BrowserRouter>
      
    </div>
  );
}

export default App;
