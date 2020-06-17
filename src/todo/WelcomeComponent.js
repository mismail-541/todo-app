import React, { Component } from 'react';
import './todos.css';

import HeaderComponent from './outline-components/HeaderComponent.js';

import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';

class WelcomeComponent extends Component {

    render() {
        return (
            <div>
            
            <HeaderComponent/>
            
            <div>
            <p><br></br>
            Welcome to To-do App {this.props.match.params.name}!
            
            
            You can manage your todos <Link className='welcome-todo-link' to = '/todos'>here</Link> or choose 'to-dos' from the navigation bar
            </p>
            </div>
            
            
            </div>
        );
    }
}

export default WelcomeComponent;