import React, { Component } from 'react';
import Button from '../../../components/UI/button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';
import {connect} from 'react-redux'
import withErrorHandler from '../../../hoc/WithErrorHandler/withErrorHandler'
import * as actions from '../../../store/actions/index'

class ContactData extends Component {
    state = {
        orderForm:{
            name: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
    
            street: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            zipCode: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'ZIP CODE'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            country: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
      
            email: {
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Mail Address'
                },
                value: '',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            deliveryMethod : {
                elementType:'select',
                elementConfig:{
                    options:[{value:'fastest',displayValue:'Fastest'},
                            {value:'cheapest',displayValue:'Cheapest'}]           
                },
                value: 'fastest',
                valid:true
            },

        },
        formIsValid:false
    }
    checkValidity(value,rules){
        let isValid=false;
        if(!rules){
            return true;
        }
        if(rules.required){
            isValid=value.trim() !== '';

        }
        return isValid;

    }
    orderHandler=(e)=>{
        e.preventDefault();
        console.log(this.props.ings);
       
        const formData={};
        for(let formElement in this.state.orderForm){
            formData[formElement]=this.state.orderForm[formElement].value
        }
        const p=+this.props.price;
        const order = {
            ingredients: this.props.ings,
            price: p.toFixed(2),
            orderData:formData
            
            
        }
        this.props.onOrderBurger(order)
        
    
    }
    changedHandler=(e,inputIdentifier)=>{
        const updatedOrderForm={
            ...this.state.orderForm
        }
        const updatedFormElement={
            ...updatedOrderForm[inputIdentifier]
        }
        updatedFormElement.value=e.target.value
        updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation)
        updatedFormElement.touched=true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid=true;
        for(let inputIden in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIden].valid && formIsValid ;
        }



        this.setState({orderForm:updatedOrderForm,formIsValid:formIsValid})

    }
    render() {
        const formElementsArray =[];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config:this.state.orderForm[key]
            })
        }
        let form=(
            <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement => (
                <Input key={formElement.id} elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value} 
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                changed={(event)=>this.changedHandler(event,formElement.id)} />
            ))}
            
            <Button btnType="Success" disabled={!this.state.formIsValid}> Order </Button>
            </form>
        );
        if(this.props.loading){
            form=<Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
                
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        loading:state.order.loading
    }
}
const mapDispatchToProps = dispatch => {
    return  {
        onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(ContactData,axios));
