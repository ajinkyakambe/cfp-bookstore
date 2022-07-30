import axios from 'axios';

class OrderService{

      /**
    |--------------------------------------------------
    | // Creating axios instance for Order Service
    |--------------------------------------------------
    */
    

    placeOrder(data) {
        return axios.post(`http://localhost:8080/api/order/insert`, data)
    }

}

export default new OrderService();
