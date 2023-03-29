import React from 'react';
import './Welcome.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../../components/Header/index';
import { Body } from '../../components/Body/index';
import { Footer } from '../../components/Footer/index';

const Welcome = () => {
  return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
  );
}

export { Welcome };
