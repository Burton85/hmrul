// CSS 樣式數出
import './css/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Media from './Media';
import Case from './Case';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About></About>} />
      <Route path="media" element={<Media></Media>} />
      <Route path="case" element={<Case />} />
      <Route path="contact" element={<Contact></Contact>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
