import React, { Component } from 'react';
import Calcu from './calcu.js';

class App extends Component {
    constructor(props){
    super(props)
    
    }  
  
  render() {
    return (
      <div className="App">
          <Calcu/>
      </div>
    );
    }
}

export default App;