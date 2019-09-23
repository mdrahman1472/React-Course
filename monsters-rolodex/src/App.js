import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component"


class App extends Component{  
  constructor(){
    super()

    this.state = {
     monsters: []
  }
}

componentDidMount(){
  // fetch return promise
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
}

  render(){
    return (
      <div className="App">
        <CardList>
          {
            this.state.monsters.map(el => <h1 key={el.id}>{el.name}</h1>)
          }
        </CardList>
      </div>
    );
    }
}

export default App;
