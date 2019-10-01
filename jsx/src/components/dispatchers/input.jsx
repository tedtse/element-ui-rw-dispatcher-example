import store from '../../store'

export default () => (
  <el-input-dispatcher
    value={ store.state.componentValue }
    on-input={ val => store.commit('setCompValue', val) }
  />
)
