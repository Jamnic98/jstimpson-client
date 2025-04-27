import { LinkType, type Project } from 'types'
import { projectImagesFolderPaths } from 'utils/constants'

const looseChangeCalculator: Project = {
  id: 'loose-change-calculator',
  title: 'Loose Change Calculator',
  summary: 'A calculator for summing loose change (GBP).',
  paragraphs: [
    `This was one of the first Python programmes I ever wrote. It is a simple but practical coin calculator, designed to make counting change quick and easy.
     The user is prompted to input the number of coins they have for each denomination, and the calculator automatically works out the total amount.
     I structured the application to be as user-friendly as possible, requiring only minimal input before providing an accurate result.`,

    `Although basic, this project helped me develop a stronger understanding of variables, user input, data types, and simple arithmetic operations in Python.
     It also gave me early experience in thinking about usability when designing a program.`,
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
