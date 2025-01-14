import React from 'react'
import Link from 'next/link'
import { CgExternal, CgInternal } from 'react-icons/cg'

import { LinkType, type ProjectLink } from 'types'

export interface ProjectLinksProps {
  links: ProjectLink[]
}

export const ProjectLinks: React.FC<ProjectLinksProps> = ({ links }) => (
  <nav className="">
    {links.map((link, index) => {
      if (link.type === LinkType.EXTERNAL) {
        return (
          <a className="" href={link.URL} target="_blank" rel="noreferrer" key={index}>
            {link.label} <CgExternal />
          </a>
        )
      } else if (link.type === LinkType.INTERNAL) {
        return (
          <Link className="" href={link.URL} key={index}>
            {link.label} <CgInternal />
          </Link>
        )
      }
    })}
  </nav>
)
