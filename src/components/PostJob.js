import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from "react-router";
import Modal from "./Modal"




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


class PostJob extends Component {
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
      <Modal isopen={
        this.props.location.state &&
        this.props.location.state.isPostJob
      }>
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
              type="textarea"
              style={inputStyle}
            />
          </FormGroup>
          <Button
            className="grow pointer"
            block
            bssize="large"
            type="Post "
            style={bttnStyle}
          >
            Login
          </Button>
        </form>
      </Modal>
    );
  }
}



export default withRouter(PostJob);
