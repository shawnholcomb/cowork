import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { withRouter } from "react-router";
import Modal from "./Modal";
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
const descriptionStyle = {
  fontSize: 20,
  width: "85%",
  margin: "10px 30px",
  textAlign: "left",
  padding: 10,
  backgroundColor: "#e8e8e8",
  border: 0,
  borderRadius: "5px"
};
const bttnStyle = {
  height: 40,
  width: "85%",
  fontSize: 20,
  margin: "10px 30px 50px",
  backgroundColor: "#0070dd",
  color: "white",
  borderRadius: "5px",
  border: 0
};

class PostJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      compensation: 0,
      description: ""
    };
  }

  validateForm() { }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .get(
        `/createjob/${this.state.title}/${this.state.description}/${
        this.state.compensation
        }`
      )
      .then(response => {
        console.log(response)
        // window.location.href = "/profile";      
      });

        // axios.get("/getjobs").then(response => {
        //   console.log(response.data);
        // });
      };

    render() {
      return (
        <Modal
          isopen={
            this.props.location.state && this.props.location.state.isPostJob
          }
        >
          <h1 style={signInStyle}>Post Job</h1>
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
                value={
                  this.state.compensation === 0
                    ? "Compensation"
                    : this.state.compensation
                }
                onChange={this.handleChange}
                placeholder={
                  this.state.compensation === 0 ? "Compensation" : null
                }
                type="number"
                style={inputStyle}
              />
            </FormGroup>
            <FormGroup controlId="description" bssize="large">
              <FormControl
                as="textarea"
                rows="6"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Please enter a description about the job"
                type="text"
                style={descriptionStyle}
              />
            </FormGroup>
            <Button
              block
              bssize="large"
              type="Post "
              style={bttnStyle}
              className="grow pointer"
            >
              Post Job
          </Button>
          </form>
        </Modal>
      );
    }
  }

  export default withRouter(PostJob);
