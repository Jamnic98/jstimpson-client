'use client'

import { useState } from 'react'
// import Link from 'next/link'

import { Card, PageHeader } from 'components'
import projects from 'data/projects'
import { type Project } from 'types'

const languages = [
  'All',
  ...Array.from(new Set(projects.map((projectData: Project) => projectData.mainLanguage))),
]

export default function ProjectsPage() {
  const [language, setLanguage] = useState(languages[0])

  // Filter the projects based on the selected language
  const filteredProjects = projects.filter(
    (projectData: Project) => language === 'All' || projectData.mainLanguage === language
  )

  return (
    <>
      <PageHeader
        title="Projects"
        description="Here are some of the personal projects I have worked on:"
      />
      <article>
        <section>
          <span> Filter by language: </span>
          <select
            className="mt-4 w-full bg-neutral-light p-2"
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((mainLanguage: string, index) => (
              <option className="px-4" key={index}>
                {mainLanguage}
              </option>
            ))}
          </select>
        </section>
        <section>
          <div className="grid grid-cols-1 flex-col gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProjects.map((projectData: Project) => (
              <div className="col-span-1 flex justify-center" key={projectData.id}>
                <Card
                  title={projectData.title}
                  description={projectData.summary}
                  imageURI={projectData.screenshotURIs[0]}
                  linkURI={`/projects/${projectData.id}`}
                />
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  )
}
