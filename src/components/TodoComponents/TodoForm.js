import React, { Component } from "react";
import "../TodoComponents/Todo.css";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.item);
    // this.setState({ item: "" });
  };

  render() {
    console.log("rendering the form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
