import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Prices from './pages/Prices';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/precos" exact component={Prices} />
      <Route path="/sobre" exact component={About} />
      <Route path="/trocar-pontos" exact component={Cart} />
    </Switch>
  );
}
