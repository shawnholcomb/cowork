import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import BusinessSignUp from "./BusinessSignUp";
import DeveloperSignUp from "./DeveloperSignUp";
import SignInForm from './SignIn';

const wrapperStyle = {
  backgroundColor: "white",
  border: "2px blue solid",
  width: "400px",
  minHeight: "400px",
  margin: "0 auto",
  borderRadius: "10px",
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%) translateX(-50%)",
  left: "50%"
};
const exitBtnStyle = {
  height: "30px",
  width: "30px",
  borderRadius: "10px",
  position: "relative",
  right: "-385px",
  backgroundColor: "red",
  color: "white",
  fontWeight: "900",
  fontSize: "15px"
};

const createStyle = {
  textAlign: "center"
};

class AuthModal extends React.Component {
  state = {
    isSignIn: false
  };

  render() {
    return (
      <React.Fragment>
        {this.props.location.state &&
          this.props.location.state.isAuthModalOpen && (
            <div className="Login" style={wrapperStyle}>
              <Link
                to={{ state: { isAuthModalOpen: false } }}
                style={exitBtnStyle}
              >
                ×
              </Link>

              {this.state.isSignIn ? <SignInForm /> : <SignUpForm />}
              {this.state.isSignIn ? (
                <h3 style={createStyle}>
                  Not registered?{" "}
                  <a
                    className="pointer f4 fw6 db dark-blue no-underline underline-hover"
                    onClick={() => this.setState({ isSignIn: false })}
                  >
                    Create an account
                  </a>
                </h3>
              ) : (
                <h3 style={createStyle}>
                  Already have an account?{" "}
                  <a
                    className="pointer f4 fw6 db dark-blue no-underline underline-hover"
                    onClick={() => this.setState({ isSignIn: true })}
                  >
                    Sign In
                  </a>
                </h3>
              )}
            </div>
          )}
      </React.Fragment>
    );
  }
}

export default withRouter(AuthModal);
