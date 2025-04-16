import { LinkType, type Project } from 'types'

const diffInMilliseconds = new Date().getTime() - new Date('2022-01-31').getTime()
const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25
const yearsSinceDeployment = Math.floor(diffInMilliseconds / millisecondsInYear)

const portfolioWebsite: Project = {
  id: 'portfolio-website',
  title: 'Portfolio Website',
  summary:
    'My website, designed and built from scratch to showcase my coding skills, 3D modelling skills and running stats.',
  paragraphs: [
    `This website has undergone extensive updates since I first deployed it ${yearsSinceDeployment} years ago.
      The first version was built with just React as a single page application and styled with pure CSS.
      As I wanted to record my running data I transitioned to a full stack application using Node.js and Express for the backend, and MongoDB for the database.
      I also switched to Next.js for the front end, which allowed me to use server-side rendering and static site generation.
      This made the site much faster and more efficient, especially for the project pages which are now generated dynamically. 
      A similar approach of dynamic data loading is used to create the project 'cards' displayed on the main projects page.`,

    `Another major change was the switch from CSS to TailwindCSS for styling.
      This allowed me to use utility classes to style the components, which made the code much cleaner and easier to maintain.
    
    I also completely rewrote the backend logic in Python using FastAPI, as I wanted to simplify the development process for adding new features in the future,
     as well as being able to use Python data science libraries to process my running data.`,

    `For the running page, I set up a FastAPI server to fetch my running data from a MongoDB database and is deployed to AWS Lambda.
      D3.js graphs then displays the data as a scatter plot with lines of best fit. The server queries Strava's API and updates the database twice daily with new running data.
      To ensure scalability, I deployed the server to the cloud using AWS Elastic Beanstalk.`,

    `This website is an ongoing project, and I am continually adding new features and improving the design.`,
  ],

  projectPageURI: '/coding/portfolio-website',
  screenshotURIs: [
    '/images/projects/portfolio-website.png',
    '/images/projects/portfolio-website-projects.png',
    '/images/projects/portfolio-website-about.png',
  ],
  mainLanguage: 'TypeScript',
  links: [
    // {
    //   URL: 'https://github.com/Jamnic98/website-client',
    //   label: '[OLD] - GitHub Repo (client)',
    //   type: LinkType.EXTERNAL,
    // },
    // {
    //   URL: 'https://github.com/Jamnic98/website-server',
    //   label: '[OLD] - GitHub Repo (server)',
    //   type: LinkType.EXTERNAL,
    // },
    {
      URL: 'https://github.com/Jamnic98/jstimpson-client',
      label: 'GitHub Repo (client)',
      type: LinkType.EXTERNAL,
    },
    {
      URL: 'https://github.com/Jamnic98/jstimpson-server',
      label: 'GitHub Repo (server)',
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
