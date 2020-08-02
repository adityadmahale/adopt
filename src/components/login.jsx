import React from "react";
import Form from "./commons/form";
import Joi from "joi";

class Login extends Form {
  state = {
    body: {
      email: "",
      password: "",
    },
    error: {
      email: "",
      password: "",
    },
  };

  handleSubmit = () => {
    console.log("Submitted");
  };

  schema = Joi.object({
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
          <form>
            {this.renderInput("text", "email", "Email")}
            {this.renderInput("password", "password", "Password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
