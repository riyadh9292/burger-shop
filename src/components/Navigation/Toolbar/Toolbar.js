import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../../UI/button/Button'
import SideMenuToggle from '../SideDrawer/Toggle/SideMenuToggle';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <SideMenuToggle clicked={props.shoSideM} /> 
            <div className={classes.Logo}><Logo/></div>
            
            <nav className={classes.Desktop}>
                <NavigationItems/>

            </nav>
        </header>
    );
}

export default Toolbar;
