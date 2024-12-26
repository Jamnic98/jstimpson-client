'use client'
// import { useEffect, useState } from 'react'
// import Link from 'next/link'

import { PageHeader /* Explorer, RunningStats  */ } from 'components'
import { /* Project, */ type RunData } from 'types'
// import projects from 'data/projects'
// import styles from 'styles/index.module.css'

interface HomePageProps {
  runData: RunData[] | null
}

export default function Page({ runData }: HomePageProps) {
  console.log(runData)
  // const [randomProjects, setRandomProjects] = useState<Partial<Project>[]>([])

  // useEffect(() => {
  //   // Randomly shuffle the projects only on the client
  //   const shuffledProjects = projects
  //     .map((project) => ({
  //       title: project.title,
  //       summary: project.summary,
  //       projectPageURI: project.projectPageURI,
  //     }))
  //     .sort(() => Math.random() - 0.5) // Shuffle the array
  //     .slice(0, 3) // Get the first 3 projects

  //   setRandomProjects(shuffledProjects)
  // }, [])

  return (
    <main className="container">
      <PageHeader title="Home" description="" />
      <article className="">
        {/* <section className={styles.homeDescription}>
          <p>Hello and welcome to my portfolio website!</p>
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
        </section> */}
        {/* <section>
          <Explorer
            title="Project Explorer"
            data={randomProjects} // Use the state for random projects
          />
        </section>
        <section>
          <h3 style={{ marginBottom: 0 }}>
            {new Date().toLocaleString('default', { month: 'long' })} Running Stats
          </h3>
          <hr className="subRule" />
          <div style={{ width: 'max-content' }}>
            {runData ? (
              <>
                <RunningStats runData={runData} />
                <div className={styles.allProjectsLink}>
                  <Link href="/logs/running">all stats</Link>
                </div>
              </>
            ) : (
              <div>*Error fetching run data</div>
            )}
          </div>
        </section> */}
      </article>
    </main>
  )
}
