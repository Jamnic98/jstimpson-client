import { type Metadata } from 'next'

import { PageHeader, RunningDataView } from 'components'
import { getRunningData } from 'utils'

const pageTitle = 'Running'
const pageHeaderDescription = 'Here is my running data.'

export const metadata: Metadata = {
  title: pageTitle,
}

export default async function Page() {
  const runs = await getRunningData()

  return (
    <>
      <PageHeader title={pageTitle} description={pageHeaderDescription} />
      <article>
        <section className="my-12">
          <p className="mb-4 text-justify text-xl">
            Runs are recorded using the Strava app. The backend of this website makes requests to
            Strava&apos;s API to pull my activity data and store it in a MongoDB database. When this
            page loads, the database is queried and the retrieved data is plotted.
          </p>
          <p className="mb-4 text-justify text-xl">
            Since 2020, I have developed a regular running routine, aspiring to one day complete an
            ultramarathon (&#8805;50km). On the 22nd of October 2023, I ran the Battersea Park
            Marathon and raised £275 for The Alzheimer&apos;s Society!
          </p>
        </section>
        <section className="my-12">{runs && <RunningDataView runData={runs} />}</section>
      </article>
    </>
  )
}
