import axios from "axios";
// import logger from "./logService";
// import { toast } from "react-toastify";



axios.interceptors.response.use(null, error => {
  // const expectedError =
  //   error.response &&
  //   error.response.status >= 400 &&
  //   error.response.status < 500;

  // if (!expectedError) {
  //   logger.log(error);
  //   toast.error("An unexpected error occurrred.");
  // }

  return Promise.reject(error);
});

// export function setJwt (jwt){
//   axios.defaults.headers.Authorization= `Bearer ${jwt}`
// }


export function setJwt (){
    axios.defaults.headers.uid= 'PCozk5rxtKya9r6kGQzf'
  }



const obj ={
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};

export default obj
