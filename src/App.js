import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import List from './pages/List';
import Support from './pages/Support';
import NoPage from './pages/NoPage';
import {Contact} from './pages/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/list" element={<List />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
