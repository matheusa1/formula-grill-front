import { InputStorybook } from '@/components/atoms/Input'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Example/Input',
  component: InputStorybook,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      children: {
        control: {
          type: 'text',
        },
        table: {
          category: 'Label',
          type: { summary: 'string' },
        },
      },
      control: {
        type: 'radio',
      },
      options: ['primary', 'primaryBlue'],
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
      password: {
        children: {
          control: {
            type: 'boolean',
          },
          table: {
            category: 'Password',
            type: { summary: 'boolean' },
          },
        },
        control: {
          type: 'boolean',
        },
        table: {
          defaultValue: { summary: false },
          type: { summary: 'boolean' },
        },
      },
    },
  },
} satisfies Meta<typeof InputStorybook>

export default meta
type Story = StoryObj<typeof meta>

export const Yellow: Story = {
  args: {
    style: 'primary',
    children: 'Label',
    password: false,
  },
}

export const Blue: Story = {
  args: {
    style: 'primaryBlue',
    children: 'Label',
    password: false,
  },
}
