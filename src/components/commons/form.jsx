import React, { Component } from "react";

class Form extends Component {
  handleChange = (field, value) => {
    const body = { ...this.state.body, [field]: value };
    this.setState({ body });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.handleSubmit();
  };

  validate = () => {
    const { error } = this.schema.validate(this.state.body);
    return error;
  };

  renderInput = (type, field, label) => {
    return (
      <div className="form-group">
        <label htmlFor={field}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={field}
          placeholder={label}
          value={this.state.body[field]}
          onChange={(e) => this.handleChange(field, e.currentTarget.value)}
        />
      </div>
    );
  };

  renderButton = (label) => {
    return (
      <button
        type="submit"
        className="btn btn-primary item-selected"
        onClick={this.onSubmit}
      >
        {label}
      </button>
    );
  };
}

export default Form;
