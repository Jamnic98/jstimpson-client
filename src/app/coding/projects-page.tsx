'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

import { Card, PageHeader, Select } from 'components'
import { projectCodingLanguages, useWidth } from 'utils'
import projects from 'data/projects'
import { type Project } from 'types'

const defaultSelectValue = 'All'

export default function ProjectsPage() {
  const width = useWidth()
  const prevWidth = useRef<number | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [language, setLanguage] = useState<string>(defaultSelectValue)
  const [currentPage, setCurrentPage] = useState(0)

  const PROJECTS_PER_PAGE = useMemo(() => {
    if (width && width < 640) return 1
    if (width && width < 1024) return 2
    return 4
  }, [width])

  // Filter projects
  const filteredProjects = projects.filter(
    (projectData: Project) =>
      language === defaultSelectValue || projectData.mainLanguage.includes(language)
  )

  // Break into pages
  const pages: Project[][] = []
  for (let i = 0; i < filteredProjects.length; i += PROJECTS_PER_PAGE) {
    pages.push(filteredProjects.slice(i, i + PROJECTS_PER_PAGE))
  }
  const totalPages = pages.length

  // Scroll when currentPage OR layout changes
  useEffect(() => {
    if (!carouselRef.current) return
    const container = carouselRef.current
    const scrollAmount = container.clientWidth * currentPage
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' })
  }, [currentPage, PROJECTS_PER_PAGE])

  useEffect(() => {
    if (!carouselRef.current) return
    const container = carouselRef.current

    // Only snap instantly if width changed
    if (prevWidth.current !== null && prevWidth.current !== width) {
      const scrollAmount = container.clientWidth * currentPage
      container.scrollLeft = scrollAmount // instant, no animation
    }

    prevWidth.current = width
  }, [width, currentPage])

  // Clamp page index when filter changes
  useEffect(() => {
    if (currentPage > totalPages - 1) {
      setCurrentPage(0)
    }
  }, [filteredProjects.length, totalPages, currentPage])

  if (width == null) return null

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
                  <div key={projectData.id} className="w-full px-2 py-8 sm:w-1/2 lg:w-1/4">
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

            <div className="hidden space-x-2 sm:flex">
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
