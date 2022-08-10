import './App.css';
import { useState } from 'react';
import {Route, Routes} from 'react-router-dom'
import NavBar from './NavBar.jsx';
import Welcome from './Welcome';
import { BrowserRouter } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './pages/Dashboard'


function App() {
  const [navStatus, setnavStatus] = useState('FakeBook')
  
  return (
    <BrowserRouter>
      <NavBar title={navStatus}/>
      <Routes>
        <Route exact path='/' element={<Welcome />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Portfolio Ready (WEbsites, Github, Linkedin)
// Tution call
// Raushan Bh
// Pankha Thikk
// Khana
