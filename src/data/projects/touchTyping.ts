import { LinkType, type Project } from 'types'

const touchTyping: Project = {
  id: 'touch-typing',
  title: 'Touch Typing',
  summary: 'A program to improve typing speed and accuracy.',
  paragraphs: [
    `The idea behind this project was to make an application that would analyse 
     the user's typing patterns and present them with words that contained combinations 
     of letters that they were having trouble typing, in theory increasing their rate of improvement.
     To test my hypothesis, I created a typing interface with React and Node.js that would randomly 
     select words for the user to type, then save the hits and misses of individual letters and letter
     combinations to a JSON file which I would later use for analysis.`,
    `After gathering my typing data by practicing with the app, I wrote a Python script to extract
     the data from the JSON file, then analyse and plot it using Matplotlib. I wanted to make the app
     a fully fledged website but stopped working on the project as I believed the end result would be
     too similar to another site that I took inspiration from.`,
  ],
  projectPageURI: '/coding/touch-typing',
  screenshotURIs: ['/images/projects/touch-typing.png', '/images/projects/touch-typing-graph.png'],
  mainLanguage: 'TypeScript',
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
  techStack: ['TypeScript', 'React', 'Node.js', 'Express.js', 'Jest', 'HTML', 'CSS', 'JSON'],
}

export default touchTyping
