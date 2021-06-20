import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/burger/Burger/Burger'
import BuildControls from '../../components/burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';
import {connect} from 'react-redux'
import * as burgerBuilderActions from '../../store/actions/index'



class BurgerBuilder extends Component {
    state={
        Ordered:false,
        loading:false
    }
    componentDidMount() {
        this.props.onInitIngredients()
    }
   
    
    updateOrderNow(ingredients){
       
        const sum = Object.keys(ingredients)
        .map(igkey=>{
            return ingredients[igkey]
        }).reduce((sum,el)=>{
            return sum+el;
        },0)
        return sum>0 
    }
    OrderHandler=()=>{
        this.setState({Ordered:true})
    }

    
    backdropHanlder=()=>{
        this.setState({Ordered:false})
    }
    continueOrder=()=>{
        //alert('this refers to continue')
    this.props.onInitPurchase()
    this.props.history.push('/checkout')
    }

    render() {
        console.log(this.props.ings);
        let orderSummary = null
        
        const disabledInfo = {
            ...this.props.ings
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        console.log(disabledInfo);
        
        let burger= this.props.error ? <p>Ingredients can't be loaded</p> : <Spinner/>
        
        if(this.props.ings){
            burger= (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls ordered={this.OrderHandler} purchaseAble={this.updateOrderNow(this.props.ings)} price={this.props.price} disabledInfo={disabledInfo} add={this.props.onIngredientAdded} remove={this.props.onIngredientRemove} />
                </Aux>
    
            )
            orderSummary=<OrderSummary price={this.props.price} confirm={this.continueOrder} cancel={this.backdropHanlder} ingredients={this.props.ings} />

        }
        if(this.state.loading){
            orderSummary = <Spinner/>

        }
         
        return (
            <Aux>
                
                <Modal show={this.state.Ordered} backdropHanlder={this.backdropHanlder}>
                {orderSummary}
                </Modal>
                {burger}
               
            </Aux>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName)=> dispatch(burgerBuilderActions.addIngredient(ingredientName)),
        onIngredientRemove: (ingredientName)=> dispatch(burgerBuilderActions.removeIngredient(ingredientName)),
        onInitIngredients: ()=> dispatch(burgerBuilderActions.initIngredient()),
        onInitPurchase: ()=>dispatch(burgerBuilderActions.purchaseInit())
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(BurgerBuilder, axios));
