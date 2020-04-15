import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" exact to="/login" />
        </Switch>
      </div>
    </>
  );
}

export default App;
