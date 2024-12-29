'use client'
import { useState } from 'react'
import Link from 'next/link'

import { Card, PageHeader } from 'components'
import projects from 'data/projects'
import { type Project } from 'types'

const languages = [
  '',
  ...(Array.from(
    new Set(projects.map((projectData: Project) => projectData.mainLanguage))
  ) as string[]),
]

export default function ProjectsPage() {
  const [language, setLanguage] = useState(languages[0])

  // Filter the projects based on the selected language
  const filteredProjects = projects.filter(
    (projectData: Project) => language === '' || projectData.mainLanguage === language
  )

  return (
    <>
      <PageHeader
        title="Projects"
        description="Here are some of the personal projects I have worked on:"
      />
      <article>
        <section>
          Filter by language:{' '}
          <select className="" onChange={(e) => setLanguage(e.target.value)}>
            {languages.map((mainLanguage: string, index) => (
              <option className="" key={index}>
                {mainLanguage}
              </option>
            ))}
          </select>
        </section>
        <section>
          <div className="">
            {filteredProjects.map((projectData: Project) => (
              <Link
                href={`/projects/${projectData.id}`}
                data-testid="application-card"
                key={projectData.id}
              >
                <Card
                  title={projectData.title}
                  description={projectData.summary}
                  imageURI={projectData.screenshotURIs[0]}
                />
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  )
}
