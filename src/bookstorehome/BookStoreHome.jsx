import React,{useEffect,useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {Nav} from '_layout'
import {BooksCard} from 'bookstorehome'
import BookStoreService from '../_services/BookStoreService'
import {toast} from 'react-toastify'



export {BookStoreHome}



function BookStoreHome() {

 let [bookStoreBooks, setBookStoreBooks] = useState();

 useEffect(() => {
  getAllBooksToDisplay();
 },[])  

 const getAllBooksToDisplay = () => {
  BookStoreService
  .getAllBooks()
  .then((responsedata) => {
    console.log("Got all books");
    console.log(responsedata)
    setBookStoreBooks({bookStoreBooks:responsedata.data.data})
  })
  .catch((error)=>{
    toast.error("Error with api service", error)
    console.log(error)
  })
  
 }

  return (
    <>
    <Nav/>    
      <Container maxWidth="md">  
        <div> <h2 >Books</h2></div>
        <Grid container justifyContent="center"
  alignItems="center" spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 , lg: 12 }}>
            {
             bookStoreBooks && Object.values(bookStoreBooks).map( (singleBook, index) => (
              singleBook.map((singlebookitem,indexinner) => (

                <Grid item xs={4} sm={4} md={3} lg={3} key={indexinner}>  
                      <BooksCard singleBookDataForDisplaying={singlebookitem} />                       
                </Grid>

              ))
                
            ))
            }
         </Grid>
      </Container>
    </>
  );
}
