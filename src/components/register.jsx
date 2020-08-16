import React from "react";
import Form from "./commons/form";
import auth from "../services/authService";
import { register } from "../services/userService";
import { FadeTransform } from "react-animation-components";
import { Redirect } from "react-router-dom";
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

  handleSubmit = async () => {
    try {
      const { headers } = await register(this.state.body);
      auth.loginWithJwt(headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        error.email = ex.response.data;
        this.setState({ error });
      }
    }
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
    if (this.props.user) return <Redirect to="/" />;

    return (
      <FadeTransform
        in
        duration={300}
        transformProps={{
          exitTransform: "translateY(-20px)",
        }}
      >
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
      </FadeTransform>
    );
  }
}

export default Register;
