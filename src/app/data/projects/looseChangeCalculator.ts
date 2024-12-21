import { LinkType, ProjectDataType } from 'types'

const looseChangeCalculator: ProjectDataType = {
	id: 'loose-change-calculator',
	title: 'Loose Change Calculator',
	summary: 'A calculator for summing loose change (GBP).',
	paragraphs: [
		`This is one of the first Python programs I wrote. The application is designed so that the user 
    only has to enter the number of coins for each denomination and the calculator will return the total.`,
	],
	projectPageURI: '/projects/loose-change-calculator',
	screenshotURIs: ['/images/projects/loose-change-calculator.png'],
	mainLanguage: 'Python',
	links: [
		{
			label: 'GitHub link',
			URL: 'https://github.com/Jamnic98/loose-change-calculator',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: ['Python', 'Tkinter'],
}

export default looseChangeCalculator
