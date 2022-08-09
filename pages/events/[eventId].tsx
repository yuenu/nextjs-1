import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { getEventById, getFeaturedEvents } from '../../helpers/api-utils'

import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/ErrorAlert'
import { ResponseItem } from '../../types'

type Props = {
  selectedEvent: ResponseItem
}

const EventDetailPage: NextPage<Props> = ({ selectedEvent }) => {
  const event = selectedEvent

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    )
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.description}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId = context.params?.eventId
  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getFeaturedEvents()
  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }))

  return {
    paths: paths,
    fallback: 'blocking',
  }
}

export default EventDetailPage
