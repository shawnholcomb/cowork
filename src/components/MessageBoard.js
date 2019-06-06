import React from 'react';
import axios from 'axios';
import Message from './Message';

const styles = {
    container: {
        height: 620,
        position: 'relative',
        padding: '0 4px 0 0',
        overflowY: 'scroll',
        borderRadius: 10
    }
}

class MessageBoard extends React.Component {
    state = {
        messages: []
    }

    componentDidMount() {
        axios.get('/getmessages').then(response => { 
            const messages = response.data
            this.setState({ messages })
        });
    }

    render() {
        return (
            <div style={styles.container}>
                {this.state.messages.map(value => (
                <Message 
                    name={value.name}
                    image={value.image}
                    date={value.messageDate}
                    message={value.message}
                />
                ))}
            </div>
        );
    }
}

export default MessageBoard;