import React, { Component } from 'react'
import { Icon } from '../component/icon';
import { NavButton } from '../component/navButton';
import "./container.css";

class SideLeft extends Component {
    handleNav = () => {
        console.log("tik");
    }
    
    render() {
        return (
            <div className="side-left">
                <Icon size={40} iconName="twitter" />
                <NavButton text="Home" iconName="home" handleNav={this.handleNav} />
            </div>
        );
    }
}

export default SideLeft;
