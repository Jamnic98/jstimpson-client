import { LinkType, type Project } from 'types'

const portfolioWebsite: Project = {
  id: 'portfolio-website',
  title: 'Portfolio Website',
  summary: 'My website.',
  paragraphs: [
    `This is the second iteration of my website. The first version was built with React alone, which restricted navigation to the home page due to a lack of proper routing.
     I was also dissatisfied with the styling, so I decided to rebuild the site to improve accessibility and update the design.`,
    `When redesigning the website, I focused on automation and scalability. The front end is built with Next.js and TypeScript.
     Project pages are generated dynamically using a template and a structured project data file. The same approach is used to create the project 'cards' displayed on the main projects page.`,
    `For the running page, I set up a Node.js server to fetch my running data from a MongoDB database. D3.js then visualizes this data as a scatter plot.
     The server updates the database twice daily with new running data. To ensure scalability, I deployed the server to the cloud using AWS Elastic Beanstalk.`,
  ],

  projectPageURI: '/coding/portfolio-website',
  screenshotURIs: [
    '/images/projects/portfolio-website.png',
    '/images/projects/portfolio-website-projects.png',
    '/images/projects/portfolio-website-about.png',
  ],
  mainLanguage: 'TypeScript',
  links: [
    {
      URL: 'https://github.com/Jamnic98/website-client',
      label: '[OLD] - GitHub Repo (client)',
      type: LinkType.EXTERNAL,
    },
    {
      URL: 'https://github.com/Jamnic98/website-server',
      label: '[OLD] - GitHub Repo (server)',
      type: LinkType.EXTERNAL,
    },
    {
      URL: 'https://github.com/Jamnic98/jstimpson-client',
      label: '[NEW] - GitHub Repo (client)',
      type: LinkType.EXTERNAL,
    },
    {
      URL: 'https://github.com/Jamnic98/jstimpson-server',
      label: '[NEW] - GitHub Repo (server)',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: [
    'TypeScript',
    'JavaScript',
    'Next.js',
    'HTML',
    'TailwindCSS',
    'FastAPI',
    'Vercel',
    'AWS (Elastic Beanstalk, EC2)',
    'MongoDB Atlas',
    "Strava's API",
    'D3.js',
    'Jest',
    'React Testing Library',
  ],
}

export default portfolioWebsite
