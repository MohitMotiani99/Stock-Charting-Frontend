import './App.css';
import HomePage from './components/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Companies from './components/company/Companies';
import CompanyPage from './components/company/CompanyPage'
import { Provider } from 'react-redux';
import React from 'react';
import store from './store/store';
import Exchanges from './components/stock-exchange/Exchanges';
import ExchangePage from './components/stock-exchange/ExchangePage';
import Sectors from './components/sector/Sectors';
import SectorPage from './components/sector/SectorPage';

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/Companies" element={<Companies />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/company/:companyId" element={<CompanyPage />} ></Route>

          <Route exact path="/Exchanges" element={<Exchanges />}></Route>
          <Route path="/exchange/:stockExchangeId" element={<ExchangePage />} ></Route>

          <Route exact path="/Sectors" element={<Sectors />}></Route>
          <Route exact path="/sector/:sectorId" element={<SectorPage />}></Route>


        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
