// noinspection JSUnusedGlobalSymbols

import { Switch } from './switch'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'UI/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  args: { label: 'Auto Save' },
}
