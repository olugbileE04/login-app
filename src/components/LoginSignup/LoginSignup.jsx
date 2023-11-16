import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './LoginSignup.css'


export const LoginSignup = () => {

    const[action , setAction] =useState("Login");
  return (
    <div className='container'>
        <div className='header'>
<div className="text">{action}</div>
<div className="underline"></div>
        </div>
        <div className="inputs">
            {action ==="Login" ? <div></div> :<div className="input">
                <FontAwesomeIcon className='icon' icon={faUser} />
                <input type="text" placeholder="Name" />
            </div>}
            
            <div className="input">
                <FontAwesomeIcon className='icon' icon={faEnvelope} />
                <input type="text" placeholder="Email Id" />
            </div>
            <div className="input">
                <FontAwesomeIcon className='icon' icon={faLock} />
                <input type="password" placeholder="password" />
            </div>
        </div>
        {action === "Sign Up"? <div></div> : <div className="forgot-password">Lost Password?  <span>Click Here</span></div>}
       
        <div className="submit-container">
            <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("sign Up")}}>Sign up</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>login</div>
        </div>
    </div>
  )
}
