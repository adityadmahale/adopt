import React from "react";
import Form from "./commons/form";
import Joi from "joi";

class Register extends Form {
  state = {
    body: {
      username: "",
      email: "",
      password: "",
    },
    error: {
      username: "",
      email: "",
      password: "",
    },
  };

  handleSubmit = () => {
    console.log("Submitted");
  };

  schema = Joi.object({
    username: Joi.string().min(3).max(50).required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string().min(5).max(50).required(),
  });

  render() {
    return (
      <div className="card w-75 mx-auto">
        <div className="card-body">
          <h3 className="mb-4">Register</h3>
          <form>
            {this.renderInput("text", "username", "Username")}
            {this.renderInput("text", "email", "Email")}
            {this.renderInput("password", "password", "Password")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
