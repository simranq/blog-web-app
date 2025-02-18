import React from 'react'
import blogLogo from "/images/blog-logo.png";
import blogTitle from "./components/BlogTitle";
import { Header } from './components/Header.jsx';
import  HomePage  from './components/HomePage.jsx';
import { Card } from './components/Card.jsx';

function App() {
  return (
    <div>
      <Header blogLogo={blogLogo} blogTitle={blogTitle}/>  
      <HomePage />    
    </div>
  );
}

export default App;