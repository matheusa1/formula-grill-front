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
      options: ['primary', 'outline', 'primaryBlue', 'outlineBlue'],
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    fontCase: {
      control: {
        type: 'select',
      },
      options: ['uppercase', 'lowercase', 'capitalize', 'normal'],
      table: {
        defaultValue: { summary: 'uppercase' },
      },
    },
    fontWeight: {
      control: {
        type: 'select',
      },
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
      table: {
        defaultValue: { summary: 'semibold' },
      },
    },
  },
} satisfies Meta<typeof StorybookButton>

export default meta
type Story = StoryObj<typeof meta>

export const Md: Story = {
  args: {
    children: 'Button',
    size: 'md',
    style: 'primary',
  },
}

export const Lg: Story = {
  args: {
    children: 'Button',
    size: 'lg',
    style: 'primary',
  },
}

export const Sm: Story = {
  args: {
    children: 'Button',
    size: 'sm',
    style: 'primary',
  },
}
