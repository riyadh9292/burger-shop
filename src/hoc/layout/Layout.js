import Aux from '../Aux/Aux';
import classes from './layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import { Component } from 'react';
class Layout extends Component{
    state = {
        showSidebar: false
    }
    SideDrawerClosedHandler=()=>{
        this.setState((prevState)=>{
            return {showSidebar:!prevState.showSidebar}
        }
        )
    } 
    render(){
        return (
            <Aux>
            <Toolbar shoSideM={this.SideDrawerClosedHandler}/>
            <SideDrawer open={this.state.showSidebar} closed={this.SideDrawerClosedHandler} />
            <div>Backdrop</div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
            </Aux>
        )
    }
    
}
export default Layout;