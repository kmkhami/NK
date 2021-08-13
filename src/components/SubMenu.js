import React, { Component } from "react"; 
import MenuItem from "./MenuItem";
import '../stylesheets/SubMenu.css'; 

class SubMenu extends Component {
    render() {
        var visibility = "sub-hide";
     
        if (this.props.menuVisibility) {
          visibility = "sub-show";
        }
        
        return (
            <div class="sliding-flexbox" className={visibility} id="sub-flyout-menu"> 
                <div id='sub-flyout-nav'>
                    {/* <div id="flyout-close" onMouseDown={this.props.handleSubMenuMouseDown}>
                        <MenuItem extra_class="no-border" icon_class="fi-xnsrxl-chevron-solid" label="back" />
                    </div> */}
                    <div id="flyout-nav-items"> 
                        <MenuItem extraContainerClass="gray-background" extra_class="no-border" handleSubMenuMouseDown={this.props.handleSubMenuMouseDown} closing={true} />
                        <MenuItem extra_class="no-border" image_background="#E85D00" label="sub-home" />
                        <MenuItem label="sub-about" image_background="#FC2B2B" />
                        <MenuItem label="sub-contact" image_background="#00ACCC" />
                        <MenuItem label="sub-search" image_background="#9EBF00" />
                    </div>
                </div> 
            </div>
        );
    }
}

export default SubMenu; 