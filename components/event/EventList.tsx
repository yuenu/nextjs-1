import EventItem from './EventItem'
import type { DataProp } from '../../dummy-data'
import classes from './EventList.module.css'

type Prop = {
  items: DataProp
}

function EventList({ items }: Prop) {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </ul>
  )
}

export default EventList
