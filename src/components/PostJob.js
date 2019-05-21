import React, { Component, View } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import AuthModal from "./AuthModal";

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
const backGroundTest = {
  backgroundColor: "red",
  height: "500px",
  width: "500px"
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      pay: 0,
      desription: "",


    };
  }

  validateForm() {
   
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
        <h1 style={signInStyle}>Post Job</h1>
        <hr style={lineStyle} />
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <FormGroup controlId="title" bssize="large">
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="Job Title"
              onChange={this.handleChange}
              style={inputStyle}
            />
          </FormGroup>
          <FormGroup controlId="pay" bssize="large">
            <FormControl
              value={this.state.pay}
              onChange={this.handleChange}
              placeholder="Salary"
              type="text"
              style={inputStyle}
            />
          </FormGroup>
          <FormGroup controlId="desription" bssize="large">
            <FormControl
              value={this.state.desription}
              onChange={this.handleChange}
              placeholder="desription"
              type="text"
              style={inputStyle}
            />
          </FormGroup>
          <Button
            className="grow pointer"
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="Post "
            style={bttnStyle}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

class PostJob extends React.Component {
  state = {
    isPostJob: true
  };
  renderElement() {
    if (this.state.isPostJob === true)
      return (
        <div style={wrapperStyle}>
          <h1>hello finally working </h1>
        </div>
      );
    return null;
  }

  render() {
    return <React>
    <View>{this.renderElement()}</View>
    </React>;
  }
}

export default withRouter(PostJob);
