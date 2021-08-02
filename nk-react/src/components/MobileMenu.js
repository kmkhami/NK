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
                        <MenuItem extra_class="no-border" image_background="#E85D00" label="home" />
                        <MenuItem label="about" image_background="#FC2B2B" />
                        <MenuItem label="contact" image_background="#00ACCC" />
                        <MenuItem label="search" image_background="#9EBF00" />
                    </div>
                    <div id="flyout-nav-fixed"> 
                        <MenuItem icon_class="fi-xnsuxl-dot-information fi-2x icon" label="help" />
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