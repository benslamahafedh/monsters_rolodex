import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "a",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => this.setState({ searchFiled: e.target.value })}
        />
        <br></br>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
