import React from 'react';
import {Route, Routes} from 'react-router-dom'

//Components
import Navbar from './components/Navbar/Navbar';
import Blog from './components/Blog/Blog';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Cursor from './components/Cursor/Cursor';
import ColorChanger from './components/ColorChanger/ColorChanger';
import Home from './components/Home/Home';

import Scroll from './contexts/ScrollContext';


const App = () => {
  return (
    <Scroll>
      {/* <Cursor/> */}
      <Navbar/>
      <ColorChanger/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Scroll>
  );
};

export default App;
