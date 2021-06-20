import React from 'react';
import Burger from '../../burger/Burger/Burger'

import Button from '../../UI/button/Button'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1> we hope it tastes well</h1>
            <div style={{width:'100%',margin:'auto'}}>
                <Burger ingredients={props.ingredients} />

            </div>
            <Button btnType="Danger" clicked={props.onCheckoutCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.onCheckoutContinue}>Continue</Button>
            
        </div>
    );
}

export default CheckoutSummary;
