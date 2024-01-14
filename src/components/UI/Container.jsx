import classes from './Container.module.css'

export default function Container({ children, style }) {
  return (
    <div className={classes.container} style={style}>
      {children}
    </div>
  )
}
