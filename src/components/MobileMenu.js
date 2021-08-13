import React, { Component } from "react"; 
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
import '../stylesheets/MobileMenu.css'; 

class MobileMenu extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            subVisible: false
        };
         
        this.handleSubMenuMouseDown = this.handleSubMenuMouseDown.bind(this);
        this.toggleSubMenu = this.toggleSubMenu.bind(this);
    }
    
    handleSubMenuMouseDown(e) {
        this.toggleSubMenu();
     
        console.log("clicked");
        e.stopPropagation();
      }
      
      toggleSubMenu() {
        this.setState({
            subVisible: !this.state.subVisible
        });
    }

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
                        <MenuItem label="about" image_background="#FC2B2B" handleSubMenuMouseDown={this.handleSubMenuMouseDown}/>
                        <SubMenu handleSubMenuMouseDown={this.handleSubMenuMouseDown} menuVisibility={this.state.subVisible}/>
                        <MenuItem label="contact" image_background="#00ACCC" />
                        <MenuItem label="search" image_background="#9EBF00" />
                    </div>
                    <div id="flyout-nav-fixed"> 
                        <MenuItem extra_class="no-border" icon_class="fi-xnsuxl-dot-information fi-2x icon" label="help" />
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