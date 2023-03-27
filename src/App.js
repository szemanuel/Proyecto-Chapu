import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Body } from './components/Body/index';
import { Footer } from './components/Footer/index';
import { Login } from './pages/Login/index';
import { Signup } from './components/Signup/index';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Body />
        <Footer />
      </BrowserRouter>

      {/* <Route path="/welcome"> <Welcome /></Route> */}
      {/* <Route path="/welcome"> <Welcome /></Route> */}
      {/* <Route path="/welcome"> <Welcome /></Route> */}
      {/* <Route path="/welcome"> <Welcome /></Route> */}
      {/* <Route path="/welcome"> <Welcome /></Route> */}
      {/* <Route path="/welcome"> <Welcome /></Route> */}
    </div>
  );
}
