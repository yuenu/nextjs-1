import type { NextPage } from 'next'
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
