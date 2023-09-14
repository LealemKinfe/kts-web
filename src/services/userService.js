import { redirect } from 'react-router-dom'
import config from '../config.json'
import http from './httpService'

export async function getUsers() {
    console.log("hey")
  
   return  await fetch('http://localhost:8000/user', {
    method: "GET",
    headers: { uid: "PCozk5rxtKya9r6kGQzf"}
  })
}

