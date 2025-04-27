import { LinkType, type Project } from 'types'
import { projectImagesFolderPaths } from 'utils/constants'

const looseChangeCalculator: Project = {
  id: 'loose-change-calculator',
  title: 'Loose Change Calculator',
  summary: 'A calculator for summing loose change (GBP).',
  paragraphs: [
    `This is one of the first Python programs I wrote. The application is designed so that the user 
    only has to enter the number of coins for each denomination and the calculator will return the total.`,
  ],
  projectPageURI: '/coding/loose-change-calculator',
  screenshotURIs: [`${projectImagesFolderPaths.looseChangeCalculator}/widget.webp`],
  mainLanguage: ['Python'],
  links: [
    {
      label: 'GitHub Repo',
      URL: 'https://github.com/Jamnic98/loose-change-calculator',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: ['Python', 'Tkinter'],
}

export default looseChangeCalculator
