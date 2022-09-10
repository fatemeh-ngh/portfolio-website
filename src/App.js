import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';

//Components
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Cursor from './components/Cursor';


//Context
import ThemeContext from './contexts/ThemeContext';



const App = () => {
  return (
      <ThemeContext>
        <Cursor/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
        {/* <Home/>
        <Portfolio/>
        <Contact/> */}
      </ThemeContext>
  );
};

export default App;
