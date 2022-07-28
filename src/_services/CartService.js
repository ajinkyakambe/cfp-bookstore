import axios from 'axios';

const headers = {
    'Content-Type': 'application/json',
    'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozfQ.AHeVFJ0bDTodADyhsHr02w_Kt4ogBAX44029iFrOU9Y'
  }

class CartService{

    /**
     |--------------------------------------------------
     | // Creating axios instance for CartFrontend
     |--------------------------------------------------
     */
     constructor(){            
         this.new_axios_instance = axios.create({
             baseURL: `http://localhost:8080/api/cart`,
             timeout: 5000,
             // headers: {'token': tokenHelper.token}
           });        
     }
 
  
 
     /**
      * req: 
      * res: allCartObject
      */
         
     getAllBookInCart() {     
         return this.new_axios_instance({
             method: 'GET',
             url: '/getAll'
         })
     }


     /**
      * req: 
      * res: allCartObject
      */

     addtocart(cartDTO){
        return this.new_axios_instance({
            method: 'POST',
            url: '/create',
            data:cartDTO,
            headers: headers
        })
     }


     updateBookInCart(id,cartDTO){
        return this.new_axios_instance({
            method: 'PUT',
            url: `/update/${id}`,
            data:cartDTO
        })
     }


     deleteBookInCart(id){
        return this.new_axios_instance({
            method: 'DELETE',
            url: `/delete/${id}`            
        })
     }

     increaseQuantity(id){
        return this.new_axios_instance({
            method: 'GET',
            url: `/increaseQuantity/${id}`
        })
     }

     decreaseQuantity(id){
        return this.new_axios_instance({
            method: 'GET',
            url: `/decreaseQuantity/${id}`
        })
     }

     deleteBooks(){
        return this.new_axios_instance({
            method: 'DELETE',
            url: `/deleteall`
        })
     }



 }



export default new CartService();





