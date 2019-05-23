import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import axios from "axios";

const signInStyle = {
  padding: 10,
  paddingLeft: 51,
  margin: 0,
  textAlign: "center",
  backgroundColor: "#0075e3",
  borderTopLeftRadius: "7px",
  borderTopRightRadius: "7px",
  color: "white"
};
const lineStyle = {
  width: "99%",
  textAlign: "center",
  marginTop: 0,
  backgroundColor: "#0075e3"
};
const formStyle = {
  margin: "0 auto",
  textAlign: "center",
  marginTop: "40px"
};
const inputStyle = {
  fontSize: 20,
  width: "85%",
  height: 40,
  margin: "10px 30px",
  textAlign: "left",
  paddingLeft: 15,
  backgroundColor: "#e8e8e8",
  border: 0,
  borderRadius: "5px"
};
const termsStyle = {
  marginTop: 10
};
const termsLinkStyle = {
  color:"#00449e",
  marginRight:'5px'

}
const tryThisStyle = {
  width: "50%"
};
const bttnStyle = {
  height: 40,
  width: "85%",
  fontSize: 20,
  margin: "10px 30px",
  backgroundColor: "#0070dd",
  color: "white",
  borderRadius: "5px",
  border: 0
};


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mode: null, //null developer or business,
      dropdown: "Developer",
      rePassword: "",
      terms: false
    };
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.rePassword === this.state.password
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(
        `/signup/${this.state.firstName}/${this.state.lastName}/${
          this.state.email
        }/${this.state.rePassword}/${this.state.dropdown}`
      )
      .then(response => {
        if (response) window.location.href = "/profile";
        else alert("fail");
      });
  };

  onChange = event => {
    switch (event.target.value) {
      case "Business":
        this.setState({ dropdown: event.target.value });
        break;
      case "Developer":
        this.setState({ dropdown: event.target.value });
        break;
      default:
        this.setState({ dropdown: "unknown" });
        break;
    }
  };

  render() {
    return (
      <div>
        <h1 style={signInStyle}>Sign Up</h1>
        <hr style={lineStyle} />
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <FormGroup controlId="firstName" bssize="large">
            <FormControl
              type="text"
              value={this.state.firstName}
              placeholder="First Name"
              onChange={this.handleChange}
              style={inputStyle}
            />
          </FormGroup>
          <FormGroup controlId="lastName" bssize="large">
            <FormControl
              type="text"
              value={this.state.lastName}
              placeholder="last Name"
              onChange={this.handleChange}
              style={inputStyle}
            />
          </FormGroup>

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
          <FormGroup controlId="rePassword" bssize="large">
            <FormControl
              value={this.state.repassword}
              onChange={this.handleChange}
              placeholder="Re-Enter Password"
              type="password"
              style={inputStyle}
            />
          </FormGroup>
          <FormGroup>
            <select style={tryThisStyle} onChange={this.onChange}>
              <option value="Developer">Developer</option>
              <option value="Business">Business</option>
            </select>
          </FormGroup>
          <FormGroup style={termsStyle}>
            <label>
              accept{" "}
              {
                <a style={termsLinkStyle} href="/comingsoon" target="_blank">
                  terms
                </a>
              }
              <input
                name="terms"
                type="checkbox"
                onChange={this.handleInputChange}
              />
            </label>
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

export default SignUpForm;
