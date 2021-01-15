import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MadePizza from './views/MadePizza';
import Tracking from './views/Tracking';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={MadePizza} />
        <Route path='/Tracking' component={Tracking} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
