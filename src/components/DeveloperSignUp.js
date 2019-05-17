import React, { Component } from "react";
import { Button, FormGroup, FormControl, } from "react-bootstrap";







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



class DeveloperSignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            rePassword: "",
            mode: "business"
        };
    }



    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.password === this.state.rePassword;
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
        if (!this.props.mode === "business") {
            return null
        } else {
            return (
                <div>

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
                        <FormGroup controlId="userName" bssize="large">
                            <FormControl
                                type="text"
                                value={this.state.userName}
                                placeholder="userName"
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
}

export default DeveloperSignUp;