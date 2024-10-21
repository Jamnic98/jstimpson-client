import type { NavlinkDataType } from '../types'

export const navlinkObjArr: NavlinkDataType[] = [
  {
    label: 'logs',
    url: '/logs/running',
    children: [
      { label: 'running', url: '/logs/running', children: [] }
      // { label: 'weight lifting', url: '/logs/weight-lifting', children: [] },
      // { label: 'habit tracker', url: '/logs/habit-tracker', children: [] },
      // { label: 'reading', url: '/logs/reading', children: [] }
    ]
  },
  { label: 'projects', url: '/projects', children: [] },
  { label: 'about ', url: '/about', children: [] }
]

export const PERSONAL_GITHUB_REPO_URL =
  'https://github.com/Jamnic98?tab=repositories'
export const PERSONAL_LINKEDIN_URL = 'https://linkedin.com/in/jamie-p-stimpson/'
