import request from '@/http/request'

const URL = {
  getProjects: 'projects',
  getSings: 'sings',
  getStars: 'stars'
}

const projects = {
  getProjects() { // 获取所有型号数据
    return request(URL.getProjects)
  },
  getSings() { // 获取所有产品信息
    return request(URL.getSings)
  },
  getStars() { // 获取所有收藏夹数据
    return request(URL.getStars)
  }
}

export default projects
