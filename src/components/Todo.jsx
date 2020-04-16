import React, { Component } from "react";
import Table from "./common/Table";

class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((todos) => {
        this.setState({ todos });
      });
  }

  handleDelete = (todo) => {
    const todos = this.state.todos.filter((t) => t.id !== todo.id);
    this.setState({ todos });
  };

  render() {
    const { todos } = this.state;
    const { length: todoCount } = todos;
    const columns = [
      { path: "id", label: "Id" },
      { path: "userId", label: "UserId" },
      { path: "title", label: "Title" },
      {
        path: "completed",
        label: "Completed",
        content: (todo) => (todo.completed ? "Yes" : "No"),
      },
      {
        key: "Delete",
        content: (todo) => (
          <button
            onClick={() => this.handleDelete(todo)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];
    return (
      <>
        {todoCount === 0 ? (
          <p>No todo found</p>
        ) : (
          <>
            <p>There are {todoCount} users</p>
            <Table columns={columns} data={todos} />
          </>
        )}
      </>
    );
  }
}

export default Todos;
