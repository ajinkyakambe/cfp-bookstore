import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


import {Nav} from '_layout'
import {BooksCard} from 'bookstorehome'

export {BookStoreHome}



function BookStoreHome() {
  return (
    <>
    <Nav/>    
      <Container maxWidth="md">  
        <div> <h2 >Books</h2></div>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(8)).map((_, index) => (
                <Grid item xs={2} sm={3} md={3} key={index}>    
                      <BooksCard/> 
                </Grid>
            ))}
         </Grid>
      </Container>
      </>
  );
}
