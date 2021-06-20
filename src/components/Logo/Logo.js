import React from 'react';
import logo from '../../../src/assests/image/logo.png'
import classes from './Logo.module.css'

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="myBurger"/>
        </div>
    );
}

export default Logo;
