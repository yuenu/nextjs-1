import Link from 'next/link'
import classes from './Button.module.css'

type PropType = {
  link?: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ link, children, onClick }: PropType) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    )
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
