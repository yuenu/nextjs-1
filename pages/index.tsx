import type { NextPage } from 'next'
import Head from 'next/head'
// import { getFeaturedEvents } from '../dummy-data'
import { getFeaturedEvents } from '../helpers/api-utils'
import EventList from '../components/event/EventList'
import { Response } from '../types'

type Props = {
  events: Response
}

const Home: NextPage<Props> = ({ events }) => {
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you evlove"
        />
      </Head>
      <EventList items={events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents,
    },
  }
}

export default Home
