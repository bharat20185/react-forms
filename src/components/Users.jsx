import React, { Component } from "react";
import Table from "./common/Table";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users: this.mapViewModel(users) });
      });
  }

  mapViewModel(users) {
    return users.map((user) => {
      return {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        address: user.address.suite + " " + user.address.street,
      };
    });
  }

  handleDelete = (user) => {
    const users = this.state.users.filter((u) => u.id !== user.id);
    this.setState({ users });
  };

  render() {
    const { users } = this.state;
    const { length: userCount } = users;
    const columns = [
      { path: "name", label: "Name" },
      { path: "username", label: "Username" },
      { path: "email", label: "Email" },
      { path: "address", label: "Address" },
      {
        key: "Delete",
        content: (user) => (
          <button
            onClick={() => this.handleDelete(user)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        ),
      },
    ];
    return (
      <>
        {userCount === 0 ? (
          <p>No user found</p>
        ) : (
          <>
            <p>There are {userCount} users</p>
            <Table columns={columns} data={users} />
          </>
        )}
      </>
    );
  }
}

export default Users;
