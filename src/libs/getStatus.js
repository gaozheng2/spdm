// 根据状态码，返回状态对应的图标颜色和文字
import status from '@/configs/status'

function getStatus(item) {
  if (item.status) {
    return status[item.type][item.status]
  } else {
    return ''
  }
}

export default getStatus
