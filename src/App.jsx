// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import blogLogo from "/images/blog-logo.png";
import blogTitle from "./components/BlogTitle";
import { Header } from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Header blogLogo={blogLogo} blogTitle={blogTitle} />
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
