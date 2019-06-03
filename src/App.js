import React, { Component } from "react";
import "./App.css";

//user has to add items to the list using input text
//show the user updated list
//add a button that removes the thing from the list

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    };
  }

  handleUserInput = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = e => {
    const newList = this.state.list;
    newList.push(this.state.inputValue);
    this.setState({ list: newList, inputValue: "" });
    //One liner way to do it:
    //this.setState({ list: [...this.state.list, this.state.inputValue] });
  };
  renderList() {
    return this.state.list.map(item => {
      return (
        <div>
          <p>{item}</p>
          <button onClick={this.removeButton}>Remove</button>
        </div>
      );
    });
  }
  removeButton() {
    console.log("clicked");
    const itemToDelete = this.state.list;
    console.log(itemToDelete);
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          onChange={this.handleUserInput}
          value={this.state.inputValue}
        />
        <button onClick={this.handleSubmit}>Add</button>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
