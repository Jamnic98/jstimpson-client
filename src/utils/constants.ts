import type { NavlinkData } from 'types'

export const navlinkObjArr: NavlinkData[] = [
  {
    label: 'logs',
    url: '/logs/running',
    children: [
      { label: 'running', url: '/logs/running', children: [] },
      // { label: 'weight lifting', url: '/logs/weight-lifting', children: [] },
      // { label: 'habit tracker', url: '/logs/habit-tracker', children: [] },
      // { label: 'reading', url: '/logs/reading', children: [] }
    ],
  },
  { label: 'projects', url: '/projects', children: [] },
  { label: 'about ', url: '/about', children: [] },
]

export const MOBILE_SCREEN_WIDTH = 800

export const PERSONAL_GITHUB_URL = 'https://github.com/Jamnic98?tab=repositories'

export const PERSONAL_LINKEDIN_URL = 'https://linkedin.com/in/jamie-p-stimpson/'

export const AI_HACKATHON_URL =
  'https://www.encode.club/ai-hackathon#:~:text=London%2C%20March%208%2D10th%202024,Pl%2C%20London%2C%20E14%205RE.'

export const AI_ADVENTURE_WRLD_GITHUB_URL = 'https://github.com/duybuile/ai-text-game'

export const LOREM_IPSUM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
