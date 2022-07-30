import React,{ useState} from 'react';
import { Container, Typography, Button, Stack,Box,Card,CardContent} from '@mui/material';
import { Link } from 'react-router-dom';
import AdressBookCart from '../addressBookCart/AdressBookCart'

import OrderBox from '../orderBox/OrderBox'
import CartItem from './CartItem';




const CartHome = ({ cart , handleRemoveFromCart, handleDecreaseQuantity,handleIncreaseQuantity, handleDeleteAllFromCart,books,BASEURL}) => {
  

/**
|--------------------------------------------------
| Cart order and address
|--------------------------------------------------
*/

const [orderDisplay, setOrderDisplay] = useState(false)
const [addressDisplay, setAddressDisplay] = useState(false)




const onClickingOrderButton = () => {
  setAddressDisplay(true)

}
const handleOrderDisplay = () => {
  setOrderDisplay(true)

}



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
          <Button sx={{padding: '1% 8%',
                    fontSize: '14px!important'}}   type="button" variant="contained" color="secondary" onClick={() => handleDeleteAllFromCart()} >Empty cart</Button>
        
        </div>
      </div>


    </>
  );

  return (
    <Container>
     <Box sx={{ minWidth: 275, maxWidth: 745  }}>
      <Card variant="outlined" sx={{borderRadius:0,margin:'5% 0' }}>
      <Box sx={{ width: '100%' }}>
          <div className="cart-text">My Cart ({cart.length})</div>
          <CardContent>
            { !cart.length ? renderEmptyCart() : renderCart() }
          </CardContent>
        </Box>
        {/* comp */}
        <Box className="cart-box-three">
                  { addressDisplay ? null :
                  <Button sx={{padding: '1% 8%',
                    fontSize: '14px!important',
                    backgroundColor: '#3371B5'}} variant="contained" className="place-order-button" onClick={onClickingOrderButton}>Place Order</Button>
              }    
          </Box>
       {/* comp end*/}
      </Card>
      
    </Box>

{/* //Cart box logic */}
    <Box className="cart-address-box">
        <Card variant="outlined" sx={{borderRadius:0,margin:'5% 0' }}>
                        {addressDisplay ? 
                        <AdressBookCart handleOrderDisplay={handleOrderDisplay}  orderDisplay={orderDisplay}/>                   
                            :<Box className="address-box-one">
                                <div className="cart-address-text" style={{ color: 'gray' }}>Customer Details</div>
                            </Box>
                        }
          </Card>
      </Box>
    
{/* // Order box logic */}
      <Box className="cart-order-box">
        <Card variant="outlined" sx={{borderRadius:0,margin:'5% 0' }}>
            <Box sx={{ width: '100%' }}>              
              <CardContent>
                          {orderDisplay ? <OrderBox cart={cart} BASEURL={BASEURL}/> 
                          : <Box className="order-box-one">
                                  <div className="cart-order-text" style={{ color: 'gray' }}>Order Summary</div>
                              </Box>
                          }
                </CardContent>
              </Box>
           </Card>
        </Box>
 </Container>
  );
};


export {CartHome}