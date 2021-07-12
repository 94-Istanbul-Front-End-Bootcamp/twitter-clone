import React from "react";
import {
    Redirect
} from "react-router-dom";
import { Icon } from '../component/icon';

const Login = () => {
    let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (isLoggedIn) {
        <Redirect to="/home" />
    }
    return (
        <div className="login-wrapper">
            <form className="login-form" action="">
                <div className="login-icon-wrapper">
                    <Icon size={50} iconName="twitter" color="#1DA1F2" />
                </div>
                <div>
                    <input className="user-name-input" type="text" placeholder="username" />
                </div>
                <div>
                    <input className="password-input" type="password" placeholder="password" />
                </div>
                <button className="login-submit-button">Login</button>
            </form>
        </div>
    );
}

export default Login;