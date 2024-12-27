import { type Metadata } from 'next'

import Layout from './projects-page'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  return <Layout />
}
