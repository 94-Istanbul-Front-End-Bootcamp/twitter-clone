import React, { Component } from 'react'
import { Icon } from '../component/icon';
import { NavButton } from '../component/navButton';
import "./container.css";
import { Link } from "react-router-dom";

const navigations = [
    {
        text: "Home",
        iconName: "home",
        to: "/"
    },
    {
        text: "Explore",
        iconName: "sharp",
        to: "/explore"
    },
    {
        text: "Notification",
        iconName: "bell",
        to: "/notification"
    },
    {
        text: "Message",
        iconName: "email",
        to: "/messages"
    },
    {
        text: "Bookmarks",
        iconName: "bookmark",
        to: "/"
    },
    {
        text: "Lists",
        iconName: "list",
        to: "/"
    },
    {
        text: "Profile",
        iconName: "user",
        to: "/"
    },
    {
        text: "More",
        iconName: "more",
        to: "/"
    },
];

class SideLeft extends Component {

    render() {
        return (
            <div className="side-left">
                <Icon size={40} iconName="twitter" />
                {
                    navigations.map(navigation => {
                        return (
                            <Link to={navigation.to}>
                                <NavButton {...navigation} />
                            </Link>
                        )
                    })
                }
            </div>
        );
    }
}

export default SideLeft;
