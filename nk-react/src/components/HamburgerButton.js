import React, { Component } from "react";
import '../stylesheets/HamburgerButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class HamburgerButton extends Component {
    render() {
        return (
            <button id="bars-icon" onMouseDown={this.props.handleMouseDown}>
                <FontAwesomeIcon id="FA-bars" icon={faBars} />
            </button>
        )
    }
}

export default HamburgerButton; 