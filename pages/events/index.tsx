import type { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getAllEvents } from '../../helpers/api-utils'
import EventList from '../../components/event/EventList'
import EventSearch from '../../components/event/EventSearch'
import {Response} from '../../types'
import Head from 'next/head'

type Props = {
  events: Response
}

const AllEventPage: NextPage<Props> = ({events}) => {
  const router = useRouter()
  // const events = getAllEvents()

  function onSearch(year: string, month: string) {
    console.log('year', year, 'month', month)
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <>
    <Head>
      <title>All Events</title>
      <meta name="description" content="Find a lot of great events that allow you to evolve" />
    </Head>
    <div>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents()

  return {
    props: {
      events: events
    }
  }
}

export default AllEventPage
