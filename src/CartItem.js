import React from 'react';

class CartItem extends React.Component {
    constructor() {
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
        // First Form - if we dont need prevState
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
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1620055713~hmac=19e0e8f32b3b452d5445819cc4af6e89"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620055755~hmac=9a83fc373b65ecf162673124ce160ea8"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1345/1345874.svg?token=exp=1620055791~hmac=566ce62433c018db4db3504f227ee701"
                        />
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