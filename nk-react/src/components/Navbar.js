import React, { Component } from 'react'; 
import '../stylesheets/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    render() {
        return (
            <div class="top-navbar"> 
                <span id="text-logo"><a id="text-logo" href="localhost:3000"> NK </a></span>
                <div class='nav-menu'>
                    <a href='localhost:3000'> shop </a>
                    <a href='localhost:3000'> affiliates </a>
                    <a href='localhost:3000'> articles </a>
                    <a href='localhost:3000'> help </a>
                </div>
                <div class="navbar-icons"> 
                    <FontAwesomeIcon id="FAIcon" icon={faUserCircle} />
                    <FontAwesomeIcon id="FAIcon" icon={faShoppingCart} />
                </div> 
            </div> 
        )
    }
}

export default Navbar