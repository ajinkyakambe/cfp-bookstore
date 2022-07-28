import React from 'react';
import { Container, Typography, Button, Stack,Box,Card,CardContent} from '@mui/material';
import { Link } from 'react-router-dom';


import CartItem from './CartItem';




const CartHome = ({ cart , handleRemoveFromCart, handleDecreaseQuantity,handleIncreaseQuantity, handleDeleteAllFromCart,books,BASEURL}) => {
  
/**
|--------------------------------------------------
|   // Cart Total Value Count
|--------------------------------------------------
*/
  let subtotal = 0;
  cart.map((item) => {
   return subtotal=subtotal+(item.quantity*item.book.bookPrice);
  })

 /**
 |--------------------------------------------------
 | Render an empty card 
 |--------------------------------------------------
 */

  const renderEmptyCart = () => (     
    <Typography variant="subtitle1">You have no items in your shopping cart,
      <Link  to="/bookstorehome"> start adding some</Link>!
    </Typography>
  );

 
  /**
  |--------------------------------------------------
  | Render the cart when data is available
  |--------------------------------------------------
  */
 
  const renderCart = () => (
   
    <>   
      <Stack spacing={2}>
        {cart.map((lineItem) => (
          <div className="cartBookItem" key={lineItem.cartId}>           
            <CartItem book={books.find((item)=> 
              item.bookId===lineItem.book.bookId
          )} item={lineItem}  
             onRemoveFromCart={handleRemoveFromCart} 
             handleDecreaseQuantity={handleDecreaseQuantity}
						 handleIncreaseQuantity={handleIncreaseQuantity} 
             BASEURL={BASEURL} />
          </div>
        ))}
    </Stack>
   
      

      <div >
      <Typography sx={{margin: '10px 0'}} variant="h6" >Subtotal : <b >₹{subtotal}</b></Typography>
       {/* // checkout Action */}
        <div>
          <Button  size="large" type="button" variant="contained" color="secondary" onClick={() => handleDeleteAllFromCart()} >Empty cart</Button>
          {/* <Button component={Link} to="/checkout" size="large" type="button" variant="contained" >Checkout</Button> */}
        </div>
      </div>


    </>
  );

  return (
    <Container>
     <Box sx={{ minWidth: 275, maxWidth: 745  }}>
      <Card variant="outlined" sx={{borderRadius:0,margin:'7% 0' }}>
      <Box sx={{ width: '100%' }}>
          <div className="cart-text">My Cart ({cart.length})</div>
          <CardContent>
            { !cart.length ? renderEmptyCart() : renderCart() }
          </CardContent>
        </Box>
      </Card>
    </Box>
    </Container>
  );
};


export {CartHome}