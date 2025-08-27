// noinspection JSUnusedGlobalSymbols

import { Smile } from 'lucide-react'

import { Button } from './button'
import { fn } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'UI/Button2',
  component: Button,
} satisfies Meta<typeof Button>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    onClick: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
  },
}

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
}

export const Elevated: Story = {
  args: {
    ...Default.args,
    variant: 'elevated',
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
}

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
}

export const Icon: Story = {
  args: {
    ...Default.args,
    children: <Smile />,
    size: 'icon',
  },
}
