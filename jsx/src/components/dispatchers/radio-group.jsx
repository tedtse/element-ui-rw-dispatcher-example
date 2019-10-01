import store from '../../store'

export default () => (
  <el-radio-group-dispatcher value={ store.state.componentValue }>
    {
      store.state.radioValues.map(label => (
        <el-radio-dispatcher
          label={ label }
          on-change={ () => store.commit('setCompValue', label) }
        >{ label }</el-radio-dispatcher>
      ))
    }
  </el-radio-group-dispatcher>
)
