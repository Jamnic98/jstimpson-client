import { type Metadata } from 'next'

import { PageHeader /* RunningDataView */ } from 'components'

const pageTitle = 'Running'
const pageHeaderDescription = 'Here are my running statistics:'

export const metadata: Metadata = {
  title: 'Running',
}

export default function Page() {
  // const runs = await getData()
  return (
    <>
      <PageHeader title={pageTitle} description={pageHeaderDescription} />
      <article>
        <section>
          <p>
            Runs are recorded using the Strava app. The backend of this website makes requests to
            Strava&apos;s API to pull my activity data and store it in a MongoDB database. When this
            page loads, the database is queried and the retrieved data is plotted.
          </p>
          <p>
            Since 2020, I have developed a regular running routine, aspiring to one day complete an
            ultramarathon (&#8805;50km). On the 22nd of October 2023, I ran the Battersea Park
            Marathon and raised £275 for The Alzheimer&apos;s Society!
          </p>
        </section>
        {/* <section>{runs ? <RunningDataView /> : <div>{errorMsg}</div>}</section> */}
      </article>
    </>
  )
}

// const errorMsg = '*error retrieving running data*'
// const getData = async () => {
//   try {
//     const URL = (process.env.NEXT_PUBLIC_SERVER_URL as string) + '/runs'
//     const response = await fetch(URL, { next: { revalidate: 3600 } })
//     if (!response.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
//     const { runs } = await response.json()
//     return runs
//   } catch (error) {
//     console.error(error)
//     return null
//   }
// }
