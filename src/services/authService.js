// import jwtDecode from 'jwt-decode';
import http from './httpService'
import config from '../config.json'

const tokenKey= 'token'

http.setJwt()
export async function auth (email, password){
    const {data}=await http.post("http://localhost:8000/signin", {email, password})
    console.log(data)
    
    // localStorage.setItem(tokenKey, access)
}
export async function signUp (email, password, firstName, lastName, role){
    const {data}=await http.post("http://localhost:8000/signup", {email, password, firstName, lastName, role})
    console.log("hsdhkjsfjksdhf ",data)
    
    // localStorage.setItem(tokenKey, access)
}


// export function loginWithJwt (jwt){
//     localStorage.setItem(tokenKey, jwt)
// }

// export function getCurrentUser(){
//     try {
//         const result =localStorage.getItem(tokenKey)
//         const user= jwtDecode(result)
//         return user
//       } catch (ex) {
//         return null
//       }
// }

// export function logout(){
//     localStorage.removeItem(tokenKey)
//     window.location= '/'
// }

function getJwt(){
    return localStorage.getItem('token')
}
