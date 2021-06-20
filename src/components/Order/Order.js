import React from 'react';
import classes from './Order.module.css'
const Order = (props) => {
    const ingred=[];
    for (let ingre in props.ingredients){
        ingred.push({name:ingre,amount:props.ingredients[ingre]})
    }
    const inOut=ingred.map(ig=>{
        return <span style={{textTransform:'capitalize',display:'inline-block',margin:'0 8px',border:'1px solid #ccc',padding:'5px'}} key={ig.name}>{ig.name} ({ig.amount})</span>
    })
    return (
        <div className={classes.Order}> 
            <p>Ingredients : {inOut}</p>
            <p>Price :<strong> ${props.price.toFixed(2)} </strong></p>
        </div>
    );
}

export default Order;
