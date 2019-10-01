import store from '../../store'

export default () => (
  <el-checkbox-group-dispatcher value={ store.state.groupValue }>
    {
      store.state.checkboxValues.map(item => (
        <el-checkbox-dispatcher
          label={ item.label }
          on-change={
            val => {
              store.commit('setCheckboxValue', {
                label: item.label,
                value: val
              })
            }
          }
        >{ item.label }</el-checkbox-dispatcher>
      ))
    }
  </el-checkbox-group-dispatcher>
)
