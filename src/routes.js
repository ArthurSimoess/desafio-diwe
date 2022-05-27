import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactList from './pages/contactList/ContactList';
import CreateContact from './pages/createContact/CreateContact';
import LoginPage from './pages/login/LoginPage';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/contactList" element={<ContactList />} />
      <Route path="/createContact" element={<CreateContact />} />
    </Routes>
  );
}

export default RoutesPages;
