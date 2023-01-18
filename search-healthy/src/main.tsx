import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/login';
import { ChakraProvider } from '@chakra-ui/react';
import { Register } from './pages/register/register';

import { Footer } from './components/footer/footer';
import { extendTheme } from '@chakra-ui/react'
import { Header } from './components/header/header';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'rgba(66 153 225 / 40%)',
      },
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
