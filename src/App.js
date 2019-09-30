import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from './container/Header';

import Home from './container/Home';
import Detail from './container/Detail';

const App = () => (
  <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/detail/:id" component={Detail} />
      </div>
    </Router>
);


export default App;