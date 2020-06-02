import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Snow from 'react-snow-effect';

import * as serviceWorker from './serviceWorker';

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import TeamPage from "views/examples/TeamPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import './index.css'

ReactDOM.render(
  <BrowserRouter>
     <Snow />
    <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/team-page"
          render={props => <TeamPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();