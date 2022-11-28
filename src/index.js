import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App/App';
import 'bootstrap/dist/css/bootstrap.css';
import HomeA from './Pages/Administrador/HomeA';
import HomeC from './Pages/Cliente/HomeC';
import HomeW from './components/HeaderW/HomeW';
import Login from '../src/Pages/Administrador/login';
import Registro from '../src/Pages/Administrador/registro';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/homeW" element={<HomeW />} />
            <Route path="/homeA" element={<HomeA />} />
            <Route path="/homeC" element={<HomeC />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
        </Routes>

    </BrowserRouter>
)

