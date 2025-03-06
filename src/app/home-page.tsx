'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { PageHeader, Explorer, RunningStats } from 'components'
import { type Project, type RunData } from 'types'
import projects from 'data/projects'

const PROJECT_COUNT = 4

interface HomePageProps {
  runData: RunData[] | null
}

const HomePage: React.FC<HomePageProps> = ({ runData }) => {
  const [randomProjects, setRandomProjects] = useState<Partial<Project>[]>([])

  useEffect(() => {
    // Shuffle projects and select 3
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
            I built this site entirely from scratch using NextJS, Python, and MongoDB. Initially, I
            used React for the frontend and NodeJs for the backend but recently transitioned to my
            current stack. Here, you will find a range of my programming projects, primarily in
            Python and JavaScript/TypeScript, along with daily updates of my running data, which is
            fetched using Strava&apos;s API.
          </p>
          <p className="text-xl">
            This is an ongoing project where I handle everything from frontend and backend
            development to DevOps processes and deployments, ensuring the site remains dynamic and
            functional.
          </p>
        </section>
        <section>
          <h2 className="mb-0 text-3xl font-semibold">
            {new Date().toLocaleString('default', { month: 'long' })} Running
          </h2>
          <hr className="my-4" />
          <>
            {runData ? (
              <>
                <div className="mb-8">
                  <RunningStats runData={runData} />
                </div>

                <div className="mt-8 flex justify-center">
                  <Link
                    className="rounded-lg bg-slate-50 px-12 py-2 text-xl font-medium"
                    href="/logs/running"
                  >
                    <span className="font-semibold text-orange-500 hover:text-gray-950">
                      all stats
                    </span>
                  </Link>
                </div>
              </>
            ) : (
              <div>*Error fetching data</div>
            )}
          </>
        </section>
        <section>
          <Explorer title="Project Explorer" projectData={randomProjects} />
        </section>
      </article>
    </>
  )
}

export default HomePage
