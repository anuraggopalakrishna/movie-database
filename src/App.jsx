import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
