import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';

import { Switch, Route, Redirect } from 'react-router';
import Dashboard from './pages/dashboard';
import Index from './pages';
import { BrowserRouter } from 'react-router-dom';
import Initialize from './pages/initialize';
import Report from './pages/report';
import Header from './components/header';
import Notfound from './pages/notfound';
import Footer from './components/Footer';


function App() {
  let loggedinUser = localStorage.getItem("loggedinUser");
  let isLoggedIn = false;
  if (loggedinUser !== undefined && loggedinUser !== null && loggedinUser !== "") {
    isLoggedIn = true;
  }
  else{
    isLoggedIn = false;
  }
  return (
    <Container fluid >
      <Header/>
      <Container className='mt-4 bg-transparent'>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"> {isLoggedIn ? <Dashboard /> : <Index />}</Route>
            <Route path="/dashboard">{isLoggedIn ? <Dashboard /> : <Redirect to="/" />}</Route>
            <Route path="/initialize">{isLoggedIn ? <Initialize /> : <Redirect to="/" />}</Route>
            <Route path="/report">{isLoggedIn ? <Report /> : <Redirect to="/" />}</Route>
            <Route ><Notfound/></Route>
          </Switch>
        </BrowserRouter>
      </Container>
      <Footer/>
    </Container>
  );
}

export default App;
