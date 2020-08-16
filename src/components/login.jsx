import React from "react";
import { Link, Redirect } from "react-router-dom";
import auth from "../services/authService";
import Form from "./commons/form";
import { FadeTransform } from "react-animation-components";
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

  handleSubmit = async () => {
    try {
      const { email, password } = this.state.body;
      await auth.login(email, password);
      const { state } = this.props.location;
      window.location = state ? state.path : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        error.email = ex.response.data;
        this.setState({ error });
      }
    }
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
      </FadeTransform>
    );
  }
}

export default Login;
