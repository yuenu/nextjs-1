import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/event/EventList'
import ResultsTitle from '../../components/event/ResultsTitle'
import Button from '../../components/ui/Button'
import ErrorAlert from '../../components/ui/ErrorAlert'

const FilterEventsPage: NextPage = () => {
  const router = useRouter()

  const filterData = router.query.slug

  if (!filterData) {
    return <p className="center">Loading...</p>
  }

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth
  console.log('numYear', numYear, numMonth, isNaN(numYear))
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter/ Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/">Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/">Show All Events</Button>
        </div>
      </>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  )
}

export default FilterEventsPage
