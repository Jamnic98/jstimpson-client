'use client'
import * as d3 from 'd3'

import { LineGraph, RunningStats, ScatterGraph } from 'components'
import { type RunData } from 'types'

interface RunningDataViewProps {
  runData: RunData[]
}

export const RunningDataView = ({ runData }: RunningDataViewProps) => {
  return (
    <>
      <section>
        <h2 className="mb-0 text-3xl font-semibold">Running Data</h2>
        <hr className="my-4" />
        <RunningStats runData={runData} />
        <br />
      </section>
      <section>
        <h3 className="text-2xl font-semibold">Date / Distance:</h3>
        <LineGraph
          data={runData?.map((d: any) => {
            const { start_date_local, distance } = d
            return {
              x: start_date_local,
              y: distance / 1000,
            }
          })}
          xAxisObj={{
            label: 'date (mm/yy)',
            labelOffset: 15,
            labelFormatter: d3.timeFormat('%m/%y'),
          }}
          yAxisObj={{
            label: 'distance (km)',
            labelOffset: -10,
          }}
        />
      </section>
      <section>
        <h3 className="text-2xl font-semibold">Distance / Average Pace:</h3>
        <ScatterGraph
          data={runData?.map((d: any) => {
            const { distance, duration, start_date_local } = d
            return {
              x: distance / 1000,
              y: duration / 60 / (distance / 1000),
              start_date_local,
            }
          })}
          xAxisObj={{
            label: 'distance (km)',
            labelOffset: 0,
          }}
          yAxisObj={{
            label: 'ave. pace (min / km)',
            labelOffset: -15,
            labelFormatter: (d: any) => {
              const minutes = Math.floor(d)
              const seconds = Number((60 * (d - Math.floor(d))).toFixed(0))
              const secondsStr = seconds === 0 ? `:${seconds}0` : `:${seconds}`
              return minutes + secondsStr
            },
          }}
        />
      </section>
    </>
  )
}
