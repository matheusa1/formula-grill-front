import { Input } from '../Input'
import { Select } from '../Select'
import { TextArea } from '../TextArea'
import { InputForm } from './Input'
import { SelectForm } from './Select'
import { SwitchForm } from './Switch'
import { TextAreaForm } from './TextArea'

export const Form = {
  Input: {
    ...Input,
    Main: InputForm,
  },
  Select: {
    ...Select,
    Main: SelectForm,
  },
  Switch: {
    Main: SwitchForm,
  },
  TextArea: {
    ...TextArea,
    Main: TextAreaForm,
  },
}
