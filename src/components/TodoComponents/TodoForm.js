import React, { Component } from "react";
import "../TodoComponents/Todo.css";
import Styled from "styled-components";

const Button = Styled.div`
  margin: 1rem 6rem;
  padding: .5rem 1rem;
  border-radius: 1.5rem;
  background-color: #D3D3D3;
  box-shadow: 2px 2px black;
  color: #084f93;
  font-size: 1rem;
  font-weight: bold;
`;

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
    localStorage.setItem("todo", this.state.item);
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
        <Button onClick={this.handleSubmit}>Add Todo</Button>
      </form>
    );
  }
}

export default TodoForm;
