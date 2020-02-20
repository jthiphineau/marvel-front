import React from "react";
import "./reset.css";
import "./App.css";
import logo from "./assets/img/Marvel-Logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";

function App() {
  return (
    <Router>
      <header className="logo">
        <Link to="/">
          <img src={logo} alt="Marvel" />
        </Link>
        <Link to="/characters">
          <button className="character">PERSONNAGES</button>
        </Link>
        <Link to="/comics">
          <button className="comics">BANDES DESSINÉES</button>
        </Link>
        <Link to="/favoris">
          <button className="favoris">FAVORIS</button>
        </Link>
      </header>
      <Switch>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route exact path="/comics">
          <Comics />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route></Route>
        <Route></Route>
      </Switch>
      <footer>THE END</footer>
    </Router>
  );
}

export default App;
