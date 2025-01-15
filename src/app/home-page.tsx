'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { PageHeader, Explorer, RunningStats } from 'components'
import { type Project, type RunData } from 'types'
import projects from 'data/projects'

interface HomePageProps {
  runData: RunData[] | null
}

export default function HomePage({ runData }: HomePageProps) {
  console.log(runData)
  const [randomProjects, setRandomProjects] = useState<Partial<Project>[]>([])
  console.log(randomProjects)

  useEffect(() => {
    // Shuffle projects and select 3
    const shuffledProjects = projects
      .map((project) => ({
        title: project.title,
        summary: project.summary,
        projectPageURI: project.projectPageURI,
      }))
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)

    setRandomProjects(shuffledProjects)
  }, [])

  return (
    <>
      <PageHeader title="Home" description="" />
      <article className="">
        <section className="">
          {/* <p>Hello and welcome to my portfolio website.</p> */}
          <p>
            This site was built entirely from scratch using NextJS, Python, and MongoDB. Initially,
            I used React for the frontend and NodeJs for the backend but recently transitioned to my
            current stack. Here, you will find a range of my programming projects, primarily in
            Python and JavaScript/TypeScript, along with daily updates of my running data, which is
            fetched using Strava&apos;s API.
          </p>
          <p>
            This is an ongoing project where I handle everything from frontend and backend
            development to DevOps processes and deployments, ensuring the site remains dynamic and
            functional.
          </p>
        </section>
        <section>
          <Explorer title="Project Explorer" data={randomProjects} />
        </section>
        <section>
          <h3 className="mb-0 text-3xl font-semibold">
            {new Date().toLocaleString('default', { month: 'long' })} Running Stats
          </h3>
          <hr className="my-4" />
          <div>
            {runData ? (
              <>
                <RunningStats runData={runData} />
                <div className="flex items-center justify-center">
                  <Link
                    className="text-lg text-orange-500 hover:text-gray-950"
                    href="/logs/running"
                  >
                    all stats
                  </Link>
                </div>
              </>
            ) : (
              <div>*Error fetching run data</div>
            )}
          </div>
        </section>
      </article>
    </>
  )
}
