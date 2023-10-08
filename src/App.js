import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Courses from './components/Courses';
import Footer from './components/Footer';
import './App.css';
import DisplayQuotes from './components/DisplayQuotes';

const styles = {
  fontFamily: 'Montserrat, sans-serif ',
};
function App() {
  return (
    <BrowserRouter>
      <div style={styles}>
        <Header />
        <Home />
        <Courses />
        <DisplayQuotes />
        <Footer />
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
