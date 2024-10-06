// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing'; // Adjust the path as needed
import MainPage from './components/MainPage'; // Adjust the path as needed

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/main" element={<MainPage />} />
                {/* Add other routes as necessary */}
            </Routes>
        </Router>
    );
};

export default App;
