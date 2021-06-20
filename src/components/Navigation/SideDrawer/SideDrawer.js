import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop';
const SideDrawer = (props) => {
    let attClass=[classes.SideDrawer,classes.Close];
    if(props.open){
        attClass=[classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className={attClass.join(' ')}>
      <div className={classes.Logo}><Logo/></div>
             <nav>
            <NavigationItems/>
            </nav>
            
        </div>
        </Aux>
    );
}

export default SideDrawer;
