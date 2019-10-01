import store from '../../store'

const querySearch = (qs, cb) => {
  const result = []
  result.push({ value: qs })
  result.push({ value: qs + qs })
  result.push({ value: qs + qs + qs })
  cb(result)
}

export default () => (
  <el-autocomplete-dispatcher
    value={ store.state.componentValue }
    fetch-suggestions={ querySearch }
    on-input={ val => store.commit('setCompValue', val) }
    on-select={ item => store.commit('setCompValue', item.value) }
  />
)
