import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

export default instance;
//"https://react-ama-clone.herokuapp.com/" (heroku live server)
//http://localhost:5000 (localhost url )
