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
            price: 27999, 
            title: "Apple Ipad 8th gen", 
            qty: 1, 
            img: "" 
        },
        { 
            id: 2, 
            price: 15999, 
            title: "Apple Watch 3 42mm", 
            qty: 2, 
            img: "" 
        },
        { 
            id: 3, 
            price: 79999,
            title: "Iphone 12 Pro 128GB", 
            qty: 4, 
            img: "" 
        },
        {
          id: 4,
          price: 41999,
          title: "Apple Over-the-Ear Headphones",
          qty: 1,
          img: "",
        },
        {
          id: 5,
          price: 119999,
          title: "Apple Macbook Air 512GB",
          qty: 2,
          img: "",
        },
        { 
            id: 6, 
            price: 17999, 
            title: "Apple Airpods 2", 
            qty: 4, 
            img: "" 
        },
        { 
            id: 7, 
            price: 7999, 
            title: "Apple Pencil 2", 
            qty: 1, 
            img: "" 
        },
        {
          id: 8,
          price: 599,
          title: "Apple Itunes Membership Monthly",
          qty: 5,
          img: "",
        },
      ],
    };
  }
  render() {
    const { Items } = this.state;
    return (
      <div className="cart">
        {Items.map((item) => {
          return (<CartItem 
                   item={item} 
                   key={item.id} 
                 />);
        })}
      </div>
    );
  }
}

export default Cart;
