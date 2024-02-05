import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import {
  ContactForm,
  ContactList,
  Filter,
  Loader,
  Navigation,
  UserMenu,
} from './index';

const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  return (
    <div>
      <header>
        <Navigation />
        <UserMenu />
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<RegisterPage />} />
        </Routes>
      </Suspense>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
