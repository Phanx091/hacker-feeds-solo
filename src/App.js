import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import RssList from './components/RssList/RssList';
import AddRssPage from './components/AddRssPage/AddRssPage';
import RssPage from './components/RssPage/RssPage';


import './styles/main.css';








const App = () => (
  <div>
    <Header className="title" title="<Hacker_Feeds/>" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/list"
          component={RssList}
        />
        <Route
          path="/rss"
          component={AddRssPage}
        />
        <Route
          path="/my"
          component={RssPage}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
