import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/react--clone-84dd2/us-central1/api",
});

export default instance;

//"https://us-central1-react--clone-84dd2.cloudfunctions.net/api" THE API (cloud function) URL
//http://localhost:5001/react--clone-84dd2/us-central1/api (localhost url using firebase emulators:start command )
