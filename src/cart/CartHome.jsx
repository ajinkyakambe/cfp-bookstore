import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import useStyles from './CartHomeStyles';



const CartHome = ({ cart , handleRemoveFromCart, handleDecreaseQuantity,handleIncreaseQuantity, handleDeleteAllFromCart,books,BASEURL}) => {
  const stylesToApply = useStyles();

  let subtotal = 0;
  cart.map((item) => {
   return subtotal=subtotal+(item.quantity*item.book.bookPrice);
  })

 
  console.log("Is cart empty?",cart.length);


  const renderEmptyCart = () => (     
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link  to="/bookstorehome"> start adding some</Link>!
    </Typography>
  );

 
 
  const renderCart = () => (
   
    <>   
      <Grid container spacing={4}>
        {cart.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.cartId}>
           
            <CartItem book={books.find((item)=> 
              item.bookId===lineItem.book.bookId

          )} item={lineItem}  onRemoveFromCart={handleRemoveFromCart} handleDecreaseQuantity={handleDecreaseQuantity}
									handleIncreaseQuantity={handleIncreaseQuantity} BASEURL={BASEURL} />
          </Grid>
        ))}
      </Grid>
      <div >
      <Typography variant="h5" >Subtotal : <b >₹{subtotal}</b></Typography>
        <div>
          <Button  size="large" type="button" variant="contained" color="secondary" onClick={() => handleDeleteAllFromCart()} >Empty cart</Button>
          <Button component={Link} to="/checkout" size="large" type="button" variant="contained" >Checkout</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div  />
      <Typography  variant="h5" gutterBottom><b>Your Shopping Cart</b></Typography>
      <hr/>
      { !cart.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};


export {CartHome}
