import { StorybookButton } from '../components/atoms/Button'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Example/Button',
  component: StorybookButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    size: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    style: {
      control: {
        type: 'radio',
      },
      options: ['primary', 'outline'],
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof StorybookButton>

export default meta
type Story = StoryObj<typeof meta>

export const md: Story = {
  args: {
    children: 'Button',
    size: 'md',
    style: 'primary',
  },
}

export const lg: Story = {
  args: {
    children: 'Button',
    size: 'lg',
    style: 'primary',
  },
}

export const sm: Story = {
  args: {
    children: 'Button',
    size: 'sm',
    style: 'primary',
  },
}
