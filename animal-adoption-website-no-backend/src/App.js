import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';
import AdoptionForm from './components/AdoptionForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PetList} />
        <Route path="/pets/:id" component={PetDetails} />
        <Route path="/adopt/:id" component={AdoptionForm} />
      </Switch>
    </Router>
  );
};

export default App;
