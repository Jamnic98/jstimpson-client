import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from 'components'
import { navlinkObjArr } from 'utils'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Navbar> = {
	title: 'Navbar',
	component: Navbar,
	args: { navlinkObjArr },
}
export default meta

type Story = StoryObj<typeof Navbar>
export const NavbarStory: Story = {}
