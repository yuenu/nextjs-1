import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/event/EventList'
import EventSearch from '../../components/event/EventSearch'

const AllEventPage: NextPage = () => {
  const router = useRouter()
  const events = getAllEvents()

  function onSearch(year: string, month: string) {
      console.log('year',year,'month',month)
      const fullPath = `/events/${year}/${month}`
      router.push(fullPath)
  }


  return (
    <div>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </div>
  )
}

export default AllEventPage
