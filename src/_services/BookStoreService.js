import axios from 'axios';

class BookStoreService{

   

    BASE_URL_SERVCE="http://localhost:8080/api/bookservice"

    /**
     * req: 
     * res: allBookStoreObject
     */
        
    getAllBooks() {
        return axios.get(`${this.BASE_URL_SERVCE}/getBooks`)
    }

}

export default new BookStoreService();