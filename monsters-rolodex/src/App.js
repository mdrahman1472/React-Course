import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{  
  constructor(){
    super()

    this.state = {
      strings: "from Ashik"
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.strings}
            <br/>
            <button onClick = {() => this.setState({strings: "You clicked the button"})}>Click</button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    }
}

export default App;
