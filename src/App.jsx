


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';

import Fetch from "./Component/Fetch";


import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                
                

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/fetch" element={<Fetch />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;






