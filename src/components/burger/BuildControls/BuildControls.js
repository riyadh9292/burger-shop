import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl'
const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]

const BuildControls = (props) => {

     return (
        <div className={classes.BuildControl}>
            <p>Price: {props.price.toFixed(2)}</p>
            {controls.map(ctl => <BuildControl disabledInfo={props.disabledInfo[ctl.type]} type={ctl.type} add={()=>props.add(ctl.type)} remove={()=>props.remove(ctl.type)} key={ctl.label} label={ctl.label} /> )}
            <button disabled={!props.purchaseAble} className={classes.OrderButton} onClick={props.ordered}>ORDER NOW</button>


            
        </div>
    );
}

export default BuildControls;
