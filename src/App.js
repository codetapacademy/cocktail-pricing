import React, { Component } from 'react';
import Cocktail from './component/cocktail';
import Ingredient from './component/ingredient';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Manage Ingredient</h1>
        <Ingredient />
        <h1> Manage Cocktail</h1>
        <Cocktail />
      </div>
    );
  }
}

export default App;
