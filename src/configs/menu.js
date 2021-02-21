export default {
  func: [
    { icon: 'mdi-file-document-multiple-outline', text: '模板管理', href: '/' },
    { icon: 'mdi-bank-outline', text: '研制单位管理', href: '/' },
    { divider: true },
    { icon: 'mdi-cog-outline', text: '系统设置', href: '/' },
    { icon: 'mdi-account-check', text: '权限管理', href: '/' },
    { icon: 'mdi-text-recognition', text: '字典管理', href: '/' }
  ],
  user: [
    { icon: 'mdi-account-box-outline', text: '用户信息', emit: 'userInfo' },
    { icon: 'mdi-help-circle-outline', text: '系统帮助', href: '/' },
    { divider: true },
    { icon: 'mdi-logout-variant', text: '退出系统', emit: 'logOut' }
  ]
}
