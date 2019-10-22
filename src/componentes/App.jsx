import React, { Component } from 'react';
import Botones from './botones.jsx'

class App extends Component {
    constructor(props){
    super(props)
    
    }  
  
  render() {
    return (
      <div className="calcu">
        <Botones />
      </div>
    );
    }
}

export default App;