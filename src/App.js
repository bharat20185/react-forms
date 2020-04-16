import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import Todos from './components/Todo';

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
          <Route path="/todos" component={Todos} />
          <Redirect from="/" exact to="/login" />
        </Switch>
      </div>
    </>
  );
}

export default App;
