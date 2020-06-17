import React, { Component } from 'react';
import '../todos.css';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import AuthenticationService from '../AuthenticationService';


class HeaderComponent extends Component {

    constructor(){
        super();

        this.state = {
            displayBurgerBtnMenu:'none'
        }
    }

    onBurgerButtonClickDisplayMenu = () =>{        

        if(this.state.displayBurgerBtnMenu === 'none'){
            this.setState({displayBurgerBtnMenu:'block'})
        }
        else{
            this.setState({displayBurgerBtnMenu:'none'})
        }        

        console.log('clicking burger button...',this.state)
    }

    render() {

        let display = this.state.displayBurgerBtnMenu;

        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();
        console.log('isUserLoggedIn=',isUserLoggedIn)

        return (
            <div>

               {/**<nav>
                   <ul className='todo-burger-nav'>
                        <li>
                            <MenuIcon className='todo-burger-btn'></MenuIcon>
                            <button icon='MenuIcon' onClick={this.onBurgerButtonClickDisplayMenu}>display burger menu</button>
                        </li>
                   </ul>                   
               </nav>
               <div style={{display: `${display}`}}>
                   <ul className='todo-burger-menu'>                        
                        <li>                        
                            <Link className='router-link' to='/welcome/user/'>Home</Link>                        
                        </li>
                        <li>                        
                            <Link className='router-link' to='/todos'>To-dos</Link>                            
                        </li>                    
                        
                        <li className='todo-navbar-li-last'>                        
                            <Link className='router-link' to='/logout'>Logout</Link>                            
                        </li>
                    </ul>     
               </div>*/}
               <nav>
                <ul className="todo-navbar-hamburger">
                        <li>
                            <div className="hamburger-menu">
                                <input id="menu__toggle" type="checkbox" />
                                <label className="menu__btn" htmlFor="menu__toggle">
                                <span></span>
                                </label>

                                <ul className="menu__box">
                                        <li><Link className='router-link' to='/welcome/user/'>Home</Link></li>
                                        <li><Link className='router-link' to='/todos'>To-dos</Link></li>
                                        <li><Link className='router-link' to='/logout'>Logout</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>           
                </nav>
               <nav>
               

                    <ul className="todo-navbar">                        
                        <li>                        
                            <Link className='router-link' to='/welcome/user/'>Home</Link>                        
                        </li>
                        <li>                        
                            <Link className='router-link' to='/todos'>To-dos</Link>                            
                        </li>                    
                        {/*<li className='todo-navbar-li-last'>                        
                            <Link className='router-link' to='/login'>Login</Link>                           
                        </li>*/}
                        <li className='todo-navbar-li-last'>                        
                            <Link className='router-link' to='/logout'>Logout</Link>                            
                        </li>
                    </ul>                                    
               </nav>
              
            </div>
        );
    }
}
export default HeaderComponent;