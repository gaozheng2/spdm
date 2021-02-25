const notion_color = {
  n_default: '#37352f',
  n_grey: '#9b9a97',
  n_brown: '#64473a',
  n_orange: '#d9730d',
  n_yellow: '#dfab01',
  n_green: '#0f7b6c',
  n_blue: '#0b6d98',
  n_purple: '#673fa2',
  n_pink: '#ad1a72',
  n_red: '#e03e3e',
  s_blue: '#2196F3', // 原 SPDM 图标颜色
  s_green: '#32B16C',
  s_purple: '#AE7CDB'
}

export default {
  dark: {
    ...notion_color,
    textbase: '#edf0f2',
    background: '#05090c',
    surface: '#111b27',
    primary: '#0096c7',
    secondary: '#5c7f94',
    accent: '#59bbbb',
    error: '#FF5252',
    info: '#2196F3',
    success: '#05c075',
    warning: '#FFC107',
    c_title: '#edf0f2', // panel 标题默认颜色
    c_title_fold: '#9E9E9E' // panel 标题折叠后颜色
  },

  light: {
    ...notion_color,
    textbase: '#222222',
    background: '#ffffff',
    surface: '#f2f5f8',
    primary: '#0096c7',
    secondary: '#2a4f66',
    accent: '#59bbbb',
    error: '#ef476f',
    info: '#2196F3',
    success: '#05c075',
    warning: '#ffd166',
    c_title: '#0096c7',
    c_title_fold: '#616161'
  }
}
