import { type Metadata } from 'next'
import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'

import { PageHeader, ProjectDescriptions, ProjectLinks, ProjectGallery } from 'components'
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
    <>
      <PageHeader title={projectData.title} description={projectData.summary} />
      <article>
        <section>
          <p className="text-xl">
            <span className="font-bold text-orange-500">Tech stack: </span>
            {projectData.techStack.map((tech: string) => tech).join(', ')}
          </p>
        </section>

        {projectData.links.length ? (
          <section>
            <h2 className="mb-0 text-3xl font-semibold">Project Links</h2>
            <hr className="my-4" />
            <ProjectLinks links={projectData.links} />
          </section>
        ) : null}

        <section>
          <h2 className="mb-0 text-3xl font-semibold">Gallery</h2>
          <hr className="my-4" />
          <ProjectGallery screenshotURIs={projectData.screenshotURIs} />
        </section>

        <section>
          <ProjectDescriptions paragraphs={projectData.paragraphs} />
        </section>

        <Link
          className="flex w-fit space-x-2 bg-slate-50 px-12 py-2 text-xl font-semibold leading-none text-orange-500 hover:text-black"
          href="/projects"
        >
          <FaArrowLeftLong className="text-2xl" /> <span>projects</span>
        </Link>
      </article>
    </>
  )
}
