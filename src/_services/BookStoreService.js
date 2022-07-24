import axios from 'axios';

class BookStoreService{


   /**
    |--------------------------------------------------
    | // Creating axios instance for BookStoreFrontend
    |--------------------------------------------------
    */
    constructor(){            
        this.new_axios_instance = axios.create({
            baseURL: `http://localhost:8080/api/bookservice`,
            timeout: 5000,
            // headers: {'token': tokenHelper.token}
          });        
    }

 

    /**
     * req: 
     * res: allBookStoreObject
     */
        
    getAllBooks() {     
        return this.new_axios_instance({
            method: 'GET',
            url: '/getBooks'
        })
    }

    
    /**
     * req: 
     * res: allBookStoreObjectSortedAsc
     */
    getBooksAscPrice() {
        return this.new_axios_instance({
            method: 'GET',
            url: '/sortasc'
        })
    }

    
    /**
     * req: 
     * res: allBookStoreObjectSortedDec
     */
    getBooksDecPrice() {
        return this.new_axios_instance({
            method: 'GET',
            url: '/sortdesc'
        });
    }

}

export default new BookStoreService();