import store from '../../store'

export default () => (
  <div>
    <el-radio-dispatcher
      value={ store.state.componentValue }
      label="1"
      on-change={ () => store.commit('setCompValue', '1') }
    >备选项1</el-radio-dispatcher>
    <el-radio-dispatcher
      value={ store.state.componentValue }
      label="2"
      on-change={ () => store.commit('setCompValue', '2') }
    >备选项2</el-radio-dispatcher>
  </div>
)
