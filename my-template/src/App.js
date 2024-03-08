import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import BlogPost from './Components/BlogPost'
import Home from './Components/Home'

function App() {
  return (
     <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/post' element={<BlogPost/>} /> 
        </Routes>
        <Footer/>
      </Router>
     </div>
  );
}

export default App;
