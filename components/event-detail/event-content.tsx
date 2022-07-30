import classes from './event-content.module.css';

type PropType = {
  children: React.ReactNode
}

function EventContent({children}: PropType) {
  return (
    <section className={classes.content}>
      {children}
    </section>
  );
}

export default EventContent;
