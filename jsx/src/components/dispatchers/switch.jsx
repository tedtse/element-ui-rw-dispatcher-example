import store from '../../store'

export default () => (
  <el-switch-dispatcher
    value={ store.state.componentValue }
    on-change={ val => store.commit('setCompValue', val) }
  />
)
