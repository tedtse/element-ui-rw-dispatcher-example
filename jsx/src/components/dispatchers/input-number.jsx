import store from '../../store'

export default () => (
  <el-input-number-dispatcher
    value={ store.state.componentValue }
    on-input={ val => store.commit('setCompValue', val) }
    on-change={ val => store.commit('setCompValue', val) }
  />
)
