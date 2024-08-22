import { Input } from '../Input'
import { Select } from '../Select'
import { InputForm } from './Input'
import { SelectForm } from './Select'

export const Form = {
  Input: {
    ...Input,
    Main: InputForm,
  },
  Select: {
    ...Select,
    Main: SelectForm,
  },
}
