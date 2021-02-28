import axios from 'axios'
import store from '@/store'

export default function request({ url }) {
  axios.defaults.baseURL = 'http://127.0.0.1:4523/mock/376175/'
  axios.defaults.baseURL = 'http://127.0.0.1:3000/'

  axios({
    url
  }).then((res) => {
    console.log(res)
  })
}
