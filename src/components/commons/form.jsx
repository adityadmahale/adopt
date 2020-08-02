import React, { Component } from "react";

class Form extends Component {
  handleChange = (field, value) => {
    const error = { ...this.state.error, [field]: "" };
    const body = { ...this.state.body, [field]: value };
    this.setState({ body, error });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const error = this.validate();
    if (error) return;
    this.handleSubmit();
  };

  validate = () => {
    const { error: err } = this.schema.validate(this.state.body);
    if (err) {
      const result = err.details[0];
      const error = { ...this.state.error, [result.path[0]]: result.message };
      this.setState({ error });
    }
    return err;
  };

  renderInput = (type, field, label) => {
    const { body, error } = this.state;
    return (
      <div className="form-group">
        <label htmlFor={field}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={field}
          placeholder={label}
          value={body[field]}
          onChange={(e) => this.handleChange(field, e.currentTarget.value)}
        />
        {error[field] && (
          <p className="mt-1 p-1" style={{ backgroundColor: "#F6F6F2" }}>
            {error[field]}
          </p>
        )}
      </div>
    );
  };

  renderButton = (label) => {
    return (
      <button
        type="submit"
        className="btn item-selected"
        onClick={this.onSubmit}
      >
        {label}
      </button>
    );
  };
}

export default Form;
