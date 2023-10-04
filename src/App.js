// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import EditContact from './components/contacts/EditContact';

function App() {
  return (
    <Provider>
      <Router>
    <div className="App">
      <Header branding="Contact Manager"/>
      <div className='container'>
        <Routes>
          <Route path='/' Component={Contacts}/>
          <Route path='/contact/add' Component={AddContact}/>
          <Route path='/contact/edit/:id' Component={EditContact}/>
          <Route path='/about' Component={About}/>
          <Route path="*" Component={NotFound}/>
          <Route path='/test' Component={Test}/>
        </Routes>
      
    </div>
    </div>
    </Router>
    </Provider>
  );
};

export default App;
