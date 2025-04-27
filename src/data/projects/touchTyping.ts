import { LinkType, type Project } from 'types'
import { projectImagesFolderPaths } from 'utils/constants'

const touchTyping: Project = {
  id: 'touch-typing',
  title: 'Touch Typing',
  summary: 'A program to improve typing speed and accuracy.',
  paragraphs: [
    `The idea behind this project was to build an application that analyses the user's typing patterns and presents them with words containing combinations of letters they struggle with—aiming to accelerate their improvement over time.
     To test this hypothesis, I created a typing interface using React with Vite on the frontend, and a backend now written in Golang. The system tracks hits and misses on individual letters and letter combinations, storing the data in JSON format for later analysis.
     There's also a Python-based text generation service that dynamically provides personalised practice words based on the user's performance. Redis is used as a job queue to handle requests to the text generation service asynchronously, helping keep the app responsive.`,

    `To manage the project infrastructure, I’m using Docker and Docker Compose to containerise and orchestrate the various services. After collecting my own typing data by using the app, I wrote a Python script to extract and visualise the data using Matplotlib.
     While I initially put the project on hold due to similarities with another site I drew inspiration from, I've since resumed development, and the project is currently a work in progress.`,
  ],
  projectPageURI: '/coding/touch-typing',
  screenshotURIs: [
    `${projectImagesFolderPaths.touchTyping}/input_widget.webp`,
    `${projectImagesFolderPaths.touchTyping}/results_graph.webp`,
  ],
  mainLanguage: ['TypeScript', 'Python', 'Golang'],
  links: [
    {
      URL: 'https://github.com/Jamnic98/touch-typing-client',
      label: 'GitHub Repo',
      type: LinkType.EXTERNAL,
    },
    // {
    //   URL: 'https://main.d37l1d2nbj7vsq.amplifyapp.com/',
    //   label: 'Project Link',
    //   type: LinkType.EXTERNAL,
    // },
  ],
  techStack: [
    'TypeScript',
    'React',
    'Vite',
    'Python',
    'Golang',
    'Redis',
    'Docker',
    'Docker Compose',
    'Jest',
    'HTML',
    'CSS',
    'JSON',
  ],
}

export default touchTyping
