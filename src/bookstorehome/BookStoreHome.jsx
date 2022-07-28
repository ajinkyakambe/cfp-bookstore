import React,{useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Nav,Footer} from '_layout'
import {BooksCard} from 'bookstorehome'
import BookStoreService from '../_services/BookStoreService'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

import {ToastContainer} from 'react-toastify'



export {BookStoreHome}



function BookStoreHome({books,cart,sortedDataUpdate ,onAddToCart,userDetail,BASEURL}) {

  
 /**
 |--------------------------------------------------
 | Sort by price
 |--------------------------------------------------
 */
  
 let [selectValue, setSelectValue] = useState(" ");

 const handleChange = (event) => {
  setSelectValue(event.target.value)
   sort(event.target.value)    
};

const sort = async(type) =>{
  if(type === 'priceAsc'){
    BookStoreService
    .getBooksAscPrice()    
    .then((responsedata)=>{
      console.log('Asc',responsedata);
      return responsedata;
    })
    .then((response)=>{
       sortedDataUpdate(response.data.data); 
    })
  } else if (type ==='priceDec'){
    BookStoreService
    .getBooksDecPrice()
    .then((responsedata)=>{
      console.log('DEC',responsedata);
     return responsedata;
    })
    .then((response)=>{
      sortedDataUpdate(response.data.data); 
    })
  } 

};

  return (
    <>
    <Nav/> 
    
    <Container maxWidth="md">        
    
    <Grid container spacing={0}>
  <Grid item xs={8}>
   <div class='headerBar'><span class='headerName'>Books </span> <span class='count'>({books.length} items)</span> </div>
  </Grid>
 
  <Grid item xs >
  
  <Box display="flex" justifyContent="flex-end">
  <FormControl sx={{ minWidth:130}}>       
        <Select sx={{'padding': '3.5px 17px','border-radius': '0' }}
          labelId="sort-by-id-label"
          id="sort-simple-select"
          value={selectValue}
          onChange={handleChange}         
        >  
          <MenuItem value=" "> Sort </MenuItem>       
          <MenuItem value={'priceAsc'}>Increasing Price</MenuItem>
          <MenuItem value={'priceDec'}>Descreasing Price</MenuItem>         
        </Select>
      </FormControl>
    </Box>

  

  
  </Grid>
</Grid>

    <Grid container justifyContent="center"
        alignItems="center" spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 , lg: 12 }}>
            {             
                books && books.map((singlebookitem,indexinner) => (
                <Grid item xs={4} sm={4} md={3} lg={3} key={indexinner}>  
                      <BooksCard singlebookitem={singlebookitem} cart={cart} onAddToCart={onAddToCart} userDetail={userDetail} BASEURL={BASEURL} />                       
                </Grid>
              ))                
            }
         </Grid>
      </Container>
      <Footer/>
    </>
    
  );
}
