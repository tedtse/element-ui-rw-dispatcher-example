/*
 * 这个例子的实际意义不大，仅供参考
 * 之所以这么写，是因为 ElRadioButton 没有 emit 任何事件，无法实现交互
 */
import Vue from 'vue'
import store from '../../store'

const findComponentByName = (parent, name) => {
  const result = []
  const traverse = component => {
    const _name = component.$options.name
    if (_name === name) {
      result.push(component)
    } else if (component.$children.length) {
      component.$children.forEach(child => traverse(child))
    }
  }
  traverse(parent)
  return result
}

export default context => (
  <el-radio-group-dispatcher value={ store.state.componentValue }
    on-change={() => {
      Vue.nextTick(() => {
        const radioButtons = findComponentByName(context.parent, 'ElRadioButton')
        const target = radioButtons.find(item => item.focus)
        if (target) {
          store.commit('setCompValue', target.label)
        }
      })
    }}
  >
    {
      store.state.radioValues.map(label => (
        <el-radio-button label={ label } />
      ))
    }
  </el-radio-group-dispatcher>
)
