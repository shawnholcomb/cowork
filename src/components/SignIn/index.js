import React, { Component } from "react";
import { Button, FormGroup, FormControl,} from "react-bootstrap";

const wrapperStyle = {
backgroundColor: "beige",
border:"2px blue solid",
width: '400px',
height: '400px',
margin: "0 auto",
borderRadius:"10px"
}
const exitBtnStyle={
    height:"30px",
    width:"30px",
    borderRadius:'35px',
    position:'relative',
    right:"-370px",
    backgroundColor:"red",
    color:"white",
    fontWeight:"900",
    fontSize:'15px'
}
const signInStyle ={
    margin:"20 auto",
    textAlign:'center'
    
}
const lineStyle = {
    width:"320px",
    textAlign:"center",
    marginTop:"20px",
    height:"2px",
    backgroundColor:'blue'
}
const formStyle = {
    margin:"0 auto",
    textAlign:'center',
    marginTop: "40px"
   }
const inputStyle = {
    fontSize:"20px",
    width:"250px",
    height: '40px',
    marginBottom:"20px",
    textAlign:'center',
  }
const bttnStyle = {
    height:"30px",
    width:"60px",
    fontSize:"15px"
    
}
const createStyle = {
    textAlign:'center'
}



export default class Login extends Component {
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
      <div className="Login" style={wrapperStyle}>
      <Button style={exitBtnStyle}>
      ×
      </Button>
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
       <h3 style={createStyle}>Not registered? <a href='.'>Create an account</a></h3>
       
      </div>
    );
  }
}