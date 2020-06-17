import React, { Component } from 'react';

//import custom components:
import LoginComponent from './LoginComponent.js';
import LogoutComponent from './LogoutComponent.js';
import WelcomeComponent from './WelcomeComponent.js';
import ErrorComponent from './ErrorComponent.js';
import ListTodosComponent from './ListTodosComponent.js';

import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import HeaderComponent from './outline-components/HeaderComponent.js';
import FooterComponent from './outline-components/FooterComponent.js';
import './outline-components/bootstrap.css';
import './todos.css';

import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.js';

class TodoApp extends Component {


    submitLogin = () =>{
        console.log('##### inside submitLogin()....');
    }

    render() {
        return (
            <div className='todo-app'>      
                    
                    <div className='todo-container'>
                        <Router>

                            <div className='todo-header'>
                                
                            </div>

                            <div className='todo-cover'>
                                <Switch>
                                    <Route path='/' exact component={LoginComponent} />
                                    <Route path='/login' component={LoginComponent} />
                                    <AuthenticatedRoute path='/welcome/:name' component={WelcomeComponent} />
                                    <AuthenticatedRoute path='/todos' component={ListTodosComponent} />
                                    <AuthenticatedRoute path='/logout' component={LogoutComponent} />
                                    <Route component={ErrorComponent} />
                                </Switch> 
                            </div>
                                
                            <div className='todo-footer'>
                                <FooterComponent />
                            </div>                      
                        </Router>    
                
                    </div>

                
                            
            </div>
        );
    }
}
export default TodoApp;