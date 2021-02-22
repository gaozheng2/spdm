export default {
  1: {
    treeClip: false, // tree 是否折叠在 title 下面
    treeElevation: true, // tree 是否有阴影
    titleFloat: true, // title 是否浮动
    titleColor: 'surface', // title 背景色
    titleLine: false, // title 是否有下边框
    titleHeight: '64', // title 高度，用于计算 panel 高度
    cardColor: 'background', // title 内部的 card 背景色
    cardHeight: '50', // title 内部的 card 高度
    panelUp: true, // panel 是否上移
    panelElevation: true // panel 是否有阴影
  },
  2: {
    treeClip: true,
    treeElevation: false,
    titleFloat: false,
    titleColor: 'surface',
    titleLine: true,
    titleHeight: '50',
    cardColor: 'background',
    cardHeight: '50',
    panelUp: false,
    panelElevation: false
  },
  3: {
    treeClip: false,
    treeElevation: true,
    titleFloat: false,
    titleColor: 'surface',
    titleLine: false,
    titleHeight: '50',
    cardColor: 'surface',
    cardHeight: '50',
    panelUp: true,
    panelElevation: true
  }
}