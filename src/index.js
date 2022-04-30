import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Navbar';
import './index.css';
import BookList from './components/pages/BookList/BookList';
import Categories from './components/pages/categories/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
