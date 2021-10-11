import React from 'react';
import './Header.css';

let HeaderNav = () => {
    return(
        <div>
           <ul>
               <li><a href="#home">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#register">Register</a></li>
               <li><a href="#login">Login</a></li>
           </ul>
        </div>
    );
}

export default HeaderNav;