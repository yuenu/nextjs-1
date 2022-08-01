import Button from '../ui/Button'
import classes from './ResultsTitle.module.css'

type PropType = {
  date: Date
}

function ResultsTitle({ date }: PropType) {
  const humanReadableDate = new Date(date).toLocaleDateString(
    'en-US',
    {
      month: 'long',
      year: 'numeric',
    }
  )

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  )
}

export default ResultsTitle
