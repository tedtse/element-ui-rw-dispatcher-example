import OPTIONS from 'element-ui-rw-dispatcher/options'

const COLOER = 'red'

export default {
  activeText: 'on',
  inactiveText: 'off',
  separator: '&',
  rangeSeparator: '>',
  readStateRender: {
    elInput (h, context) {
      return h('span', {
        style: { color: COLOER }
      }, context.data.attrs.value)
    },
    elSelect (h, context) {
      const { data, children } = context
      const value = data.attrs.value
      const vnodes = children.map(item => {
        if (!item.componentOptions) {
          return null
        } else if (value.includes(item.componentOptions.propsData.value)) {
          return h('span', {
            style: { color: COLOER }
          }, item.componentOptions.propsData.label + ' ')
        } else {
          return null
        }
      })
        .filter(item => item)
      return h('div', vnodes)
    },
    elDatePicker (h, context) {
      const { value } = context.data.attrs
      const date = new Date(value)
      return h('span', {
        style: { color: COLOER }
      }, date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate())
    },
    elTimePicker (h, context) {
      const { value } = context.data.attrs
      return h('span', {
        style: { color: COLOER }
      }, value.getHours() + '时' + value.getMinutes() + '分' + value.getSeconds() + '秒')
    },
    elSlider (h, context) {
      const { value } = context.data.attrs
      return h('span', {
        style: { color: COLOER }
      }, value)
    },
    elSwitch (h, context) {
      const { activeText, inactiveText } = OPTIONS
      const { value } = context.data.attrs
      return h('span', {
        style: { color: COLOER }
      }, value ? activeText : inactiveText)
    },
    elCheckbox (h, context) {
      const { data, children } = context
      const { value, label } = data.attrs
      if (value) {
        return h('span', {
          style: { color: COLOER }
        }, children)
      } else {
        return h('div', {
          style: { display: 'none' },
          attrs: data.attrs
        }, children || label)
      }
    },
    elCheckboxGroup (h, context) {
      const { data, children } = context
      const { value } = data.attrs
      const vnodes = children.map(item => {
        if (!item.data) {
          return null
        } else if (value.includes(item.data.attrs.label)) {
          return item.children || item.data.attrs.label
        } else {
          return null
        }
      })
        .filter(item => item)
      return h('div', {
        style: { color: COLOER }
      }, vnodes)
    },
    elRadio (h, context) {
      const { data, children } = context
      const { value, label } = data.attrs
      if (value === label) {
        return h('div', {
          style: { color: COLOER }
        }, children)
      } else {
        return h('div', {
          style: { display: 'none' },
          attrs: data.attrs
        }, children || label)
      }
    },
    elRadioGroup (h, context) {
      const { data, children } = context
      const { value } = data.attrs
      const vnode = children.find(item => {
        if (!item.data) {
          return false
        } else {
          return value === item.data.attrs.label
        }
      })
      if (!vnode) {
        return ''
      }
      return h('div', {
        style: { color: COLOER }
      }, vnode.children)
    },
    elRate (h, context) {
      const { value } = context.data.attrs
      return h('span', {
        style: { color: COLOER }
      }, value + '颗星')
    }
  }
}
