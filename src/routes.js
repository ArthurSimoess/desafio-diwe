import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactList from './pages/contactList/ContactList';
import LoginPage from './pages/login/LoginPage';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/contactList" element={<ContactList />} />
    </Routes>
  );
}

export default RoutesPages;
