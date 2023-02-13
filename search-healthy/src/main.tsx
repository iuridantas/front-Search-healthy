import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/login';
import { ChakraProvider } from '@chakra-ui/react';
import { Register } from './pages/register/register';
import { Footer } from './components/footer/footer';
import { extendTheme } from '@chakra-ui/react'
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { CreatProfile } from './pages/creatProfiles/creatProfile';
import GlobalContext from './context';
import { CreatTraining } from './pages/creatTraining/creatTraining';
import { Training } from './pages/training/training';
import { FrontPage } from './pages/frontPage/frontPage';
import { User } from './pages/user/user';
import Contact from './pages/contact/contact';

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
    <GlobalContext>
    <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<FrontPage/>} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/User/update/:id" element={<Register />} />
    <Route path="/home" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/user" element={<User />} />
    <Route path='/training/find/:id' element={<Training />}/>
    <Route path="/created" element={<CreatProfile />} />
    <Route path="/profile/update/:id" element={<CreatProfile />} />
    <Route path="/created/training/:id" element={<CreatTraining />} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
    </GlobalContext>
  </React.StrictMode>,
)
