import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class Register extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().min(3).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    // save data
    console.log("submitted");
  };
  render() {
    return (
      <>
        <h1>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", this.handleChange)}
          {this.renderInput(
            "password",
            "Password",
            this.handleChange,
            "password"
          )}
          {this.renderInput("name", "Name", this.handleChange)}
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}

export default Register;
