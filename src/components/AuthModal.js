import React from "react";
import { withRouter } from "react-router";
import SignUpForm from "./SignUpForm";
import Modal from "./Modal";
import SignInForm from './SignIn';

const createStyle = {
  textAlign: "center",
  margin: 10 
};

const styles = {
  a: {
    margin: 8
  }
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
                  style={styles.a} className=" grow pointer f4 fw6 db dark-blue no-underline underline-hover"
                  onClick={() => this.setState({ isSignIn: false })}
                >
                  Create an account
                </a>
              </h3>
            ) : (
              <h3 style={createStyle}>
                Already have an account?{" "}
                <a
                  style={styles.a} className=" grow pointer f4 fw6 db dark-blue no-underline underline-hover"
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
