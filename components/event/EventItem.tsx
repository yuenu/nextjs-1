import { DataItemProp } from '../../dummy-data'
import classes from './EventItem.module.css'
import Button from '../ui/Button'
import ArrowRightIcon from '../icon/ArrowRight'
import DateIcon from '../icon/Date'
import LocationIcon from '../icon/Location'

type Prop = {
  item: DataItemProp
}

function EventItem({ item }: Prop) {
  const { title, image, date, location, id } = item

  const humanReadableDate = new Date(date).toLocaleDateString(
    'en-US',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  )

  const formattedAddress = location.replace(', ', '\n')
  const exploreLink = `/events/${id}`

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt='' width='100%' height='10rem' />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <LocationIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <>
              <span>Explore Event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
