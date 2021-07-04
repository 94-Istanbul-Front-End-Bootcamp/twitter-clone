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
            <div>
                <Icon size={40} iconName="twitter.svg" />
                <NavButton text="Home" iconName="home.svg" handleNav={this.handleNav} />
            </div>
        );
    }
}

export default SideLeft;
