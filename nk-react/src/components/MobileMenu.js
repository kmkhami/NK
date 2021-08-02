import React, { Component } from "react"; 
import MenuItem from "./MenuItem";
import '../stylesheets/MobileMenu.css'; 

class MobileMenu extends Component {
    render() {
        var visibility = "hide";
     
        if (this.props.menuVisibility) {
          visibility = "show";
        }
        
        return (
            <div class="sliding-flexbox" className={visibility} id="flyoutMenu"> 
                <div id='flyout-nav'>
                    <div id="flyout-nav-items"> 
                        <h2><a href="#">Home</a></h2>
                        <MenuItem />
                        <h2><a href="#">Contact</a></h2>
                        <h2><a href="#">Search</a></h2>
                    </div>
                    <div id="flyout-nav-fixed"> 
                        <h2><a href='#'> test </a></h2>
                    </div> 
                </div> 
                <div id="flyout-close" onMouseDown={this.props.handleMouseDown}>
                    <i id="FC-times" class="fi-xnluxl-times"></i>
                </div>
            </div>
        );
    }
}

export default MobileMenu; 