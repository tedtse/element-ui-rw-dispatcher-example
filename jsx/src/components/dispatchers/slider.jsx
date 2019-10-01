import store from '../../store'

export default () => (
  <el-slider-dispatcher
    value={ store.state.number }
    on-input={ val => store.commit('setNumber', val) }
  />
)
