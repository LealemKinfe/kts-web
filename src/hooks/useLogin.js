import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import http from '../services/httpService'



export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

       const response = await http.post("http://localhost:8000/signin", {email, password})
    if (response.statusText != "OK") {
      setIsLoading(false)
      setError()
    }
    if (response.statusText == "OK") {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(response.data.user))

      // update the auth context
      dispatch({ type: 'LOGIN', payload: response.data.user })

      // update loading state
      setIsLoading(false)
      window.location = '/dashboard'
    }
  }

  return { login, isLoading, error }
}