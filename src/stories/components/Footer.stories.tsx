import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from 'components'
import { navlinkObjArr } from 'utils'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Footer> = {
	title: 'Footer',
	component: Footer,
	args: { navlinkObjArr },
}
export default meta

type Story = StoryObj<typeof Footer>
export const FooterStory: Story = {}
