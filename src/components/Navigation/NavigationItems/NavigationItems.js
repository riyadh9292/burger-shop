import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'
const NavigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem  link='/' > Burger builder </NavigationItem>
            <NavigationItem link='/orders' > Orders </NavigationItem>
            <NavigationItem link='/auth' > Authentication </NavigationItem>
            
            
        </ul>
    );
}

export default NavigationItems;
