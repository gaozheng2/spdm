import axios from 'axios'
import store from '@/store'

export default function request(url) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  return instance(url)
}
