import React, { useEffect, useState } from 'react';
import Card  from './Card.js';
import Navbar from './Navbar.js';
import Example from './Example.js';
import CardsList from './CardsList.js';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import CardsList from './CardsList.js';
//main component
function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="descriptionCard" element={<Example />} />
          <Route path="*" element={<CardsList />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;