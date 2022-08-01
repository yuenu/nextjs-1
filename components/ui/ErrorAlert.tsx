import classes from './ErrorAlert.module.css'

type PropType = {
  children: React.ReactNode
}

function ErrorAlert({ children }: PropType) {
  return <div className={classes.alert}>{children}</div>
}

export default ErrorAlert
