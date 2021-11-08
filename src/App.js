import './App.css';
import HomePage from './components/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Companies from './components/company/Companies';
import { Provider } from 'react-redux';
import React from 'react';
import store from './store/store';

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Companies" element={<Companies />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
