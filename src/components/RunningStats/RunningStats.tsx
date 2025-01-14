import {
  reduceSumFunc,
  getAverageDistanceString,
  getAverageDurationString,
  getFurthestDistanceString,
  getTotalDistanceString,
  getTotalDurationString,
} from 'utils'
import { type RunData } from 'types'

import styles from './running-stats.module.css'

interface RunningStatsProps {
  runData: RunData[]
}

export const RunningStats: React.FC<RunningStatsProps> = ({ runData }) => {
  // distance
  const distanceList = runData.map((runData: RunData) => runData.distance)
  const furthestDistanceInMeters = distanceList.length ? Math.max(...distanceList) : 0
  const totalDistanceInMeters = distanceList.length
    ? distanceList.reduce((a, b) => reduceSumFunc(a, b))
    : 0

  // duration
  const durationList = runData.map((runData: RunData) => runData.duration)
  const totalDurationInSeconds = durationList.length
    ? durationList.reduce((a, b) => reduceSumFunc(a, b))
    : 0

  return (
    <ul className={styles.splitList}>
      <li>
        <span>{getTotalDistanceString(totalDistanceInMeters)}</span>
      </li>
      <li>
        <span>{getFurthestDistanceString(furthestDistanceInMeters)}</span>
      </li>
      <li>
        <span>
          {getAverageDistanceString(
            distanceList.length ? totalDistanceInMeters / distanceList.length : 0
          )}
        </span>
      </li>
      <li>
        <span>{getTotalDurationString(totalDurationInSeconds)}</span>
      </li>
      <li>
        <span>
          {getAverageDurationString(
            durationList.length ? totalDurationInSeconds / durationList.length : 0
          )}
        </span>
      </li>
      <li>
        <span>Run count: {runData.length}</span>
      </li>
    </ul>
  )
}
