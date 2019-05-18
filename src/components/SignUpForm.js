import React, { Component } from "react";
import { Button,FormGroup, FormControl,} from "react-bootstrap";
import axios from 'axios';




const busProfileTypeBtn ={
    textAlign:"center",
    marginLeft:"33px",
    height: "50px",
    width: "150px",
    borderRadius: '40px',
    fontSize:"22px",
    fontWeight:"900",
    backgroundImage:'radial-gradient(circle, blue, lightblue 1%, blue)',
    backgroundColor:"#cec1a1"
  }
  const devProfileTypeBtn ={
    textAlign:"center",
    marginLeft:"33px",
    height: "150px",
    width: "150px",
    borderRadius: '75px',
    fontSize:"22px",
    fontWeight:"900",
    color:'black',
    backgroundImage:'url(/images/developerSignUpImg.jpg)',
    backgroundPosition: 'center'
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
    minHeight: "30px",
    maxHeight: '30px',
    marginBottom: "10px",
    textAlign: 'center',
    borderRadius:"15px",
    border:" solid lightgrey 2px"
}
const bttnStyle = {
  height: "30px",
  width: "60px",
  fontSize: "15px",
  borderRadius:"15px"

}
 
  

class SignUpForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        mode:null, //null developer or business,
        dropdown: 'Developer'
       
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

      axios.get(`/signup/${this.state.email}`).then(response => console.log(response));
    }
  
   onChange = (event) => {
    switch(event.target.value) {
      case "business":
        this.setState({dropdown: event.target.value});
        break;
      case "developer":
        this.setState({dropdown: event.target.value});
        break;
      default: 
       this.setState({dropdown: "unknown"});
       break;
    }
   }

    render() {
      return (
        <div>
           <h1 style={signInStyle}>Sign Up</h1>
          <hr style={lineStyle}></hr>
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
    <select onChange={this.onChange}>
  <option value="developer">Developer</option>
  <option value="business">Business</option>
  
</select>

    
    <Button className ="grow pointer"
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