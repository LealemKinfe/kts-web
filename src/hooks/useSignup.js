import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import http from '../services/httpService'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, firstName, lastName, role) => {
    setIsLoading(true)
    setError(null)

    const response=await http.post("http://localhost:8000/signup", {email, password, firstName, lastName, role})
    

    if (response.statusText != "OK") {
      setIsLoading(false)
      setError()
    }
    if (response.statusText == "OK") {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(response.data.user))

      // update the auth context
      dispatch({type: 'LOGIN', payload: response.data.user})

      // update loading state
      setIsLoading(false)
      window.location= '/dashboard'
    }
  }

  return { signup, isLoading, error }
}