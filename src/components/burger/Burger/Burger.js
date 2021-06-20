import React from 'react';
import classes from './Burger.module.css';
import BurgerIngre from '../burgerIngre/BurgerIngre';
const Burger = (props) => {
    let transformedIngre = Object.keys(props.ingredients)
    .map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,index)=>{
            return <BurgerIngre key={igkey+index} type={igkey} />
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngre.length===0){
        transformedIngre=<p>add some ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngre type="bread-top"/>
            {transformedIngre}
            <BurgerIngre type="bread-bottom"/>
            
        </div>
    );
}

export default Burger;
