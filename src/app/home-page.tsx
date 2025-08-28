'use client'

import { Suspense } from 'react'
import Link from 'next/link'

import { PageHeader, Explorer, RunningStats, Loader } from 'components'
import { type Project, type RunData } from 'types'
import projects from 'data/projects'
import portfolioWebsite from 'data/projects/portfolioWebsite'

const PROJECT_COUNT = 4

interface HomePageProps {
  runData: RunData[]
}

const FeaturedProjects = ({ projects }: { projects: Partial<Project>[] }) => (
  <section className="my-12">
    <Explorer title="Featured Projects" projectData={projects} />
  </section>
)

const RunningSection = ({ runData }: { runData: RunData[] }) => (
  <section className="my-12">
    <h2 className="mb-0 text-3xl font-semibold">
      {new Date().toLocaleString('default', { month: 'long' })} Running
    </h2>
    <hr className="my-4 border-gray-300" />
    <div className="mb-4">
      <RunningStats runData={runData} />
    </div>
    <div className="my-4 flex justify-center">
      <Link className="group" href="/logs">
        <span className="text-xl font-medium text-orange-600 group-hover:text-gray-950">
          - all stats -
        </span>
      </Link>
    </div>
  </section>
)

const HomePage: React.FC<HomePageProps> = ({ runData }) => {
  const filteredProjects = projects
    .filter((project) =>
      [
        'portfolio-website',
        'typation',
        'inventory-management-system',
        'blue-cheese-classifier',
      ].includes(project.id)
    )
    .slice(0, PROJECT_COUNT)
    .map(({ id, title, summary, projectPageURI }) => ({
      id,
      title,
      summary,
      projectPageURI,
    }))

  return (
    <>
      <PageHeader title="Home" description="Hello and welcome to my portfolio website." />

      <article className="mb-16">
        {/* About */}
        <section className="my-12">
          <p className="mb-4 text-justify text-xl">
            I built this site from scratch using NextJS, React, TypeScript, Python, FastAPI, and
            MongoDB...{' '}
            <Link
              className="text-orange-600 hover:text-gray-950"
              href={portfolioWebsite.projectPageURI}
            >
              here
            </Link>
            .
          </p>
        </section>

        {/* Projects */}
        <Suspense
          fallback={
            <div className="flex justify-center">
              <Loader />
            </div>
          }
        >
          <FeaturedProjects projects={filteredProjects} />
        </Suspense>

        {/* Running data */}
        <Suspense
          fallback={
            <div className="flex justify-center">
              <Loader />
            </div>
          }
        >
          <RunningSection runData={runData} />
        </Suspense>
      </article>
    </>
  )
}

export default HomePage
