import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hooks from './pages/Hooks';
import Apis from './pages/Apis';
import NotFound from './components/NotFound';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hooks />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/apis" element={<Apis />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}