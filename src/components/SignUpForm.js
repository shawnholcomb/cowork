import React, { Component } from "react";
import { Button,} from "react-bootstrap";
import BusinessSignUp from "./BusinessSignUp";
import DeveloperSignUp from "./DeveloperSignUp";



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
 
  

class SignUpForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: "",
        mode:null, //null developer or business
       
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
           <h1 style={signInStyle}>Sign Up</h1>
          <hr style={lineStyle}></hr>
          <form onSubmit={this.handleSubmit} style={formStyle}></form>
          <Button onClick={()=> this.setState({mode:"business"}) } className ="grow pointer"
              block
              bssize="large"
              type="business"
              style={busProfileTypeBtn}
            >
              Business
            </Button>
            <Button onClick={()=> this.setState({mode:"developer"}) } className ="grow pointer"
              block
              bssize="large"
              type="business"
              style={devProfileTypeBtn}
            >
              Developer
            </Button>
{this.state.mode=== "business"? < BusinessSignUp/> : this.state.mode==="developer"? <DeveloperSignUp />: null }
            
        </div>
      );
    }
  }
  






  export default SignUpForm;