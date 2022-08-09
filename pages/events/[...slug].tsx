import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../helpers/api-utils'
import EventList from '../../components/event/EventList'
import ResultsTitle from '../../components/event/ResultsTitle'
import Button from '../../components/ui/Button'
import ErrorAlert from '../../components/ui/ErrorAlert'
import { Response } from '../../types'

type Props = {
  hasError: boolean
  events: Response 
  date: {
    year: number,
    month: number
  }
}

const FilterEventsPage: NextPage<Props> = ({hasError, events, date}) => {
  // const router = useRouter()

  // const filterData = router.query.slug

  // if (!filterData) {
  //   return <p className='center'>Loading...</p>
  // }

  // const filteredYear = filterData[0]
  // const filteredMonth = filterData[1]

  // const numYear = +filteredYear
  // const numMonth = +filteredMonth
  // console.log('numYear', numYear, numMonth, isNaN(numYear))
  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter/ Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/'>Show All Events</Button>
        </div>
      </>
    )
  }

  const filteredEvents = events

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/'>Show All Events</Button>
        </div>
      </>
    )
  }

  const selectDate = new Date(date.year, date.month - 1)

  return (
    <>
      <ResultsTitle date={selectDate} />
      <EventList items={filteredEvents} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const filterData = context.query.slug as string[]

  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: {
        hasError: true
      },
    }
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  }
}

export default FilterEventsPage
