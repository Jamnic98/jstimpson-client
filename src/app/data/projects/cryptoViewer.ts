import { ProjectDataType } from 'types'

const readingLog: ProjectDataType = {
	id: 'crypto-viewer',
	title: 'Crypto Viewer',
	summary: 'Displays real-time cryptocurrency price data.',
	paragraphs: [
		`Around the start of August 2021, I became interested in cryptocurrency investing and wanted to monitor the price of Bitcoin and Ethereum
     without having to continually check online, so I built a circuit with some electronic components and programmed a NodeMCU ESP-12 wifi 
     enabled micro-controller using C++ to request cryptocurrency prices in GBP from Coinbase. To display the prices, I initially connected
     a 2.2 inch TFT display, which worked well, as multiple prices could be displayed at once. Unfortunately, after about a month of use, one
     of the components on the board which controlled the display blew, so I replaced it with the only other screen I had at the time, which was
     a 16x2 LCD screen. To display more than two cryptocurrencies at a time, I coded the ESP-12 to cycle through the price strings, giving them
     the appearance of being shifted upwards incrementally.
    `,
	],
	projectPageURI: '/projects/crypto-viewer',
	screenshotURIs: ['/images/projects/crypto-viewer.jpg'],
	mainLanguage: 'C++',
	links: [],
	techStack: ['C++', 'NodeMCU ESP-12', '2.2" TFT', '16x2 LCD'],
}

export default readingLog
