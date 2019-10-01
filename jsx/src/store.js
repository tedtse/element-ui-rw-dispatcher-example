import Vue from 'vue'
import Vuex from 'vuex'
import cloneDeep from 'lodash/cloneDeep'

Vue.use(Vuex)

const checkboxValuesDef = [
  { label: '复选框 A', value: false },
  { label: '复选框 B', value: false },
  { label: '复选框 C', value: false }
]
const radioValuesDef = [
  '上海',
  '北京',
  '广州',
  '深圳'
]

export default new Vuex.Store({
  state: {
    componentValue: '',
    number: 0,
    groupValue: [],
    checkboxValues: cloneDeep(checkboxValuesDef),
    radioValues: cloneDeep(radioValuesDef)
  },
  mutations: {
    reset (state) {
      state.componentValue = ''
      state.number = 0
      state.groupValue = []
      state.checkboxValues = cloneDeep(checkboxValuesDef)
      state.radioValues = cloneDeep(radioValuesDef)
    },
    setCompValue (state, val) {
      state.componentValue = val
    },
    setNumber (state, val) {
      state.number = val
    },
    setCheckboxValue (state, payload) {
      const { label, value } = payload
      const item = state.checkboxValues.find(el => el.label === label)
      if (item) {
        item.value = value
        this.commit('setGroupValue', payload)
      } else {
        state.checkboxValues.push(payload)
      }
    },
    setGroupValue (state, { label, value }) {
      if (value) {
        state.groupValue.push(label)
      } else {
        state.groupValue = state.groupValue.filter(el => el !== label)
      }
    }
  },
  actions: {
  }
})
