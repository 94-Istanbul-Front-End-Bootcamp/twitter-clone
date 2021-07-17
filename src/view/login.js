import React, { useState } from "react";
import { Icon } from '../component/icon';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        fetch('userData.json')
            .then(response => {
                return response.json();
            })
            .then(users => {
                let findUser = users.find(user => user.username === username && user.password === password);
                if (findUser !== undefined) {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("user", JSON.stringify(findUser));
                } else {
                    alert("Kullanıcı bulunamadı.");
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="login-wrapper">
            <form className="login-form">
                <div className="login-icon-wrapper">
                    <Icon size={50} iconName="twitter" color="#1DA1F2" />
                </div>
                <div>
                    <input
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="user-name-input"
                        type="text"
                        placeholder="username" />
                </div>
                <div>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="password-input"
                        type="password"
                        placeholder="password" />
                </div>
                <button onClick={handleLogin} className="login-submit-button" type="button">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;