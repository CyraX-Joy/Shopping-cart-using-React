import React from "react";


const NavBar = (props) => {
  return (
    <div style={styles.nav}>
        <div style={styles.heading}> Shopping Cart </div>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://image.flaticon.com/icons/png/512/3594/3594363.png" alt="cart-icon" />
            <span style={styles.cartCount}>8</span>
        </div>
    </div>
  );
}

//Styling for Navigation
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#3bb9e3',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  heading: {
    color: 'white',
    display: 'inline'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: '#2f1478',
    color: 'white',
    borderRadius: '100%',
    padding: '1px 5px',
    position: 'absolute',
    right: 2,
    top: -10
  }
};

export default NavBar;
