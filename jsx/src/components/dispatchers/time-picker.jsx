import store from '../../store'

export default () => (
  <el-time-picker-dispatcher
    value={ store.state.componentValue }
    on-input={ val => store.commit('setCompValue', val) }
  />
)
