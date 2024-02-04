import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <Routes>
          <Route path='/register' element={ } />
          <Route path='/login' element={ }/>
          <Route path='/contacts' element={ }/>
        </Routes>
      </header>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
