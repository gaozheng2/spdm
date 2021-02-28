import request from '@/http/request'

const URL = {
  getStars: 'stars'
}

const projects = {
  getStars() { // 获取所有收藏夹数据
    return request({ url: URL.getStars })
  }
}

export default projects
