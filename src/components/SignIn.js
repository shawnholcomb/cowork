import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import ProfilePage from "../pages/ProfilePage";
import axios from 'axios';

const signInStyle = {
  margin: "20 auto",
  textAlign: "center"
};
const lineStyle = {
  width: "320px",
  textAlign: "center",
  marginTop: "20px",

  backgroundColor: "#0075e3"
};
const formStyle = {
  margin: "0 auto",
  textAlign: "center",
  marginTop: "40px"
};
const inputStyle = {
  fontSize: "20px",
  width: "250px",
  height: "40px",
  marginBottom: "20px",
  textAlign: "center"
};
const bttnStyle = {
  height: "30px",
  width: "60px",
  fontSize: "15px"
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios.get(`/signin/${this.state.email}/${this.state.password}`).then(success => {
      if(success.data) window.location.href="/profile";
      else {}
    });

  }

  render() {
    return (
      <div>
        <h1 style={signInStyle}>Sign In</h1>
        <hr style={lineStyle} />
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <FormGroup controlId="email" bssize="large">
            <FormControl
              type="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange}
              style={inputStyle}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              type="password"
              style={inputStyle}
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
            style={bttnStyle}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
