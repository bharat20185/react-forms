import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class Login extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = () => {
    // save data
    console.log("submitted");
  };
  render() {
    return (
      <>
        <h1>Login Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", this.handleChange)}
          {this.renderInput(
            "password",
            "Password",
            this.handleChange,
            "password"
          )}
          {this.renderButton("Login")}
        </form>
      </>
    );
  }
}

export default Login;
