import type { Meta, StoryObj } from '@storybook/react'

import Page from 'app/projects/projects-page'

const meta = {
  title: 'Pages/Projects',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const ProjectsStory: Story = {}
