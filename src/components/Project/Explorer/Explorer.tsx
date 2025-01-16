import React from 'react'
import Link from 'next/link'

import { type Project } from 'types'
// import styles from './explorer.module.css'

interface ExplorerProps {
  title: string
  projectData: Partial<Project>[]
}

export const Explorer: React.FC<ExplorerProps> = ({ title, projectData }) => (
  <>
    <h2 className="mb-0 text-3xl font-semibold">{title}</h2>
    <hr className="my-4" />
    {projectData.map((dataObj, index) => (
      <Link
        className="group mb-8 block bg-gray-50 p-4 text-gray-950 hover:cursor-pointer"
        href={dataObj.projectPageURI || ''}
        key={index}
      >
        <h3 className="mb-4 text-2xl font-bold text-orange-500 group-hover:text-gray-950">
          {dataObj.title}
        </h3>
        <p className="text-xl">{dataObj.summary}</p>
      </Link>
    ))}
    <div className="flex justify-center">
      <Link className="text-xl font-medium text-orange-500 hover:text-gray-950" href="/projects">
        <span className="w-fit bg-slate-50 px-12 py-2 font-semibold">all projects</span>
      </Link>
    </div>
  </>
)
