import type { Meta, StoryObj } from '@storybook/react'

import { Header } from 'components'

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  args: { children: <div>Test Child</div> },
}

export default meta

type Story = StoryObj<typeof Header>
export const HeaderStory: Story = {}
