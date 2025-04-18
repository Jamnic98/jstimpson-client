import { LinkType, type Project } from 'types'

const pyramidSolitaire: Project = {
  id: 'pyramid-solitaire',
  title: 'Pyramid Solitaire',
  summary: 'A program based on a variation of the card game, solitaire.',
  paragraphs: [
    `
    This program was written in Python using the Pygame library. It features sprite animations, programmed with
    vector maths, and can detect when there are no further moves playable.`,
  ],
  projectPageURI: '/coding/pyramid-solitaire',
  screenshotURIs: [
    '/images/projects/pyramid-solitaire.png',
    '/images/projects/pyramid-solitaire-end-game.png',
    '/images/projects/pyramid-solitaire-start-screen.png',
  ],
  mainLanguage: 'Python',
  links: [
    {
      label: 'GitHub Repo',
      URL: 'https://github.com/Jamnic98/pyramid-solitaire',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: ['Python', 'Pygame'],
}

export default pyramidSolitaire
