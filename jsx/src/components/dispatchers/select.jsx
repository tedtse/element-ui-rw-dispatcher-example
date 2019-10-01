import store from '../../store'

const options = [
  {
    value: '选项1',
    label: '黄金糕'
  },
  {
    value: '选项2',
    label: '双皮奶'
  },
  {
    value: '选项3',
    label: '蚵仔煎'
  },
  {
    value: '选项4',
    label: '龙须面'
  },
  {
    value: '选项5',
    label: '北京烤鸭'
  }
]

export default () => (
  <el-select-dispatcher
    value={ store.state.componentValue }
    on-change={ val => store.commit('setCompValue', val) }
  >
    {
      options.map(item => (
        <el-option label={ item.label } value={ item.value } />
      ))
    }
  </el-select-dispatcher>
)
