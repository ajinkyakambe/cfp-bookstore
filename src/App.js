import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter,  Routes,  Route, Router } from "react-router-dom";
import {MainLayout} from '_layout'
import BookStoreService from './_services/BookStoreService'
import CartService from './_services/CartService'
import {BookStoreHome} from 'bookstorehome'
import {CartHome} from 'cart'
import {Signup} from 'signup'
import {ForgotPassword,Login,Profile} from 'login'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
     // Base url for image display
     const BASEURL = "http://localhost:3000/bookimages/"


	
	const [ addCart, addInCart ] = useState([]);
  

  let sampleUser ={
    "userId": 1,
    "firstName": "Mozell",
    "lastName": "Grimes",
    "email": "Domenick.Balistreri97@hotmail.com",
    "address": "780 Rhoda Shore",
    "password": "YGdgKQeIcoVK9nI"
}

const [ userDetails, setUserDetails ] = useState(sampleUser);


   // React hook to call data all time
   useEffect(
    () => {
      BooksDataFetching();
      CartDataFetching();
    },
    [  ]
  );



/**
|--------------------------------------------------
| All releated to books
|--------------------------------------------------
*/
const [ books, setBooks ] = useState([]);
  

  // Product Data all
  const BooksDataFetching = async () => {
		const { data } = await BookStoreService.getAllBooks();
		setBooks(data.data);
	};

   

   const sortedDataUpdate=(newBookState)=>{
      this.setBooks(newBookState)
    }

  /**
  |--------------------------------------------------
  | All releated to cart
  |--------------------------------------------------
  */

  const [ cart, setCart ] = useState([]);

  console.log("Cart current Data is",cart);

  //https://www.w3schools.com/js/js_async.asp
  const CartDataFetching = async () => {
		const { data } = await CartService.getAllBookInCart();
		setCart(data.data);
    console.log("fetch data",data);
	};

  console.log("Cart data after update",cart);

  const handleAddToCart = async (data) => {		
    console.log("card data before handle func",data)
    console.log("Cart data before handle func",cart);
		const item1 = cart.find(
			(item) =>
				item.cartId == data.cartId &&
				item.userId == data.userId &&
				item.bookId == data.bookId &&
				item.quantity == data.quantity
		);
		if (item1) {
			const currrentQuantity = parseInt(item1.quantity);
			await CartService.updateCartItem(item1.cartId, currrentQuantity + 1);
		} else {
			await CartService.addtocart(data);
		}
		await CartDataFetching();
	};

  const handleRemoveFromCart = async (cartId) => {
		const response = await CartService.deleteBookInCart(cartId);
		await CartDataFetching();
	};

  const handleUpdateQuantity = async (cartId, newQuantity) => {
		console.log('New quanttity', newQuantity);
		await CartService.updateCartItem(cartId, newQuantity);
		await CartDataFetching();
	};

  const handleDeleteAllFromCart = async () => {
		await CartService.deleteBooks();
    
		await CartDataFetching();
	};

  const handleIncreaseQuantity = async (cartId) => {
		await CartService.increaseQuantity(cartId);
		await CartDataFetching();
	};
	const handleDecreaseQuantity = async (cartId) => {
		await CartService.decreaseQuantity(cartId);
		await CartDataFetching();
	};

  /**
  |--------------------------------------------------
  | User Controller
  |--------------------------------------------------
  */

  const [ isLogin, setIsLogin ] = useState(false);

  const handleUserLogin = () => {
		setIsLogin(true);
		
	};

  const logoutFunction = async() => {
		setIsLogin(false);
		setUserDetails(undefined);
	}

  

  



  return (
   <>
   <ToastContainer />
   
    <BrowserRouter>
    <Routes>
     <Route element={<MainLayout />}>
       <Route
						exact
						path="/"
						element={
							isLogin ? (
								<Profile
								  	userDetail={userDetails}
								/>
							) : (
								<Login handleUserLogin={handleUserLogin} setUserDetails={setUserDetails} />
							)
						}
					/>

 <Route path="/bookstorehome" 
            element={
              isLogin ? ( <BookStoreHome 
                  books={books}			
                  cart={cart}					
									onAddToCart={handleAddToCart}
                  userDetail={userDetails}
                  sortedDataUpdate = {sortedDataUpdate}
                  BASEURL={BASEURL}
									/> 	) : (
                    <Login handleUserLogin={handleUserLogin} setUserDetails={setUserDetails} />
                  )}                   
      /> 

      <Route path="/cart" element={<CartHome 
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleDecreaseQuantity={handleDecreaseQuantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDeleteAllFromCart={handleDeleteAllFromCart}
              books={books}
              BASEURL={BASEURL}
          />} 
      />
      

      

      {/* // Non login Routes */}
      <Route exact path="/signup" element={<Signup />} />  
      <Route exact path="/forgotpassword" element={<ForgotPassword />} /> 
      </Route>
      </Routes>
    </BrowserRouter>
    </>        
   
  );
  
}

export default App;
