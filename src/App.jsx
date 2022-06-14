import React from 'react';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Cart from './pages/Cart';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route render={() => <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
