import axios from 'axios';

class UserRegService{

      /**
    |--------------------------------------------------
    | // Creating axios instance for User Reg
    |--------------------------------------------------
    */
    

  signupDetails(data) {
        return axios.post(`http://localhost:8080/api/userservice/register`, data)
    }

    loginDetails(data) {
      return axios.post(`http://localhost:8080/api/userservice/login`,data)
  }


    // constuctor(){
    //     this.new_user_axios = axios.create({
    //         baseURL: `http://localhost:8080/api/userservice`,
    //         timeout: 5000,            
    //     })
    // }

    // signupDetails(data) {
    //     return this.new_user_axios({
    //         method: 'POST',
    //         url: `/register`,
    //         data: data
    //     })
    // }

    // loginDetails(data) {
    //     return this.new_user_axios({
    //         method: 'POST',
    //         url: `/login`,
    //         data: data
    //     })       
    // }

 

}

export default new UserRegService();


 