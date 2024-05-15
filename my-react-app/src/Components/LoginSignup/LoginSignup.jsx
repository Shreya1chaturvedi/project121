import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assests/person.png';
import email_icon from '../Assests/email.png';
import password_icon from '../Assests/password.png';

const LoginSignup = () => {
    const [action, setAction] = useState("Signup"); // Set initial state to "Signup"

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : // Use null to omit rendering
                    <div className="input">
                        <img src={user_icon} alt="user" />
                        <input type="text" placeholder="Username" />
                    </div>
                }

                <div className="input">
                    <img src={email_icon} alt="email" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="password" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Signup" ? 
                <div className="forgot-password">Lost password?<span>Click here</span></div>
                : null
            }
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Signup") }}>Sign up</div>
                <div className={action === "Signup" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
