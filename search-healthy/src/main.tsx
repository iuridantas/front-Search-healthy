import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Login } from './pages/login/login';
import { ChakraProvider } from '@chakra-ui/react';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ChakraProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
