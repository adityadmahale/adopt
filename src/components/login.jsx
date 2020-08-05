import React from "react";
import { Link } from "react-router-dom";
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
          <h3 className="mb-4">Login</h3>
          <form>
            {this.renderInput("text", "email", "Email")}
            {this.renderInput("password", "password", "Password")}
            {this.renderButton("Login")}
          </form>
          <p className="mt-3">
            Not registered?{" "}
            <Link to="/register" className="text-green">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
