'use client'

import { useRef, useState, useEffect } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { Card, PageHeader, Select } from 'components'
import { projectCodingLanguages } from 'utils'
import projects from 'data/projects'
import { type Project } from 'types'

const defaultSelectValue = 'All'
const PROJECTS_PER_PAGE = 4

export default function ProjectsPage() {
  const [language, setLanguage] = useState<string>(defaultSelectValue)
  const [currentPage, setCurrentPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Filter projects
  const filteredProjects = projects.filter(
    (projectData: Project) =>
      language === defaultSelectValue || projectData.mainLanguage.includes(language)
  )

  // Break into pages of 4 projects
  const pages: Project[][] = []
  for (let i = 0; i < filteredProjects.length; i += PROJECTS_PER_PAGE) {
    pages.push(filteredProjects.slice(i, i + PROJECTS_PER_PAGE))
  }
  const totalPages = pages.length

  // Scroll when currentPage changes
  useEffect(() => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const scrollAmount = container.clientWidth * currentPage
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
  }, [currentPage])

  // Clamp page index when filters change
  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(0)
    }
  }, [filteredProjects.length, totalPages, currentPage])

  return (
    <>
      <PageHeader
        title="Coding Projects"
        description="A collection of personal programming projects I've built."
      />
      <article>
        <section className="my-12">
          <div className="mt-8">
            <label className="mb-4 block text-xl">Filter by coding language: </label>
            <Select defaultValue="All" items={projectCodingLanguages} onChange={setLanguage} />
          </div>

          {/* Carousel */}
          <div ref={carouselRef} className="flex overflow-hidden">
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="flex w-full flex-shrink-0 justify-start px-2">
                {page.map((projectData) => (
                  <div key={projectData.id} className="w-1/4 px-2 py-8">
                    <Card
                      title={projectData.title}
                      description={projectData.summary}
                      imageURI={projectData.screenshotURIs[0]}
                      linkURI={`/coding/${projectData.id}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
              disabled={currentPage === 0}
              className="rounded-full p-2 transition hover:cursor-pointer hover:bg-gray-200 disabled:opacity-30"
            >
              <IoChevronBack className="h-6 w-6 text-gray-700" />
            </button>

            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`h-3 w-3 rounded-full transition hover:cursor-pointer ${
                    index === currentPage ? 'bg-orange-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Project count & page info */}
            <div className="text-center text-base text-gray-700">
              Showing <span className="font-semibold">{filteredProjects.length}</span> project
              {filteredProjects.length !== 1 && 's'} · Page{' '}
              <span className="font-semibold">{currentPage + 1}</span> of{' '}
              <span className="font-semibold">{totalPages}</span>
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1))}
              disabled={currentPage === totalPages - 1}
              className="rounded-full p-2 transition hover:cursor-pointer hover:bg-gray-200 disabled:opacity-30"
            >
              <IoChevronForward className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </section>
      </article>
    </>
  )
}
