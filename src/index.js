import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>} />
                </Routes>
        </BrowserRouter>
    </React.StrictMode>
)