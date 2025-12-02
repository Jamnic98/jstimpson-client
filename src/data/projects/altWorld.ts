import { LinkType, type Project } from 'types'

import { projectImagesFolderPaths } from 'utils/constants'

const projectId = 'alt-world'

const altWorld: Project = {
  id: projectId,
  title: 'Alt World',
  summary: 'Custom website for a client.',
  paragraphs: [],
  projectPageURI: `/coding/${projectId}`,
  screenshotURIs: [
    `${projectImagesFolderPaths.altWorld}/home.webp`,
    `${projectImagesFolderPaths.altWorld}/platform.webp`,
    `${projectImagesFolderPaths.altWorld}/studio.webp`,
    `${projectImagesFolderPaths.altWorld}/case_studies.webp`,
  ],
  mainLanguage: ['TypeScript'],
  links: [
    {
      label: 'GitHub',
      URL: `https://github.com/Jamnic98/${projectId}`,
      type: LinkType.EXTERNAL,
    },
    {
      label: 'Live App',
      URL: 'https://altworld-teal.vercel.app',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: ['TypeScript', 'Next.js', 'TailwindCSS', 'MongoDB'],
}

export default altWorld
