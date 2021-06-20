
import React from 'react';
import classes from './sideToggle.module.css'

const SideMenuToggle = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default SideMenuToggle;
