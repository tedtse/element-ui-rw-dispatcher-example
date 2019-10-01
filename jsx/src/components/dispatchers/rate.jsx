import store from '../../store'

export default () => (
  <el-rate-dispatcher
    value={ store.state.number }
    on-change={ val => store.commit('setNumber', val) }
  />
)
