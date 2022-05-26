import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}

export default RoutesPages;
