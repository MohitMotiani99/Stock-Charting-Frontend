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
import Users from './components/user/Users';
import UserPage from './components/user/UserPage';
import LoginPage from './components/home/LoginPage';
import Ipos from './components/ipo/Ipos';
import Uploads from './components/upload/Uploads';
import About from './components/about/About';
import Creators from './components/creators/Creators';

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

          <Route exact path="/Users" element={<Users />}></Route>
          <Route exact path="/user/:userId" element={<UserPage />}></Route>

          <Route exact path="/Login" element={<LoginPage />}></Route>

          <Route exact path="/IPOs" element={<Ipos />}></Route>

          <Route exact path="/Upload" element={<Uploads />}></Route>

          <Route exact path="/About" element={<About />}></Route>

          <Route exact path="/Creators" element={<Creators />}></Route>

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
