// noinspection JSUnusedGlobalSymbols

import { Input } from './input'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Form/Input',
  component: Input,
} satisfies Meta<typeof Input>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  args: {},
}

export const Form: Story = {
  args: {
    label: 'Title *',
    description: 'Book name',
  },
}

export const Invalid: Story = {
  args: {
    ...Form.args,
    error: 'Book name is not valid.',
  },
}
