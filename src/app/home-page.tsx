'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { PageHeader, Explorer, RunningStats } from 'components'
import { type Project, type RunData } from 'types'
// TODO: clean up imports
import projects from 'data/projects'
import portfolioWebsite from 'data/projects/portfolioWebsite'

const PROJECT_COUNT = 4

interface HomePageProps {
  runData: RunData[]
}

const HomePage: React.FC<HomePageProps> = ({ runData }) => {
  const [randomProjects, setRandomProjects] = useState<Partial<Project>[]>([])

  useEffect(() => {
    // Shuffle projects and select 4
    const shuffledProjects = projects
      .map((project) => ({
        title: project.title,
        summary: project.summary,
        projectPageURI: project.projectPageURI,
      }))
      .sort(() => Math.random() - 0.5)
      .slice(0, PROJECT_COUNT)

    setRandomProjects(shuffledProjects)
  }, [])

  return (
    <>
      <PageHeader title="Home" description="Hello and welcome to my portfolio website." />
      <article>
        <section className="my-12">
          <p className="mb-4 text-justify text-xl">
            I built this site from scratch using NextJS, React, TypeScript, Python, FastAPI, and
            MongoDB. The frontend is made using custom components with TailwindCSS for styling, and
            is fully mobile responsive! Here, you will find a range of my programming projects,
            mainly in Python, and TypeScript, along with daily updates of my running data, which is
            fetched using Strava&apos;s API. Read more about this website{' '}
            <Link
              className="text-orange-600 hover:text-gray-950"
              href={portfolioWebsite.projectPageURI}
            >
              here
            </Link>
            . I also recently added a section for{' '}
            <Link className="text-orange-600 hover:text-gray-950" href="/3d">
              3D models
            </Link>{' '}
            I have made using Blender.
          </p>
          <p className="mb-4 text-justify text-xl">
            This is an ongoing project where I handle everything from frontend and backend
            development to DevOps processes and deployments, ensuring the site remains dynamic and
            functional.
          </p>
        </section>

        <section className="my-12">
          <Explorer title="Coding Projects" projectData={randomProjects} />
        </section>

        <section className="my-12">
          <h2 className="mb-0 text-3xl font-semibold">
            {new Date().toLocaleString('default', { month: 'long' })} Running
          </h2>
          <hr className="my-4 border-gray-300" />
          <>
            {runData && (
              <>
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
              </>
            )}
          </>
        </section>
      </article>
    </>
  )
}

export default HomePage
