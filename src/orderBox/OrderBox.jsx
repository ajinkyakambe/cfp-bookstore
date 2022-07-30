import React from "react";
import './orderbox.scss'
import { Box, Typography, Button,Stack } from "@mui/material";

import OrderService from "_services/OrderService";
import { useNavigate } from 'react-router-dom';

function OrderBox(props) {
    let navigate = useNavigate()
    const onClickingCheckout = () => {
        OrderService.postOrder()
            .then((res) => {
                console.log(res);
                navigate("/OrderPlaced")
            }).catch((err) => {
                console.log(err);
            })
    }

    console.log("Inner Cart book Order",props.cart)

    return (
        <>
       
            <Box className="order-box-one">
                <div className="cart-order-text">Order Summary</div>
            </Box>


            <Stack spacing={2}>
            {
                props.cart.map((singleBook,index) => (
                    <Box className="order-box-two" key={index}>
                        <Box className="order-img-container">
                            <img src={props.BASEURL+singleBook.book.bookLogo} alt={singleBook.bookName} style={{ width: '55%', height: '100%' }} />
                        </Box>
                        <Box className="order-details-container">
                            <Typography component="div" style={{ font: 'normal normal bold 18px Roboto' }}>
                                {singleBook.book.bookName}
                            </Typography>
                            <Typography color="text.secondary" component="div" style={{ font: 'normal normal 14px Roboto' }}>
                                by {singleBook.book.bookAuthor}
                            </Typography>
                            <Typography gutterBottom component="div" style={{ font: 'normal normal bold 16px Roboto' }}>
                                Rs. {singleBook.book.bookPrice*singleBook.quantity}
                            </Typography>

                        </Box>
                    </Box>

                ))
            }
            </Stack>

            <Box className="order-box-three">
                <Button 
                    sx={{padding: '1% 8%',
                    fontSize: '14px!important',
                    backgroundColor: '#3371B5'}} 

                    variant="contained" 
                    className="place-order-button" 
                    onClick={onClickingCheckout}>Checkout</Button>
            </Box>
           
        </>
    )
}

export default OrderBox