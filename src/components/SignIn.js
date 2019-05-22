import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import ProfilePage from "../pages/ProfilePage";
import axios from 'axios';

const styles = {
  signInStyle: {
    margin: 20,
    textAlign: "center"
  },
  lineStyle: {
    width: 320,
    textAlign: "center",
    marginTop: 20,
    backgroundColor: "#0075e3"
  },
  formStyle: {
    margin: "0 auto",
    marginTop: 40
  },
  inputStyle: {
    fontSize: 20,
    width: '100%',
    height: 40,
    marginBottom: 20,
    textAlign: "left"
  },
  bttnStyle: {
    height: 30,
    width: 60,
    fontSize: 15
  }
}


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
        <h1 style={styles.signInStyle}>Sign In</h1>
        <hr style={styles.lineStyle} />
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
          >
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
