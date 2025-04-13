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
        title="Coding Projects"
        description="Here are some of the personal programming projects I have worked on:"
      />
      <article>
        <section>
          <label className="text-lg"> Filter by language: </label>
          <select
            className="mt-4 w-full rounded-lg bg-slate-100 p-2 focus:outline-hidden"
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages
              .sort((a, b) => a.localeCompare(b))
              .map((mainLanguage: string, index) => (
                <option className="border-none bg-slate-100 px-4 focus:outline-hidden" key={index}>
                  {mainLanguage}
                </option>
              ))}
          </select>
        </section>
        <section>
          <div className="grid grid-cols-1 flex-col gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProjects.map((projectData: Project) => (
              <div className="col-span-1 flex justify-center" key={projectData.id}>
                <Card
                  title={projectData.title}
                  description={projectData.summary}
                  imageURI={projectData.screenshotURIs[0]}
                  linkURI={`/coding/${projectData.id}`}
                />
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  )
}
