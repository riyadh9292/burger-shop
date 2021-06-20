import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/button/Button'

const OrderSummary = (props) => {

    const ingreSummary = Object.keys(props.ingredients).map(igkey=> {
        return <li key={igkey}>{igkey} : {props.ingredients[igkey]} </li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ol type="I">
                {ingreSummary}

            </ol>
            <p>Total price is : $<strong> {props.price.toFixed(2)}</strong></p>
            <i>Press continue to checkout</i><br/>
            <Button btnType='Success' clicked={props.confirm}>Continue</Button>
            <Button btnType='Danger' clicked={props.cancel}>Cancel</Button>

        </Aux>
    );
}

export default OrderSummary;
