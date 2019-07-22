import React from 'react';
import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
