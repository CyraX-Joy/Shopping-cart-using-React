import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    // Everytime we are adding Contructor to our classes in react, we
    // we need to add super() (Calling parent class)
    super();
    this.state = {
      Items: [
        { 
            id: 1, 
            price: 599, 
            title: "Apple Ipad 8th gen", 
            qty: 1, 
            img: "" 
        },
        { 
            id: 2, 
            price: 349, 
            title: "Apple Watch 3 42mm", 
            qty: 2, 
            img: "" 
        },
        { 
            id: 3, 
            price: 999,
            title: "Iphone 12 Pro 128GB", 
            qty: 4, 
            img: "" 
        },
        {
          id: 4,
          price: 649,
          title: "Apple Over-the-Ear Headphones",
          qty: 1,
          img: "",
        },
        {
          id: 5,
          price: 1299,
          title: "Apple Macbook Air 512GB",
          qty: 2,
          img: "",
        },
        { 
            id: 6, 
            price: 179, 
            title: "Apple Airpods 2", 
            qty: 4, 
            img: "" 
        },
        { 
            id: 7, 
            price: 89, 
            title: "Apple Pencil 2", 
            qty: 1, 
            img: "" 
        },
        {
          id: 8,
          price: 9,
          title: "Apple Itunes Membership Monthly",
          qty: 5,
          img: "",
        },
      ],
    };
  }
  handleIncreaseQuantity = (product) => {
    //   console.log("Please Increase the Quantity of ", product);
    const { Items } = this.state;
    const index = Items.indexOf(product);
    Items[index].qty += 1;
    this.setState({
        Items
    })
  }
  handleDecreaseQuantity = (product) => {
    //   console.log("Please Increase the Quantity of ", product);
    const { Items } = this.state;
    const index = Items.indexOf(product);
    //We are grabbing the Items from the state and finding the index of the clicked
    //Product and perform the action and setState accordingly.
    console.log(Items[index].qty)
    if(Items[index].qty > 1){
        Items[index].qty -= 1;
        this.setState({
            Items
        })
    }else{
        Items[index].qty = 0;
        this.handleDeleteQuantity(Items[index].id);
    }
  }
  handleDeleteQuantity = (id) => {
      const { Items } = this.state;
      const products = Items.filter((item)=>item.id!=id); // Return array of item after deleting that product
      this.setState({
          Items : products
      })
  }
  render() {
    const { Items } = this.state;
    return (
      <div className="cart">
        {Items.map((item) => {
          return (<CartItem 
                   item={item} 
                   key={item.id}
                   onIncreaseQuantity={this.handleIncreaseQuantity}
                   onDecreaseQuantity={this.handleDecreaseQuantity}
                   onDeleteQuantity={this.handleDeleteQuantity}
                 />);
        })}
      </div>
    );
  }
}

export default Cart;
