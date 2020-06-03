import React, { Component } from "react";
import ToDoItem from "../components/ToDoItem";
// uważaj żeby wszytsko było zaimportowane, bo przez to może cos nie działać!
import NewToDoForm from "../components/NewToDoForm";
import { StyledHeader } from "./StyledParagraph";
import { DestroyButton } from "./StyledParagraph";

// dump conponents, functional components, single components, trzyjmuje propsy i zwraca fragment UI
// wersja pierwotna z propsa jako parametrem
// const NewToDoForm = (props) => (
//   <div>
//     <input type="text" onChange={props.onChange} value={props.draft} />
//     <button onClick={props.onSubmit}>Add</button>
//   </div>
// );

export class ToDoList extends Component {
  // cykl życia komponentu poniżej
  constructor(props) {
    super(props);
    console.log("Hello from constructor");
  }

  componentDidMount = () => {
    // console.log("component mounted!");
    fetch("http://localhost:5000/todo_items");
  };

  componentDidUpdate = () => {
    console.log("component (ToDoList) updated!");
  };
  static defaultProps = {
    tasks: [
      // { done: true, text: "Record a ReactJS video" },
      // { done: false, text: "Go for a walk" },
      { text: "Record a ReactJS video" },
      { text: "Go for a walk" },
      // połączenie z API restowym
    ],
    title: "My Staff",
  };
  state = {
    tasks: this.props.tasks,
    draft: "",
  };

  updateDraft = (event) => {
    this.setState({ draft: event.target.value });
  };

  addToDo = () => {
    //   poprzez dodanie tej linijki( const { tasks, draft } = this.state;) nie musimy poniżej ciągle pisać this.state poniżej
    const { tasks, draft } = this.state;
    const list = tasks;
    //dodanie kolejnego elementu do tablicy - push
    // zamiast łańcuchów mamy teraz tablicę obiektów
    list.push({ text: draft, done: false });
    this.setState({ tasks: list, draft: "" });
  };

  removeAll = () => {
    this.setState({ tasks: [] });
  };
  render() {
    const { title } = this.props;
    const { tasks, draft } = this.state;
    return (
      <div>
        <StyledHeader>{title}</StyledHeader>
        <DestroyButton onClick={this.removeAll}>Remove all</DestroyButton>
        {tasks.map((task) => (
          <ToDoItem text={task.text} done={task.done} />
        ))}
        {/* tu jako propsy przekazuje funkcje */}
        <NewToDoForm
          onSubmit={this.addToDo}
          onChange={this.updateDraft}
          draft={draft}
        />
        {/* to co na górze to tak najprawdę rozpisanie tego co na dole */}
        {/* <input type="text" onChange={this.updateDraft} value={draft} />
        <button onClick={this.addToDo}>Add</button> */}
      </div>
    );
  }
}

export default ToDoList;
