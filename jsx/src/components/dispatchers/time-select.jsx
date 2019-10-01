import store from '../../store'

export default () => (
  <el-time-select-dispatcher
    value={ store.state.componentValue }
    on-input={ val => store.commit('setCompValue', val) }
  />
)
