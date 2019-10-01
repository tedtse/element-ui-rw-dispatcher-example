import store from '../../store'

export default () => (
  <el-checkbox-dispatcher
    value={ store.state.componentValue }
    on-change={ val => store.commit('setCompValue', val) }
  >备选项</el-checkbox-dispatcher>
)
