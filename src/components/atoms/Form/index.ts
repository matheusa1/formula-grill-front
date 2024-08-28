import { Input } from '../Input'
import { Select } from '../Select'
import { InputForm } from './Input'
import { SelectForm } from './Select'
import { SwitchForm } from './Switch'

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
}
