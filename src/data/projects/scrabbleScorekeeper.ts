import { LinkType, type Project } from 'types'

const scrabbleScorekeeper: Project = {
  id: 'scrabble-scorekeeper',
  title: 'Scrabble Scorekeeper',
  summary: 'A web program for calculating turn scores in Scrabble.',
  paragraphs: [
    `Built with React, this project was created to make playing Scrabble more enjoyable and less time-consuming by 
    offloading the task of calculating player scores to a computer.`,
    `It features an easy-to-use graphical user interface comprised of a virtual Scrabble board and a table for displaying
     player scores. A dictionary is included to validate each word formed. The board, table and tiles were styled using CSS.`,
  ],
  projectPageURI: '/coding/scrabble-scorekeeper',
  screenshotURIs: [
    '/images/projects/scrabble-tiles.png',
    '/images/projects/scrabble-table.png',
    '/images/projects/scrabble-board.png',
  ],
  mainLanguage: ['TypeScript'],
  links: [
    {
      label: 'GitHub Repo',
      URL: 'https://github.com/Jamnic98/scrabble-scorekeeper',
      type: LinkType.EXTERNAL,
    },
    {
      label: 'Project',
      URL: 'https://scrabble-scorekeeper.netlify.app/',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: ['JavaScript', 'React', 'HTML', 'CSS'],
}

export default scrabbleScorekeeper
