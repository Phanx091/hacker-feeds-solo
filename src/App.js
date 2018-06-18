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
import FavoritePage from './components/FavoritePage/FavoritePage';
import AddRssPage from './components/AddRssPage/AddRssPage';
import RssPage from './components/RssPage/RssPage';
import WelcomeStartPage from './components/WelcomePage/WelcomePage';
import TutorialPage from './components/TutorialPage/TutorialPage';
import TechnologyPage from './components/TechnologyPage/TechnologyPage';


import './styles/main.css';




const App = () => (
  <div>
    <Header className="title" title="" />
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
          path="/welcome"
          component={WelcomeStartPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/favorite"
          component={FavoritePage}
        />
        <Route
          path="/rss"
          component={AddRssPage}
        />
        <Route
          path="/my"
          component={RssPage}
        />
        <Route
          path="/tutorial"
          component={TutorialPage}
        />
          <Route
          path="/tech"
          component={TechnologyPage}
        />
         
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
