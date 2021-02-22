// 保存本地配置
function setLocalConfig(item, value) {
  const configs = JSON.parse(localStorage.getItem('configs')) || {}

  configs[item] = value
  localStorage.setItem('configs', JSON.stringify(configs))
}

export default setLocalConfig
