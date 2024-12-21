import { LinkType, ProjectDataType } from 'types'

const portfolioWebsite: ProjectDataType = {
	id: 'portfolio-website',
	title: 'Portfolio Website',
	summary: 'My website.',
	paragraphs: [
		`This is the second version of my website. The first used only React which meant the site could not be accessed from anywhere but the home page.
     Also the site looked amateurish in style so I decided to remake the site to fix the accessibility issue and update the style.`,
		`When designing the website, I prioritised automation and scalability. For the front end I used Next.js and TypeScript. 
     Project pages are created dynamically using a template and a file containing project data. The same technique is used 
     to create the 'cards' which can be found on the main projects page.`,
		`For the running page, I set up a server using Node.js to load my running data from a MongoDB database. Once the data is loaded,
     D3.js creates a scatter graph of all data points. The same server checks twice daily for new running data then adds it to the database.
     I deployed the server to the cloud using AWS Elastic Beanstalk.`,
	],

	projectPageURI: '/projects/portfolio-website',
	screenshotURIs: [
		'/images/projects/portfolio-website.png',
		'/images/projects/portfolio-website-projects.png',
		'/images/projects/portfolio-website-about.png',
	],
	mainLanguage: 'TypeScript',
	links: [
		{
			URL: 'https://github.com/Jamnic98/website-client',
			label: 'GitHub link (client)',
			type: LinkType.EXTERNAL,
		},
		{
			URL: 'https://github.com/Jamnic98/website-server',
			label: 'GitHub link (server)',
			type: LinkType.EXTERNAL,
		},
	],
	techStack: [
		'TypeScript',
		'JavaScript',
		'Next.js',
		'React Testing Library',
		'Jest',
		'HTML',
		'CSS',
		'Node.js',
		'Express.js',
		'MongoDB Atlas',
		'Mongoose',
		'AWS (Elastic Beanstalk, EC2)',
		'Vercel',
		"Strava's API",
		'D3.js',
	],
}

export default portfolioWebsite
