import { Button } from '@/components/atoms/Button'

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Button.Root size="sm">
        <Button.Text>Click me</Button.Text>
      </Button.Root>
      <Button.Root>
        <Button.Text>Click me</Button.Text>
      </Button.Root>
      <Button.Root size="lg">
        <Button.Text>Click me</Button.Text>
      </Button.Root>

      <Button.Root size="sm" style="outline">
        <Button.Text>Click me</Button.Text>
      </Button.Root>
      <Button.Root style="outline">
        <Button.Text>Click me</Button.Text>
      </Button.Root>
      <Button.Root size="lg" style="outline">
        <Button.Text>Click me</Button.Text>
      </Button.Root>
    </div>
  )
}
