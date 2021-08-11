import './App.css';
import React from 'react';

import Home from './views/Home';
import Catalogo from './views/Catalogo';
import Detalle from './views/detalle/Detalle';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>

        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>             
            <Route exact path="/catalogo" component={Catalogo}/>             
            <Route exact path="/detalle/:id" component={Detalle}/>
          </Switch>
        </Router>
      </>
  );
}

export default App;