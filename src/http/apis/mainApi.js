import request from '@/http/request'

const mainApi = {
  getStars() {
    return request({ url: 'stars' })
  }
}

export default mainApi
