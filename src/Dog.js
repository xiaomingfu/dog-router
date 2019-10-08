import React, { Component } from 'react';
import './Dog.css';

class About extends Component {
    render() {

        return (
            <div className="Dog">
                <h1>Dog!!!</h1>
                <h2>The dog name is: {this.props.name}</h2>
                <div className="Dog-img">
                    <img src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                </div>
            </div>
        )

    }
}

export default About;