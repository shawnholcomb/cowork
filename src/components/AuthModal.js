import React, { Component } from "react";
import { Button, FormGroup, FormControl, } from "react-bootstrap";
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"
import BusinessSignUp from "./BusinessSignUp"
import DeveloperSignUp from "./DeveloperSignUp"

const wrapperStyle = {
  backgroundColor: "beige",
  border: "2px blue solid",
  width: '400px',
  minHeight: '400px',
  margin: "0 auto",
  borderRadius: "10px",
  position: "fixed",
  top: "50%",
  transform: "translateY(-50%) translateX(-50%)",
  left: "50%",


}
const exitBtnStyle = {
  height: "30px",
  width: "30px",
  borderRadius: '35px',
  position: 'relative',
  right: "-370px",
  backgroundColor: "red",
  color: "white",
  fontWeight: "900",
  fontSize: '15px'
}
const signInStyle = {
  margin: "20 auto",
  textAlign: 'center'

}
const lineStyle = {
  width: "320px",
  textAlign: "center",
  marginTop: "20px",
  height: "2px",
  backgroundColor: 'blue'
}
const formStyle = {
  margin: "0 auto",
  textAlign: 'center',
  marginTop: "40px"
}
const inputStyle = {
  fontSize: "20px",
  width: "250px",
  height: '40px',
  marginBottom: "20px",
  textAlign: 'center',
}
const bttnStyle = {
  height: "30px",
  width: "60px",
  fontSize: "15px"

}
const createStyle = {
  textAlign: 'center'
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
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1 style={signInStyle}>Sign In</h1>
        <hr style={lineStyle}></hr>
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



class AuthModal extends React.Component {
  state = {
    isSignIn: false,
  }


  render() {
    return (
      <React.Fragment>
        {this.props.location.state && this.props.location.state.isAuthModalOpen &&
          <div className="Login" style={wrapperStyle}>
            <Link to={{ state: { isAuthModalOpen: false } }} style={exitBtnStyle}>×</Link>

            {this.state.isSignIn ? <SignInForm /> : <SignUpForm />}
            {this.state.isSignIn ?
              <h3 style={createStyle}>Not registered? <a className="pointer f4 fw6 db dark-blue no-underline underline-hover" onClick={() => this.setState({ isSignIn: false })}>Create an account</a></h3> :
              <h3 style={createStyle}>Already have an account? <a className="pointer f4 fw6 db dark-blue no-underline underline-hover" onClick={() => this.setState({ isSignIn: true })}>Sign In</a></h3>
            }
          </div>}
          
      </React.Fragment>
    )
  }
}



export default withRouter(AuthModal);