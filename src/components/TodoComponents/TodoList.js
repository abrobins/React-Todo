import React from "react";
import Todo from "../TodoComponents/Todo";
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

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
  return (
    <div className="todolist">
      {props.todoItems.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <Button className="clear-btn" onClick={props.clearChecked}>
        Clear Todo Items
      </Button>
    </div>
  );
};

export default TodoList;
