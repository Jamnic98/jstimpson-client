import { type Metadata } from 'next'
import Link from 'next/link'

import { PageHeader /* ProjectDescriptions, ProjectLinks, ProjectGallery */ } from 'components'
import projects_data from 'data/projects'

export const dynamicParams = false

export const generateStaticParams = () => {
  return projects_data.map((project) => ({
    id: project.id,
  }))
}

const getProject = (params: { id: string }) =>
  projects_data.filter((project) => project.id === params.id)[0]

export async function generateMetadata(props: ProjectProps): Promise<Metadata> {
  const params = await props.params
  const projectData = getProject({ id: params.id })
  return {
    title: projectData.title,
  }
}

interface ProjectProps {
  params: Promise<{ id: string }>
}

export default async function Page(props: ProjectProps) {
  const params = await props.params
  const projectData = getProject({ id: params.id })

  return (
    <main className="container">
      <PageHeader title={projectData.title} description={projectData.summary} />
      <article>
        <section>
          <b>Tech stack: </b>
          {projectData.techStack.map((tech: string) => tech).join(', ')}
        </section>

        {/* Project Links */}
        {/* {projectData.links.length ? (
          <section>
            <ProjectLinks links={projectData.links} />
          </section>
        ) : null} */}

        {/* Gallery */}

        {/* <section className={styles.gallery}>
          <ProjectGallery screenshotURIs={projectData.screenshotURIs} />
        </section>
        <section>
          <ProjectDescriptions paragraphs={projectData.paragraphs} />
        </section> */}
        <Link className="" href="/projects">
          &larr; projects
        </Link>
      </article>
    </main>
  )
}
