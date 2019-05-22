import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from "react-router";
import SignUpForm from "./SignUpForm";
import Modal from "./Modal";
import SignInForm from './SignIn';

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
