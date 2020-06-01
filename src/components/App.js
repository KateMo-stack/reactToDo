import React, { Component } from "react";
import ToDoList from "../components/ToDoList";
import ToDoItem from "../components/ToDoItem";
import NewToDoForm from "../components/NewToDoForm";
import Styled from "styled-components";
import { StyledParagraph } from "./StyledParagraph";
import { StyledContainer } from "./StyledParagraph";
import { StyledButton } from "./StyledParagraph";
import { StyledHeader } from "./StyledParagraph";

class App extends Component {
  // przepisaliśmy to do ToDoList:
  // myTasks = [
  //   { done: true, text: "Record a ReactJS video" },
  //   { done: false, text: "Go for a walk" },
  // ];

  render() {
    return (
      <StyledContainer className="App">
        {/* <ToDoList title="My stuff" tasks={this.myTasks} /> */}
        <ToDoList />
        <StyledParagraph bigger myColor="yellow">
          Cos tam{" "}
        </StyledParagraph>
        <div className="button container">
          <StyledButton>
            Button z przejściem gradientu do prawej{" "}
            <i className="fa fa-long-arrow-right arrow1"></i>
          </StyledButton>
          {/* <i class="fa fa-arrow-right">Strzałka</i> */}
        </div>
      </StyledContainer>
    );
  }
}

export default App;
