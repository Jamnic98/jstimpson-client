import React from 'react'
import Link from 'next/link'

import { type Project } from 'types'
// import styles from './explorer.module.css'

interface ExplorerProps {
  title: string
  data: Partial<Project>[]
}

export const Explorer: React.FC<ExplorerProps> = ({ title, data }) => (
  <>
    <h3 className="mb-0 text-3xl font-semibold">{title}</h3>
    <hr className="my-4" />
    <div>
      {data.map((d, index) => (
        <Link
          className="group my-2 block bg-gray-50 p-2 text-gray-950 hover:cursor-pointer"
          href={d.projectPageURI || ''}
          key={index}
        >
          <h4 className="m-0 p-0 text-xl font-bold text-orange-500 group-hover:text-gray-950">
            {d.title}
          </h4>
          <p>{d.summary}</p>
        </Link>
      ))}
      <div className="flex items-center justify-center">
        <Link className="text-lg text-orange-500 hover:text-gray-950" href="/projects">
          all projects
        </Link>
      </div>
    </div>
  </>
)
