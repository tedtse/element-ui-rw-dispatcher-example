<script>
import Input from './dispatchers/input'
import InputNumber from './dispatchers/input-number'
import Autocomplete from './dispatchers/autocomplete'
import Select from './dispatchers/select'
import Switch from './dispatchers/switch'
import DatePicker from './dispatchers/date-picker'
import TimePicker from './dispatchers/time-picker'
import TimeSelect from './dispatchers/time-select'
import Checkbox from './dispatchers/checkbox'
import CheckboxGroup from './dispatchers/checkbox-group'
import CheckboxButton from './dispatchers/checkbox-button'
import Radio from './dispatchers/radio'
import RadioGroup from './dispatchers/radio-group'
import RadioButton from './dispatchers/radio-button'
import Rate from './dispatchers/rate'
import Slider from './dispatchers/slider'

const Maps = {
  input: Input,
  autocomplete: Autocomplete,
  inputNumber: InputNumber,
  select: Select,
  'switch': Switch,
  datePicker: DatePicker,
  timePicker: TimePicker,
  timeSelect: TimeSelect,
  checkbox: Checkbox,
  checkboxGroup: CheckboxGroup,
  checkboxButton: CheckboxButton,
  radio: Radio,
  radioGroup: RadioGroup,
  radioButton: RadioButton,
  rate: Rate,
  slider: Slider
}

export default {
  props: {
    type: {
      type: String,
      defautl: ''
    }
  },
  functional: true,
  render (h, context) {
    const { type } = context.props
    const component = Maps[type] || null
    return h(component)
  }
}
</script>
