export default {
  setFullScreen: (state) => {
    state.fullScreen = !state.fullScreen
  },
  setLayout: (state, layout) => {
    state.layout = layout
  },
  setNodeType: (state, nodeType) => {
    state.nodeType = nodeType
  }
}
