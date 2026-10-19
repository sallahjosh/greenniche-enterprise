import axios from 'axios'

// VITE_API_URL is optional in dev because Vite proxies /api to the backend.
const baseURL = import.meta.env.VITE_API_URL || '/api/v1'

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.response.use(
  (res) => res,
  (error) => {
    // Normalise errors; never throw the raw axios object to UI code.
    const message =
      error?.response?.data?.error?.message ||
      error?.message ||
      'Something went wrong. Please try again.'
    return Promise.reject(new Error(message))
  }
)
