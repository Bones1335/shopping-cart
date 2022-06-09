import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
