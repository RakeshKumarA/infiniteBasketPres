import React from 'react';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Keyman from './components/pages/Keyman';
import TermPlan from './components/pages/TermPlan';
import NRIInsure from './components/pages/NRIInsure';
import Retire from './components/pages/Retire';
import HealthInsure from './components/pages/HealthInsure';

const AppRoot = () => {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/about" exact component={About} />
      <Route path="/keyman" exact component={Keyman} />
      <Route path="/termplan" exact component={TermPlan} />
      <Route path="/nriinsure" exact component={NRIInsure} />
      <Route path="/retire" exact component={Retire} />
      <Route path="/healthinsure" exact component={HealthInsure} />
    </Router>
  );
};

export default AppRoot;
