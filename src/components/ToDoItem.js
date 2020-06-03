import React, { Component } from "react";
// import { ToDoList } from "../components/ToDoList";
// import ToDoItem from "../components/ToDoItem";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const StyledItem = Styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 14px;
  margin-bottm: 7px;
  color: ${(props) => (props.done ? "yellow" : "auto")};
  text-decoration: ${(props) => (props.done ? "line-through" : "auto")}

`;
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

  componentWillMount = () => {
    console.log("todo${this.props.text} unmounted...");
  };
  render() {
    //dzięki temu zapisowi nie piszemy na dole    <p>this.props.task}  , a samo text zastępujace to </p>
    const { text } = this.props;
    return (
      // done to flaga, która może mieć wartośc prawdy lub fałszu
      <StyledItem onClick={this.toggleDone} done={this.state.done}>
        {/* className={this.state.done ? "doneTodo" : ""} */}
        {/* > */}
        {text}
        {/* <Linkto = > </Link> */}
      </StyledItem>
    );
  }
}

export default ToDoItem;
