import React, { Component } from "react";
// import { ToDoList } from "../components/ToDoList";
// import ToDoItem from "../components/ToDoItem";

export class ToDoItem extends Component {
  static defaultProps = {
    done: false,
  };

  state = {
    done: this.props.done,
  };

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    //dzięki temu zapisowi nie piszemy na dole    <p>this.props.task}  , a samo text zastępujace to </p>
    const { text } = this.props;
    return (
      <div
        onClick={this.toggleDone}
        className={this.state.done ? "doneTodo" : ""}
      >
        <p>{text}</p>
      </div>
    );
  }
}

export default ToDoItem;
