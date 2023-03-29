import React from 'react';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/index';
import { Body } from './components/Body/index';
import { Footer } from './components/Footer/index';
import { Login } from './pages/Login/index';
import { Signup } from './pages/Signup/index';
import { Plan_pricing } from './pages/Planpricing/index';
import { Welcome } from './pages/Welcome/index';


export default function App() {
  return (
    <div>
      <Welcome />
      
     </div>
  );
}
