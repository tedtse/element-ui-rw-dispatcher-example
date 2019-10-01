import store from '../../store'

export default () => (
  <el-date-picker-dispatcher
    value={ store.state.componentValue }
    on-input={ val => store.commit('setCompValue', val) }
  />
)
