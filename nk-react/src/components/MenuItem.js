import React, { Component } from "react"; 
import '../stylesheets/MenuItem.css'; 

class MenuItem extends Component {


    media_content = (props) => {
        if(props.icon_class === '') {
            return <img style={{backgroundColor: props.image_background}} class="slide-media" alt="" src={props.image_url} />; 
        }
        return <i class="slide-media" id="menu-item-icon" class={props.icon_class}></i>; 
    }

    render() {
        return (
            <div>
                <div class={'menu-item ' + this.props.extra_class}>
                    <a class="slide-link" href={this.props.label_link}>
                        {this.media_content(this.props)}
                        <span id="label"> {this.props.label} </span>
                    </a>
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
    extra_class: ''
}; 

export default MenuItem; 