import { LinkType, type Project } from 'types'
import { projectImageFolderPaths } from 'utils/constants'

const ticTacGo: Project = {
  id: 'tic-tac-go',
  title: 'Tic Tac Go',
  summary: 'A command line interface version of tic tac toe, written in Go.',
  paragraphs: [
    `I wrote this program while travelling by aeroplane to Italy to pass the time. It also
      served as an exercise for me to practice my Go skills, which I had been learning a few weeks earlier.
      The program utilises a command line interface to play against another opponent.
      It performs checks to validate user input and for winning conditions.`,
  ],

  projectPageURI: '/coding/tic-tac-go',
  screenshotURIs: [
    `${projectImageFolderPaths.ticTacGo}/code.webp`,
    `${projectImageFolderPaths.ticTacGo}/gameplay.webp`,
  ],
  mainLanguage: ['Golang'],
  links: [
    {
      URL: 'https://github.com/Jamnic98/tic-tac-go',
      label: 'GitHub Repo',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: ['Golang'],
}

export default ticTacGo
