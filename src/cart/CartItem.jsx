import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material';

import useStyles from './CartItemStyles';

const CartItem = ({ item , onRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity,book,BASEURL}) => {


  
  console.log("Checking items", item);
  console.log("Checking books:", book);


 return (
    <Card className="cart-item">
      <CardMedia image={BASEURL+item.book.bookLogo}  alt={item.book.bookName}  />
      <CardContent >
      <Typography variant="h6"style={{fontWeight:'bold'}} >{item.book.bookName}</Typography>
       
        <Typography variant="h6"  color='secondary' >₹{item.book.bookPrice*item.quantity}</Typography>
      </CardContent>
      <CardActions >
        <div>
          <Button disabled={item.quantity===1} type="button" size="small" onClick={() =>{
           handleDecreaseQuantity(item.cartId)
           } }>-</Button>
           
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button disabled={item.quantity===book.bookQuantity} type="button" size="small" onClick={() =>{
           handleIncreaseQuantity(item.cartId)

           } } >+</Button>
        </div>
        <Button  variant="contained" type="button" color='secondary' onClick={() => onRemoveFromCart(item.cartId)}>Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;