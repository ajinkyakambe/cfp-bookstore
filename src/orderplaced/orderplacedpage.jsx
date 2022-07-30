import React from 'react';
import { Box, Button,Paper,Container } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export {OrderPlaced}

const OrderPlaced = (props) => {
    let navigate = useNavigate();
	const OnClickGoToShop=()=>{
		navigate("/bookstorehome");
	}

    const success = 'http://localhost:3000/order/SuccessPage.jpg'

	return (
		
        <Container maxWidth="md">
            <div className="order" style={{paddingTop:"50px"}}>
            
			<a href="/home">
                <img src={success} class="orderlogo"  alt="confirmationimage" style = {{margin: '0 auto',
display: 'block'}} />
			</a>
                <div className="hurray">hurray!!! your order is confirmed</div>
                <div className="hurray" >the order id {props.orderid} is save the order id for</div> 
                <div className="hurray">further communication..</div>

                <br/> <br/> <br/> <br/>



   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Email Us</TableCell>
            <TableCell align="right">Contact Us</TableCell>
            <TableCell align="right">Address</TableCell>           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              
              <TableCell align="right"> admin@bookstore.com</TableCell>
              <TableCell align="right">+954844564456 </TableCell>
              <TableCell align="right"> opp to BDA complex, <br/> near Kumarakom restaurant,  <br/>HSR Layout, Bangalore 560034 </TableCell>
              
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>


                {/* //CSS for continue shopping */}
                <Box className="order-final-box">
                    <Button 
                    sx={{padding: '1% 8%',
                    fontSize: '14px!important',
                    backgroundColor: '#3371B5'}} 

                    variant="contained" 
                    className="place-order-button" 
                    onClick={OnClickGoToShop}>CONTINUE SHOPPING !!!</Button>
           		 </Box>	
            </div>
            
            </Container>
		
	);
};

