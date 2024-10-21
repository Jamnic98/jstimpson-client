export enum LinkType {
	EXTERNAL = 'external',
	INTERNAL = 'internal',
}

export type ProjectLinkDataType = { URL: string; label: string; type: LinkType }

export type ProjectDataType = {
	id: string
	title: string
	summary: string
	paragraphs: string[]
	projectPageURI: string
	screenshotURIs: string[]
	mainLanguage: string
	links: ProjectLinkDataType[]
	techStack: string[]
}
