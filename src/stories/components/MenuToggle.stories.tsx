import type { Meta, StoryObj } from '@storybook/react'

import { MenuToggle } from 'components'

const meta: Meta<typeof MenuToggle> = {
  title: 'Components/MenuToggle',
  component: MenuToggle,
  args: { handleClick: () => null },
}

export default meta

type Story = StoryObj<typeof MenuToggle>

export const ClosedMenuToggleStory: Story = { args: { isOpen: false } }

export const OpenMenuToggleStory: Story = { args: { isOpen: true } }
