import { LinkType, type Project } from 'types'
import { projectImagesFolderPaths } from 'utils/constants'

const pokerPreFlopSim: Project = {
  id: 'poker-pre-flop-sim',
  title: 'Poker Pre-flop Simulator',
  summary: 'Runs pre-flop simulations and calculates win rates for starting hands.',
  paragraphs: [
    `This project is a poker simulation tool designed to run pre-flop poker simulations and analyse the performance of different starting hands.
     It uses a Monte Carlo-style approach to simulate a large number of poker hands, dealing cards, and evaluating hands through the pre-flop, flop, turn, and river stages.
     The primary goal is to determine the win rates of various starting hands across multiple simulations, providing valuable insights for strategic decision-making in poker.`,

    `The simulation is built to run efficiently even with a large number of iterations, using parallel processing to handle multiple simulations at once.
     It chunks the results into manageable pieces, ensuring that memory usage remains optimised.
     After the simulations are complete, the tool aggregates the results and calculates the win rates for each unique starting hand, displaying the data through clear visual graphs that help users easily interpret the outcomes.`,

    `This project is a useful resource for poker enthusiasts, players, and analysts looking to better understand the probabilities and dynamics of poker hands.
     It allows users to experiment with different player counts and simulation runs to gather a wide range of data, making it a flexible tool for anyone interested in exploring poker strategies.
     By visualising win rates and grouping data based on starting hands, the tool empowers users to make more informed decisions when playing poker.`,

    `The biggest challenge I faced was ensuring that the simulation was accurate and efficient, which I overcame by writing unit tests to verify the correctness of the simulation logic and using parallel processing to speed up the calculations.
      It was a great learning experience in concurrency in Python and optimising performance for computationally intensive tasks.`,
  ],
  projectPageURI: '/coding/poker-pre-flop-sim',
  screenshotURIs: [
    `${projectImagesFolderPaths.pokerPreFlopSimulator}/cmd_line_results.webp`,
    `${projectImagesFolderPaths.pokerPreFlopSimulator}/results_graph.webp`,
  ],
  mainLanguage: ['Python'],
  links: [
    {
      label: 'GitHub Repo',
      URL: 'https://github.com/Jamnic98/poker-simulator',
      type: LinkType.EXTERNAL,
    },
  ],
  techStack: ['Python', 'Matplotlib', 'NumPy', 'Pandas'],
}

export default pokerPreFlopSim
