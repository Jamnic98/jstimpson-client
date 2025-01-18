import type { Meta, StoryObj } from '@storybook/react'

import { MenuToggle } from 'components'

const meta: Meta<typeof MenuToggle> = {
  title: 'Components/MenuToggle',
  component: MenuToggle,
  args: { onClick: () => null },
}

export default meta

type Story = StoryObj<typeof MenuToggle>

export const MenuToggleStory: Story = {}
