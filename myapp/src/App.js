// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Education from './Education';
import Amazon from './courses/amazon';
import ArtificialInteliigence from './courses/artificial';
import CyberSecurity from './courses/cyber';
import WebDesign from './courses/webdesign';
import WebDevelopment from './courses/webdevelopment';
import Arts from './courses/arts';
import SignUp from './signup';
import Login from './login';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/courses/amazon" element={<Amazon />} />
        <Route path="/courses/artificial" element={<ArtificialInteliigence />} />
        <Route path="/courses/cyber" element={<CyberSecurity />} />
        <Route path="/courses/webdesign" element={<WebDesign />} />
        <Route path="/courses/webdevelopment" element={<WebDevelopment />} />
        <Route path="/courses/arts" element={<Arts />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;


