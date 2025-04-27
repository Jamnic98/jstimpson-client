import { LinkType, type Project } from 'types'
import { projectImageFolderPaths } from 'utils/constants'

const libraryBookRenewer: Project = {
  id: 'library-book-renewer',
  title: 'Library Book Renewer',
  summary: 'A web scraper that automatically renews my library books.',
  paragraphs: [
    `This project was written in Python and uses the Selenium web scraping library to log into my library account and
     renew all the books which are due. The idea came to me when I made a joke/bet with my sister that I could write
     a program to renew the books I had loaned from the library. Currently, I have a Raspberry Pi running the program daily with
     cron to check if there are any books due. The program also sends a confirmation email relaying information
     about which books were renewed.`,
  ],
  projectPageURI: '/coding/library-book-renewer',
  screenshotURIs: [`${projectImageFolderPaths.libraryBookRenewer}/code.webp`],
  mainLanguage: ['Python'],
  links: [
    {
      label: 'GitHub Repo',
      URL: 'https://github.com/Jamnic98/library-book-auto-renewer',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: ['Python', 'Selenium'],
}

export default libraryBookRenewer
