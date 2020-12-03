import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
