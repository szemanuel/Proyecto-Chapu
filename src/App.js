import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Body } from './components/Body/index';
import { Footer } from './components/Footer/index';
import { Login } from './pages/Login/index';
import { Signup } from './pages/Signup/index';
import { Plan_pricing } from './pages/Planpricing/index';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Plan_pricing" element={<Plan_pricing />} />
        </Routes>
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
