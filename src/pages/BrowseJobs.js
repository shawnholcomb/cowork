import React from 'react';
import Footer from '../components/Footer.js';
import DevMenu from '../components/DevMenu.js';
import Ul from '../components/Ul.js';
import JobLi from '../components/JobLi.js';
import axios from 'axios';

const styles = {
    header: {
        maxWidth: 1200,
        marginLeft: 40,
        padding: '0 8px'
    },
    container: {
        background: '#fafafa',
    },
    profContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        background: '#fafafa',
        display: 'flex',
        flexFlow: 'row',
        fontFamily: '"Heebo", sans-serif',
        width: '100%'
    },
    lightWeight: {
        fontWeight: 'normal'
    }
};

class BrowseJobs extends React.Component {
    state = {
        jobs: []
    }

    componentDidMount() {
        axios.get('/getjobs').then(response => { 
            const jobs = response.data
            this.setState({ jobs })
        });
    }

    render() {
        return (
            <div>
                <div style={styles.container}>
                    <div style={styles.profContainer}>
                        <DevMenu />
                        <div>
                            <div style={styles.header}>
                                <h1>Browse Jobs</h1>
                                <h3 style={styles.lightWeight}>Browse current available jobs.  Click on any job to view more details.</h3>
                            </div>
                            <Ul>
                                {this.state.jobs.map(value => (
                                    <JobLi
                                        title={value.title}
                                        description={value.body}
                                        compensation={value.compensation}
                                    />)
                                )}
                            </Ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    };
}

export default BrowseJobs;