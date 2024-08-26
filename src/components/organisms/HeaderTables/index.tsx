import { Button } from '@/components/atoms/Button'
import { Input } from '@/components/atoms/Input'
import { FC } from 'react'
import { THeaderTables } from './types'

const HeaderTables: FC<THeaderTables> = ({ search, setSearch }) => {
  return (
    <header className={'flex w-full flex-col gap-2 md:grid md:grid-cols-3'}>
      <Input.Root className="md:place-self-start">
        <Input.Main
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          search
          style="primaryBlueDarkText"
        />
      </Input.Root>
      <h1 className="hidden md:flex md:place-self-center">HeaderTables</h1>
      <Button.Root
        className="w-full md:w-fit md:place-self-end"
        style="primaryBlue"
      >
        <Button.Text>Criar</Button.Text>
      </Button.Root>
    </header>
  )
}

export default HeaderTables
