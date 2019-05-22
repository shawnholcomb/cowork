import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from "react-router";
import Modal from "./Modal"
import axios from "axios";




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
      compensation: 0,
      description: "",


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

    axios.get(`/createjob/${this.state.title}/${this.state.description}/${this.state.compensation}`).then(response => {
      console.log(response);
    })

    axios.get('/getjobs').then(response => {
      console.log(response.data);
    });
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
          <FormGroup controlId="compensation" bssize="large">
            <FormControl
              value={this.state.compensation}
              onChange={this.handleChange}
              placeholder="Salary"
              type="text"
              style={inputStyle}
            />
          </FormGroup>
          <FormGroup controlId="description" bssize="large">
            <FormControl
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="description"
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
