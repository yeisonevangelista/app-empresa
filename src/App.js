import React from "react";
import './App.css';
import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './componentes/paginas/Inicio';
import About from './componentes/paginas/About';
import Products from './componentes/paginas/Productos';
import SignUp from './componentes/paginas/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>

          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;