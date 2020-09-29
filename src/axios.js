import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-ama-clone.herokuapp.com",
});

export default instance;
//"https://react-ama-clone.herokuapp.com/" (heroku live server)
//http://localhost:5000 (localhost url )
