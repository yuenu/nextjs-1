import classes from './event-summary.module.css'

type PropType = {
  title: string
}

function EventSummary({ title }: PropType) {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  )
}

export default EventSummary
