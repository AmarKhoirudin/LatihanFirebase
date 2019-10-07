import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const INTIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INTIAL_STATE };
  }

  onsubmit = e => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INTIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    e.preventDefault();
  };

  onChange = e => {
    this.state({ [e.target.name]: e.target.value });
  };
  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password "
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password "
        />
        <button disabled={isvalid} type="submit">
          Reset MY Password
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);
