import React from 'react';
import './style.css';
import { Header } from './components/Header/index';
import { Body } from './components/Body/index';
import { Footer } from './components/Footer/index';


export default function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
