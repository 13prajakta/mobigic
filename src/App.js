import logo from './logo.svg';
import './App.css';
import Splash from './Components/Splash';
import Grid from './Components/Grid';
import Searched from './Components/Searched';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/yourgrid" component={Grid} />
          <Route exact path="/search" component={Searched} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
