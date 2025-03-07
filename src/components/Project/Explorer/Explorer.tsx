import Link from 'next/link'

import { type Project } from 'types'

interface ExplorerProps {
  title: string
  projectData: Partial<Project>[]
}

export const Explorer: React.FC<ExplorerProps> = ({ title, projectData }) => (
  <>
    <h2 className="mb-0 text-3xl font-semibold">{title}</h2>
    <hr className="my-4" />

    {/* Project links */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projectData.map((dataObj, index) => (
        <Link
          className="group col-span-1 block rounded-md bg-gray-50 p-4 shadow-md hover:cursor-pointer"
          href={dataObj.projectPageURI || ''}
          key={index}
        >
          {/* Project name */}
          <h3 className="mb-4 text-2xl font-bold text-orange-500 group-hover:text-gray-950">
            {dataObj.title}
          </h3>

          {/* Project description */}
          <p className="line-clamp-1 text-xl text-gray-950">{dataObj.summary}</p>
        </Link>
      ))}
    </div>

    {/* All projects button */}
    <div className="my-12 flex justify-center">
      <Link className="group rounded-lg bg-slate-100 px-2 py-2" href="/projects">
        <span className="text-xl font-semibold text-orange-500 group-hover:text-gray-950">
          - all projects -
        </span>
      </Link>
    </div>
  </>
)
