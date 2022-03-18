import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavoritePage';
import './App.css';

function App() {

  return (
    <div>
      <Router>
        <div className="App-header">
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/favorite" element={<FavoritePage/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
