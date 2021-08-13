import React, { Component } from "react"; 
import '../stylesheets/MenuItem.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

class MenuItem extends Component {


    media_content = (props) => {
        if(props.closing) {
            return null; 
        }
        else if(props.icon_class === '') {
            return <img style={{backgroundColor: props.image_background}} class="slide-media" alt="" src={props.image_url} />; 
        }
        return <i class="slide-media" id="menu-item-icon" class={props.icon_class}></i>; 
    }

    sub_menu_button = (props) => {
        if(!props.handleSubMenuMouseDown || props.closing) {
            return null; 
        }
        else return <button id="open-icon">
                        <i class="fi-xnsrxl-chevron-solid fi-size-xl"></i>
                    </button>; 
    }

    menu_close_icon = (props) => {
        if(!props.closing) {
            return null; 
        }
        else return <button id="close-icon">
                        <i class="fi-xnsrxl-chevron-solid fi-size-xl fi-left"></i>
                    </button>;
    }

    render() {
        return (
            <div class={'menu-item-container ' + this.props.extraContainerClass}>
                <div onMouseDown={this.props.handleSubMenuMouseDown} class={'menu-item ' + this.props.extra_class}>
                    {this.menu_close_icon(this.props)}
                    <a class="slide-link" href={this.props.label_link}>
                        {this.media_content(this.props)}
                        <span id="label"> {this.props.label} </span>
                    </a>
                    {this.sub_menu_button(this.props)}
                </div>
            </div>
        );
    }; 
}; 

MenuItem.defaultProps = {
    label: "Menu Item", 
    label_link: "#", 
    image_url: "https://cdn.shopify.com/s/files/1/0369/2580/0493/files/mode-thumbnail_40x40@2x.png?v=1620942472", 
    image_background: 'blue', 
    icon_class: '',
    extra_class: '',
    extraContainerClass: '', 
    handleSubMenuMouseDown: null, 
    closing: false
}; 

export default MenuItem; 