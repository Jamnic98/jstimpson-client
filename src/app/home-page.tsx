'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { PageHeader, Explorer, RunningStats } from 'components'
import { type Project, type RunData } from 'types'
import projects from 'data/projects'
import portfolioWebsite from 'data/projects/portfolioWebsite'

const PROJECT_COUNT = 4

interface HomePageProps {
  runData: RunData[] | null
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
      <PageHeader title="Home" description="" />
      <article>
        <section>
          <p className="text-xl">Hello and welcome to my portfolio website.</p>
          <p className="text-xl">
            I built this site entirely from scratch using NextJS, TypeScript, Python, and MongoDB.
            The frontend is made using custom components. Initially, I used React for the frontend
            and NodeJs for the backend but transitioned to the current stack for ease of development
            reasons. Here, you will find a range of my programming projects, mainly in Python, and
            TypeScript, along with daily updates of my running data, which is fetched using
            Strava&apos;s API. Read more about this website{' '}
            <Link
              className="text-orange-600 hover:text-black"
              href={portfolioWebsite.projectPageURI}
            >
              here
            </Link>
            . I also recently added a section for{' '}
            <Link className="text-orange-600 hover:text-black" href="/3d">
              3D renders
            </Link>{' '}
            of projects I have made using Blender.
          </p>
          <p className="text-xl">
            This is an ongoing project where I handle everything from frontend and backend
            development to DevOps processes and deployments, ensuring the site remains dynamic and
            functional.
          </p>
        </section>

        <section>
          <Explorer title="Coding Projects" projectData={randomProjects} />
        </section>

        <section>
          <h2 className="mb-0 text-3xl font-semibold">
            {new Date().toLocaleString('default', { month: 'long' })} Running
          </h2>
          <hr className="my-4" />
          <>
            {runData ? (
              <>
                <div className="mb-4">
                  <RunningStats runData={runData} />
                </div>

                <div className="my-4 flex justify-center">
                  <Link className="group" href="/logs">
                    <span className="text-xl font-semibold text-orange-600 group-hover:text-gray-950">
                      - all stats -
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <div>*Error fetching data</div>
            )}
          </>
        </section>
      </article>
    </>
  )
}

export default HomePage
