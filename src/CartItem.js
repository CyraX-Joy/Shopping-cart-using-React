import React from 'react';

class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 9999,
            title: 'Mobile Phone',
            qty: '1',
            img: ''
        }
        /* Binding - (If we have multiple event handler we can bind over here i.e Constructor.)
        Or can use arrow function instead of normal ones.
        this.increaseQuantity = this.increaseQuantity.bind(this); 
        */
        }
    // Arrow function will automatically bind the instance with the value
    increaseQuantity = () => {
        console.log('this.state', this.state);
    }
    render() {
        //Grabbing the values from this.state
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
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1618901922~hmac=1ec3865e73678fc3001bc0cb967c7cc9"
                            onClick={this.increaseQuantity}
                        />
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1618901846~hmac=a679885032a37d94927d08b3e3df1b6e"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/1345/1345823.svg?token=exp=1618901946~hmac=68dddf6813e0805d45b34ceec0917e72"
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