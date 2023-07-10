import './App.css';
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from './components/register/register';
import { Routes, Route } from "react-router-dom";
import {useState} from 'react'


function App() {
  const [user,setLoginUser] = useState({})
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          (user && user._id) ? (<Homepage setLoginUser={setLoginUser}/>):(<Login setLoginUser={setLoginUser}/>)
        }/>
        <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}



export default App;
