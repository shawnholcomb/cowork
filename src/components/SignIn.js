import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";

const styles = {
  signInStyle: {
    padding: 10,
    paddingLeft: 51,
    margin: 0,
    textAlign: "center",
    backgroundColor: "#0075e3",
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    color: "white"
  },
  formStyle: {
    margin: "0 auto",
    marginTop: 40
  },
  inputStyle: {
    fontSize: 20,
    width: "85%",
    height: 40,
    margin: "10px 30px",
    textAlign: "left",
    paddingLeft: 15,
    backgroundColor: "#e8e8e8",
    border: 0,
    borderRadius: "5px"
  },
  bttnStyle: {
    height: 40,
    width: "85%",
    fontSize: 20,
    margin: "10px 30px",
    backgroundColor: "#0070dd",
    color: "white",
    borderRadius: "5px",
    border: 0
  }
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

    axios
      .get(`/signin/${this.state.email}/${this.state.password}`)
      .then(success => {
        if (success.data) window.location.href = "/profile";
        else {
        }
      });
  };

  render() {
    return (
      <div>
        <h1 style={styles.signInStyle}>Sign In</h1>
        <form onSubmit={this.handleSubmit} style={styles.formStyle}>
          <FormGroup controlId="email" bssize="large">
            <FormControl
              type="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.handleChange}
              style={styles.inputStyle}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              type="password"
              style={styles.inputStyle}
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
            style={styles.bttnStyle}
            className="grow pointer"
          >
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
