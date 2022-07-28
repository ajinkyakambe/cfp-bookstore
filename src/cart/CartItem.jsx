import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia,IconButton,Box } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CartItem = ({ item , onRemoveFromCart, handleIncreaseQuantity, handleDecreaseQuantity,book,BASEURL}) => {


 return (
  <Card sx={{ display: 'flex',boxShadow: 'none' }}>
  <CardMedia 
   component="img"
   sx={{ width: '86px', padding:' 25px 41px 50px 0',objectFit: 'fill',backgroundSize: 'contain' }}
   image={BASEURL+item.book.bookLogo}
   alt={item.book.bookName}
 />
 <Box sx={{ display: 'flex', flexDirection: 'column' }}>     
   <CardContent sx={{ flex: '1 0 auto' }}>
     <Typography component="div" variant="h6" >
       {item.book.bookName}
     </Typography>
     <Typography variant="subtitle2" color="text.secondary" component="div">
       by {item.book.bookAuthor} 
     </Typography>
     <Typography component="div" variant="h6">
       ₹{item.book.bookPrice*item.quantity}
     </Typography>
   </CardContent>
   
   <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
     <IconButton disabled={item.quantity===1} type="button" size="small" onClick={() =>{
           handleDecreaseQuantity(item.cartId)}}>
     <RemoveCircleOutlineIcon/> 
     </IconButton>
     
     <Typography sx={{border: '1px solid #DBDBDB',padding: '0 16px'}} >{item.quantity}</Typography>
     
     <IconButton disabled={item.quantity===book.bookQuantity}  size="small" onClick={() =>{
           handleIncreaseQuantity(item.cartId) } }>
      <AddCircleOutlineIcon/>
     </IconButton>
     <Button sx={{color:'#0A0102'}} variant="text" type="button" onClick={() => onRemoveFromCart(item.cartId)}>Remove</Button>
   </Box>
 </Box>     
 
 
        
     </Card>
  );
};

export default CartItem;