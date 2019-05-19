import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import ComposeEmail from './components/email/ComposeEmail';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Navbar /> <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/compose" component={ComposeEmail} />
        </Router>
      </div>
    );
  }
}

export default App;
