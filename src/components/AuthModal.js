import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from "react-router";
import SignUpForm from "./SignUpForm";
import Modal from "./Modal";

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

const createStyle = {
  textAlign: "center"
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
  };

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
            className="grow pointer"
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

class AuthModal extends React.Component {
  state = {
    isSignIn: true
  };

  render() {
    return (
      <React.Fragment>
        {
          <Modal
            isopen={
              this.props.location.state &&
              this.props.location.state.isAuthModalOpen
            }
          >
            {this.state.isSignIn ? <SignInForm /> : <SignUpForm />}
            {this.state.isSignIn ? (
              <h3 style={createStyle}>
                Not registered?{" "}
                <a
                  className=" grow pointer f4 fw6 db dark-blue no-underline underline-hover"
                  onClick={() => this.setState({ isSignIn: false })}
                >
                  Create an account
                </a>
              </h3>
            ) : (
              <h3 style={createStyle}>
                Already have an account?{" "}
                <a
                  className=" grow pointer f4 fw6 db dark-blue no-underline underline-hover"
                  onClick={() => this.setState({ isSignIn: true })}
                >
                  Sign In
                </a>
              </h3>
            )}
          </Modal>
        }
      </React.Fragment>
    );
  }
}

export default withRouter(AuthModal);
