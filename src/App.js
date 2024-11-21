import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailPage from './pages/CocktailPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cocktail/:id" element={<CocktailPage />} />
            </Routes>
        </Router>
    );
}

export default App;
