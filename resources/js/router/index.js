import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome';

import Home from '../pages/home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Switch>
          <Route exact path="/" component={Welcome} title="welcome" />
          <Route path="/home" component={Home} title="register" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
