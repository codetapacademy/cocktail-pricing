import React, { Component } from 'react';
import Cocktail from './component/cocktail';
import Ingredient from './component/ingredient';
import { 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';
const Home = () => <div>Hello from the homepage</div>;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/ingredient">Manage Ingredient</Link>
        <Link to="/cocktail">Manage Cocktail</Link>
          <Switch>
            <Route 
              exact 
              path="/"
              component={Home} />
            <Route 
              exact 
              path="/ingredient"
              component={Ingredient} />
            <Route 
              exact 
              path="/cocktail"
              component={Cocktail} />
          </Switch>
      </div>
    );
    // <Ingredient />
    // <Cocktail />
  }
}

export default App;
