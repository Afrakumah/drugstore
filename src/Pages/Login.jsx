import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./login.css";
import "../Components/login.css";

import email from "../assets/email.png";
import user from "../assets/user.png";
import pwd from "../assets/padlock.png";

export default function LoginPage() {
  const [action, setAction] = useState("Login");

  return (
    <>
      <div className="container">
        <div className="header">
          {/* <div className="text">Sign Up</div> */}
          <div className="text">{action}</div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user} alt="name" />
              <input type="text" placeholder="Enter Full Name" />
            </div>
          )}

          <div className="input">
            <img src={email} alt="email" />
            <input type="email" placeholder="Enter Email" />
          </div>

          <div className="input">
            <img src={pwd} alt="password" />
            <input type="password" placeholder="Enter Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-pwd">
            Forgot Password? <span>Click Here</span>
          </div>
        )}

        <div className="submit_container">
          <div
            className={action == "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <Link to="/Home">
            <div
              className={action == "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
