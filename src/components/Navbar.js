import React, { Component } from 'react'; 
import '../stylesheets/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import HamburgerButton from './HamburgerButton';
import MobileMenu from './MobileMenu';
import { NavLink } from 'react-router-dom'; 

class Navbar extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            visible: false
        };
         
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    handleMouseDown(e) {
        this.toggleMenu();
     
        console.log("clicked");
        e.stopPropagation();
      }
      
    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        return (
            <div class="top-navbar"> 
                <div id="nav-button"> 
                    <HamburgerButton handleMouseDown={this.handleMouseDown}/>
                </div> 
                <MobileMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
                <MobileMenu />
                <span id="text-logo"><NavLink id='text-logo' to='/'> NK </NavLink></span>
                <div class='nav-menu-desktop'>
                    <NavLink to='/products'> shop </NavLink>
                    <a href='localhost:3000'> affiliates </a>
                    <a href='localhost:3000'> articles </a>
                    <a href='localhost:3000'> help </a>
                </div>
                <div class="navbar-icons"> 
                    <FontAwesomeIcon id="FAIcon" icon={faUserCircle} />
                    <FontAwesomeIcon id="FAIcon" icon={faShoppingCart} />
                </div> 
                {window.friconix_update()}
            </div> 
        )
    }
}

export default Navbar