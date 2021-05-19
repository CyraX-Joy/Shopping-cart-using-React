import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle,  AiFillDelete} from "react-icons/ai";

class CartItem extends React.Component {
    constructor() {
        // Everytime we are adding Contructor to our classes in react, we
        // we need to add super() (Calling parent class)
        super();
        this.state = {
            price: 9999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        /* Binding - (If we have multiple event handler we can bind over here i.e Constructor.)
        Or can use arrow function instead of normal ones.
        this.increaseQuantity = this.increaseQuantity.bind(this); 
        */
    }
    // Arrow function will automatically bind the instance with the value
    decreaseQuantity = () => {
        // As we don't want the quantity to be less 0
        // const qty = this.state.qty; or
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState) =>{
            return{
                qty: prevState.qty - 1
            }
        });
    } 
    increaseQuantity = () => {
        // console.log('this.state', this.state);
        // First Form - if we don't need prevState
        // this.setState({
        //     qty: this.state.qty+1
        // })
        // Second Form (Function)- if need to modify prevState
        this.setState((prevState)=>{
            return{
                qty: prevState.qty + 1
            }
        }, ()=>{
            console.log(this.state.qty); 
        });
    }
    render() {
        // this.setState({qty: this.state.qty +1 }); we can't use setState inside render
        // Because it again invoke render() and again ... (Infinite loop) leads to stack overflow. 

        // console.log('render');
        //Grabbing the values from this.state ( De-Structure )
        const { title, price, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image }/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25} }> {title} </div>
                    <div style={ {color : '#777' } }> Rs:{price} </div>
                    <div style={ {color : '#777' } }> Quantity: {qty} </div>
                    <div className="cart-item-actions">
                        {/*button*/}
                        {/* <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620055713~hmac=19e0e8f32b3b452d5445819cc4af6e89"
                            onClick={this.increaseQuantity}
                        /> */}
                        <div className="action-icons" onClick={this.increaseQuantity} >
                            <AiFillPlusCircle />
                        </div>
                        <div className="action-icons" onClick={this.decreaseQuantity}>
                            <AiFillMinusCircle />
                        </div>
                        <div className="action-icons" onClick={this.decreaseQuantity}>
                            <AiFillDelete />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;