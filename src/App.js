import './App.css';
import {useState} from 'react'

import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/layout/Layout';
import Checkout from './containers/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth';
function App() {

  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route path='/checkout' component={Checkout} />
        <Route path='/orders' component={Orders} />
        <Route path='/auth' component={Auth} /> 
        <Route path='/' component={BurgerBuilder} /> 
        
        </Switch>
             
      </Layout>
     
      
     
    </div>
  );
}

export default App;
