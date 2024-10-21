import { LinkType, ProjectDataType } from 'types'

const readingLog: ProjectDataType = {
	id: 'reading-log',
	title: 'Reading Log',
	summary: 'A list of books the user has read, stored in a MySQL database.',
	paragraphs: [
		`
      This program, written in Java, interfaces with a MySQL database to store a list of books the user wants to read
      and has already read. It also stores information about each book such as the title, author, a rating out of 10
      and also comments about the book. The graphical user interface was made using the JavaFX library and features
      a search bar to filter data.`,
	],
	projectPageURI: '/projects/reading-log',
	screenshotURIs: [
		'/images/projects/reading-log.jpg',
		'/images/projects/reading-log-move.png',
	],
	mainLanguage: 'Java',
	links: [
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/reading-log',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: ['Java', 'JavaFX', 'SQL', 'MySQL'],
}

export default readingLog
