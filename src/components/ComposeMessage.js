import React from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import moment from 'moment';
import axios from 'axios';


const styles = {
    messageContainer: {
        border: '1px solid rgba(119,119,119,0.2)',
        borderRadius: '0 0 10px 10px',
        background: '#fafafa',
        width: '100%',
        height: 'auto',
        position: 'absolute',
        bottom: 0,
    },
    composeDiv: {
        padding: '0.8em',
        borderBottom: '1px solid rgba(119,119,119,0.2)',
        background: '#fafafa'
    },
    compose: {
        fontWeight: 'bold',
        margin: 0,
        color: '#777'
    },
    inputDiv: {
        display: 'flex',
        background: '#fff',
        borderRadius: '0 0 10px 10px'
    },
    input: {
        width: '100%',
        height: '3em',
        border: 'none',
        borderRadius: '0 0 10px 10px',
        margin: '1em 0'
    },
    button: {
        background: '#0070dd',
        color: '#fff',
        padding: '0.5em 1em',
        fontFamily: '"Heebo", sans-serif',
        fontSize: '1.2em',
        borderRadius: 10,
        margin: '1.3em 1em'
    },
    profilePic: {
        borderRadius: '50%',
        border: '0.1em solid rgba(119,119,119,0.2)',
        height: 50,
        width: 50,
        margin: '1em'
    },
    form: {
        display: 'flex',
        width: '100%'
    },
    maxwidth: {
        width: '100%'
    }
}

class ComposeMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Shawn H.",
            image: "%2Fimages%2FshawnProfilePic.jpg",
            messageDate: moment().format('MM[%2F]DD[%2F]YYYY hh[%3A]mm A'),
            message: ""
        };
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
                `/postmessage/${this.state.name}/${this.state.image}/${this.state.messageDate}/${this.state.message}`
            )
            .then(response => {
                console.log(response);
                window.location.href = "/profile";
            });

        // axios.get("/getmessages").then(response => {
        //     console.log(response.data);
        // });
    };

    render() {
        return (
            <div style={styles.messageContainer}>
                <div style={styles.composeDiv}>
                    <h4 style={styles.compose}>Compose Message</h4>
                </div>
                <div style={styles.inputDiv}>
                    <img style={styles.profilePic} src="/images/shawnProfilePic.jpg" alt="current profile pic"></img>

                    <form onSubmit={this.handleSubmit} style={styles.form}>
                        <FormGroup controlId="message" bssize="large" style={styles.maxwidth}>
                            <FormControl
                                type="text"
                                value={this.state.message}
                                placeholder="Enter your message here"
                                onChange={this.handleChange}
                                style={styles.input}
                            />
                        </FormGroup>
                        <Button
                            block
                            bssize="large"
                            type="Post "
                            style={styles.button}
                            className="dim pointer"
                        >
                            Share
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
export default ComposeMessage;