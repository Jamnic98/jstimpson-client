'use client'

import { useState } from 'react'

import { Card, PageHeader, Select } from 'components'
import { projectCodingLanguages } from 'utils'
import projects from 'data/projects'
import { type Project } from 'types'

const defaultSelectValue = 'All'

export default function ProjectsPage() {
  const [language, setLanguage] = useState<string>(defaultSelectValue)

  // Filter the projects based on the selected language
  const filteredProjects = projects.filter(
    (projectData: Project) =>
      language === defaultSelectValue || projectData.mainLanguage.indexOf(language) !== -1
  )

  return (
    <>
      <PageHeader
        title="Coding Projects"
        description="A collection of personal programming projects I've built."
      />
      <article>
        {/* <section className="my-12">

        </section> */}

        <section className="my-12">
          <div className="my-8">
            <label className="mb-4 block text-xl">Filter by coding language: </label>
            <Select defaultValue="All" items={projectCodingLanguages} onChange={setLanguage} />
          </div>

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
