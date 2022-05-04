import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/navbar/Navbar';
import './index.css';
import BookList from './components/pages/BookList/BookList';
import Categories from './components/pages/categories/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Navbar />
        <main className="bg-pale-grey p-12">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </main>
      </Router>
    </React.StrictMode>
  </Provider>,
);
